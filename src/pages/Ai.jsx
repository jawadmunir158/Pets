import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Ai = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  async function generateAnswer() {
    setLoading(true);
    setAnswer("");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBPyymK00SUDy33pOSJ5t5H5Y8etLnvRjw",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      const rawAnswer = response.data.candidates[0].content.parts[0].text;

      // Remove unwanted characters (like '#' tags and any symbols) from the answer
      const cleanAnswer = rawAnswer.replace(/[^a-zA-Z0-9\s]/g, '').trim();
      setAnswer(cleanAnswer);
      setHistory(prev => [...prev, { question, answer: cleanAnswer }]);

      // Only speak if the user is actively using speech recognition
      if (speaking) {
        speakAnswer(cleanAnswer);
      }
    } catch (error) {
      console.error(error);
      setAnswer("Error generating answer");
    } finally {
      setLoading(false);
    }
  }

  function speakAnswer(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function startSpeaking() {
    setSpeaking(true);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        setStream(stream);
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
        mediaRecorder.start();

        const audioChunks = [];
        mediaRecorder.ondataavailable = event => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          audio.play();

          const speechRecognition = new webkitSpeechRecognition();
          speechRecognition.lang = 'en-US';
          speechRecognition.maxResults = 10;

          speechRecognition.onresult = event => {
            const transcript = event.results[0][0].transcript;
            setQuestion(transcript);
            generateAnswer();
          };

          speechRecognition.onspeechend = () => {
            setSpeaking(false);
          };

          speechRecognition.start();
        };
      })
      .catch(error => console.error('Error accessing microphone:', error));
  }

  function stopSpeaking() {
    if (mediaRecorder) {
      mediaRecorder.stop();
      stream.getTracks().forEach(track => track.stop());
      setSpeaking(false);
    }
  }

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark', !darkMode); // Toggle dark class on body
  };

  return (
    <div className={`h-screen flex justify-center items-center `}>
      <div className={`max-w-2xl w-full rounded-lg shadow-lg p-6 flex flex-col space-y-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-3xl font-semibold text-center">Assistant for Pets</h2>

        <div className="flex flex-col space-y-4 h-80 overflow-y-auto bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
          {history.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="self-end bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                {item.question}
              </div>
              <div className="self-start bg-gray-300 text-gray-800 p-3 rounded-lg max-w-xs dark:bg-gray-600 dark:text-white">
                {item.answer}
              </div>
            </div>
          ))}
          {loading && (
            <div className="self-center text-gray-500">
              Loading...
            </div>
          )}
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) { // Prevents submitting on Shift + Enter
              e.preventDefault(); // Prevents the default behavior of adding a new line
              generateAnswer(); // Calls the function to generate the answer
            }
          }}
          className={`w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-600 text-white border-gray-500' : ''}`}
          rows="3"
          placeholder="Ask about Pets..."
        />

        <div className="flex justify-between items-center">
          <button
            onClick={generateAnswer}
            className={`w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          <FontAwesomeIcon
            icon={faMicrophone}
            size="2x"
            color={speaking ? 'red' : 'black'}
            onClick={speaking ? stopSpeaking : startSpeaking}
            className="cursor-pointer ml-4"
          />
        
        </div>
      </div>
    </div>
  );
};

export default Ai;