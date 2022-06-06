import React from "react";

//Styles
import styles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({ card, handleSelectedCard, disabled, selected }) => {
  const handleClick = () => {
    if (disabled === false) {
      handleSelectedCard(card);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className={styles.card}
    >
      <div
        className={
          card.matched === true || selected ? styles.flipped : styles.Container
        }
        onClick={() => handleClick()}
      >
        {card.matched === true || selected ? (
          <img className={styles.front} src={card.src} alt="resim" />
        ) : (
          <motion.div
            initial={{
              scale: 2.5,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className={styles.back}
          >
            ?
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
