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

  async function generateAnswer() {
    setAnswer("loading..");
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
      const cleanAnswer = rawAnswer.replace(/\*/g, ''); // Removes all asterisks
      setAnswer(cleanAnswer);
      speakAnswer(cleanAnswer);
    } catch (error) {
      console.error(error);
      setAnswer("Error generating answer");
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

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-black text-center">
          AI Assistant
        </h2>

        {/* Chat Container */}
        <div className="flex flex-col space-y-4 h-80 overflow-y-auto bg-gray-50 p-4 rounded-lg">
          {/* Question and Answer */}
          {question && (
            <div className="self-end bg-blue-500 text-white p-3 rounded-lg max-w-xs">
              {question}
            </div>
          )}
          {answer && (
            <div className="self-start bg-gray-300 text-gray-800 p-3 rounded-lg max-w-xs">
              {answer}
            </div>
          )}
        </div>

        {/* Input and Button */}
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Ask a question..."
        />

<div className="flex justify-between items-center">
  <button
    onClick={generateAnswer}
    className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg"
  >
    Submit
  </button>
  <FontAwesomeIcon
    icon={faMicrophone}
    size="2x"
    color={speaking ? 'red' : 'black'}
    onClick={speaking ? stopSpeaking : startSpeaking}
    className="cursor-pointer ml-4" // Add margin-left to the microphone icon
  />
</div>
      </div>
    </div>
  );
};

export default Ai;