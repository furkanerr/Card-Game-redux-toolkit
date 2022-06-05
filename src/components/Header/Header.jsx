import React from "react";
//styles
import styles from "./Header.module.css";
//redux
import { useSelector, useDispatch } from "react-redux";
import { pointSelector, initialCards, resetCard } from "../../features/gameSlice";
const Header = ({reset}) => {
  const dispatch = useDispatch();
  const score = useSelector(pointSelector);

  const handleClick=()=>{
      dispatch(resetCard())
     // dispatch(initialCards())
     setTimeout(() => {
      reset();
    }, 1000);
      console.log('çalişti');
  }
  return (
    <main className={styles.container}>
      <article className={styles.PointContainer}>
        <p>Point: {score}</p>
        <div className={styles.reStartButton} onClick={handleClick}>
          Restart Game
        </div>
      </article>
    </main>
  );
};

export default Header;
