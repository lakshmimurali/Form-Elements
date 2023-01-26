import React, { useState } from 'react';
import style from 'style.css';

export default function TextArea() {
  const [moviedescription, setMovieDescription] = useState(
    ' Share review of Thunivu'
  );
  let movieReviewChangeHandler = (event) => {
    console.log(event.target.value);
    setMovieDescription(event.target.value);
  };
  return (
    <div>
      <textarea
        name="movie-description"
        value={moviedescription}
        onChange={movieReviewChangeHandler}
        rows="10"
        cols="50"
      />
    </div>
  );
}
