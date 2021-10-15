import React from "react";
import "../css/beerContainer.css";
import BeerCard from "./BeerCard";

function BeerContainer({ beer }) {
  return (
    <>
      <div>
        <h1 id='beer-header'>All Beers</h1>
      </div>
    <div className="container">

      {beer.map((beer) => (
        <BeerCard beer={beer} key={beer.id} />
      ))}
    </div>
    </>
  );
}

export default BeerContainer;
