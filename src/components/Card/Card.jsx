import React from "react";

//Styles
import styles from "./Card.module.css";

const Card = ({ card, handleSelectedCard, disabled, selected }) => {
  //console.log(selected)
  const handleClick = () => {
    if (disabled === false) {
      handleSelectedCard(card);
    }
  };
  return (
    <div className="card">
      <div
        className={
          card.matched === true || selected ? styles.flipped : styles.Container
        }
        onClick={() => handleClick()}
      >
        <img className={styles.front} src={card.src} alt="resim" />
        <div className={styles.back}>?</div>
      </div>
    </div>
  );
};

export default Card;
