import React from "react";
import "./styles.css";
import { useState } from "react";

const seriesDB = {
  Thriller: [
    { name: "Breaking Bad", rating: "5/5" },
    { name: "Money Heist", rating: "4/5" },
    { name: "Walking Dead", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: "Dark",
      rating: "5/5"
    },
    {
      name: "The Boys",
      rating: "4.5/5"
    },
    {
      name: "Stranger Things",
      rating: "4.5/5"
    }
  ],
  Romance: [
    {
      name: "Friends",
      rating: "5/5"
    },
    {
      name: "Riverdale",
      rating: "4/5"
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
      <h1> Best Web Series</h1>
      <p style={{ fontSize: "medium" }}>
        choose a genre and I'll give you my recommendations!
      </p>

      <div>
        {Object.keys(seriesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "green",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px solid white",
              margin: "1rem 0.4rem",
              color: "white"
            }}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ border: "4px solid blue", borderRadius: "10px" }} />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {seriesDB[selectedGenre].map((series) => (
            <li
              key={series.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid green",
                width: "70%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {series.name} </div>
              <div style={{ fontSize: "smaller" }}> {series.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
