import React, { useState, useEffect } from "react";
import "./App.css";
import BeerContainer from "./components/BeerContainer";

function App() {
  const [beers, setbeers] = useState([]);

  const fetchBeers = async () => {
    const request = await fetch("https://api.punkapi.com/v2/beers");
    const data = await request.json();
    setbeers(data);
  };

  // useEffect hook to fetch data from API one time on load of the page
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div className="app">
      <BeerContainer beer={beers} />
    </div>
  );
}

export default App;
