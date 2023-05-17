import React, { useState, useEffect } from "react";
import "./Quote.css";

function Random() {
  const [quote, setQuote] = useState("");
  const [quoteColor, setQuoteColor] = useState("");

  useEffect(() => {
    const fetchQuote = () => {
      fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * data.length);
          setQuote(data[randomIndex].text);
          setQuoteColor(generateRandomColor());
        })
        .catch((error) => {
          console.error("Error fetching quotes:", error);
        });
    };

    fetchQuote();

    const timer = setInterval(fetchQuote, 5000);

    return () => clearInterval(timer);
  }, []);

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const quoteStyle = {
    color: quoteColor,
  };

  return (
    <div className="quote-container">
      <h1 className="quote-title">Random Quote:</h1>
      <p className="quote-text" style={quoteStyle}>
        {quote}
      </p>
    </div>
  );
}

export default Random;
