import React from "react";
import "../css/beerCard.css";

function BeerCard({ beer }) {
  const { name, image_url, id, tagline, abv } = beer;
  return (
    <div className="beer-card">
      <h3 className="beer-name">{name}</h3>
      <p className="tagline">{tagline}</p>
      <img src={image_url} alt={id} className="beer-img" />
      <p className="abv">
        <strong>abv:</strong> {abv}
      </p>
     
    </div>
  );
}

export default BeerCard;
