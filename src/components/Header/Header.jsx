import React from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./Header.module.css";
//redux
import { useSelector, useDispatch } from "react-redux";
import { pointSelector, resetCard, removeCard } from "../../features/gameSlice";

const Header = ({ reset }) => {
  const dispatch = useDispatch();
  const score = useSelector(pointSelector);

  const handleClick = () => {
    dispatch(resetCard());
    reset();
  };

  const handleHomePageClick = () => {
    dispatch(removeCard());
    reset();
  };
  return (
    <main className={styles.container}>
      <article className={styles.PointContainer}>
        <p>Point: {score}</p>
        <div className={styles.reStartButton} onClick={handleClick}>
          Restart Game
        </div>
        <Link to={"/"}>
          <div className={styles.reStartButton} onClick={handleHomePageClick}>
            Home Page
          </div>
        </Link>
      </article>
    </main>
  );
};

export default Header;
