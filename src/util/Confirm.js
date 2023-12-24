import React from "react";
import "../assets/style/Button.css";
import Button from "./Button";
import reserved from "../assets/images/reserved.jpg";


const Confirm = ({ title, description, onClose }) => {
  return (
    <>
      <div data-testid="popup-background" className="popup-background" onClick={onClose}></div>
      <div className="popup">
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <section className="img-wrap"><img src={reserved} className="img-wrap" /></section>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
};

export default Confirm;