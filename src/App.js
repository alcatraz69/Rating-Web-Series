import React from "react";
import "./styles.css";
import { useState } from "react";

const seriesDB = {
  Thriller: [
    { name: "Breaking Bad", rating: "5/5" },
    { name: "Money Heist", rating: "4/5" }
  ],

  fiction: [
    {
      name: "Dark",
      rating: "4.5/5"
    },
    {
      name: "The Boys",
      rating: "4.5/5"
    }
  ],
  Romance: [
    {
      name: "Friends",
      rating: "5/5"
    },
    {
      name: "This is us",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📺 Best Web Series </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Web Series. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(seriesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {seriesDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
