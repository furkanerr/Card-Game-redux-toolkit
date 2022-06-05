import { useEffect, useState } from "react";

//redux
import {
  initialCards,
  cardsSelector,
  increaseScore,
  decreaseScore,
  matched,
 
} from "../../features/gameSlice";
import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./GamePage.module.css";
//Components
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/footer";

const GamePage = () => {
  const [item1, setItem1] = useState(null);
  const [item2, setItem2] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const Cards = useSelector(cardsSelector);
  useEffect(() => {
    dispatch(initialCards());
  }, [dispatch]);

  useEffect(() => {
    if (item1 && item2) {
      setDisabled(true);
      if (item1.src === item2.src) {
        dispatch(increaseScore());
        dispatch(matched(item1));
        reset();
      } else {
        dispatch(decreaseScore());
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
  }, [item1, item2, dispatch]);

  const reset = () => {
    setItem1(null);
    setItem2(null);

    setDisabled(false);
  };
  const handleClick = (card) => {
    item1 && item1 !== card ? setItem2(card) : setItem1(card);
  };
  return (
    <>
      <div className={styles.Container}>
        <Header />
        <div className={styles.GameContainer}>
          {Cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                handleSelectedCard={handleClick}
                selected={card === item1 || card === item2}
                disabled={disabled}
              />
            );
          })}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default GamePage;
