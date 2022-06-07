import './App.css'
import { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');

  const updateMovie = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setMovieName(e.target.value)
  }

  const updateReview = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setReview(e.target.value)
  }

const submitChange = () => {
  Axios.post('http://localhost:3001/api/insert/',{
    movieName:movieName,
    movieReview: review
  }).then(() => {
    alert("successful insert");
  });
}
  return (
    <div className="App">
        <h1>CRUD Application</h1>
        <div className="form">
            <label>Movie Name</label>
            <input onChange={updateMovie}type="text" name="movieName" />
            <label>Review</label>
            <input onChange={updateReview} type="text" name="review" />
            <button onClick={submitChange}>Submit</button>
        </div>
    </div>
  );
}

export default App;