import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText && rating) {
      const newReview = {
        rating,
        text: reviewText,
        image: image ? URL.createObjectURL(image) : null,
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setRating(0);
      setImage(null);
    }
  };

  return (
    <div className='mt-20'>
      <div className='flex'>
        <p className='border px-5 py-3 text-sm'>Description</p>
        <p className='border px-5 py-3 text-sm'>Reviews ({reviews.length})</p>
      </div>

      {/* Set the form width to full */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 border px-6 py-6 w-full mx-auto'>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder='Write your review...'
          className='border p-2 w-full'
          rows={4}
        />

        <div>
          <label className='block'>Rating:</label>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <input
          type='file'
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
          className='border p-2 w-full'
        />

        <button type='submit' className='bg-blue-500 text-white px-4 py-2'>Submit Review</button>
      </form>

      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        {reviews.map((review, index) => (
          <div key={index} className='border p-4'>
            <div className='flex'>
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex} className={`cursor-pointer ${starIndex < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}>
                  ★
                </span>
              ))}
            </div>
            <p>{review.text}</p>
            {review.image && <img src={review.image} alt='Review upload' className='mt-2 w-32 h-32 object-cover' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;