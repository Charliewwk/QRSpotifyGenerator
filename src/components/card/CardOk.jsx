import React from "react";
import "./cardOk.css";

const CardOk = ({ partNumber, description }) => {
  return (
    <div className="cardOk">
      <h6>Link de Canción</h6>
      <p>{partNumber}</p>
      <h6>Descripción:</h6>
      <p>{description}</p>
    </div>
  );
};

export default CardOk;
