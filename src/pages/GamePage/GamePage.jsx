import { useEffect, useState } from "react";

//redux
import {
  initialCards,
  cardsSelector,
  increaseScore,
  decreaseScore,
  matched,
  pointSelector,
} from "../../features/gameSlice";
import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./GamePage.module.css";
import { motion,AnimatePresence } from "framer-motion";
//Components
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/footer";

const GamePage = () => {
  const [item1, setItem1] = useState(null);
  const [item2, setItem2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isEnd, setIsEnd] = useState(0);

  const dispatch = useDispatch();
  const Cards = useSelector(cardsSelector);
  const score = useSelector(pointSelector);
  useEffect(() => {
    dispatch(initialCards());
  }, [dispatch]);

  useEffect(() => {
    if (item1 && item2) {
      setDisabled(true);
      if (item1.src === item2.src) {
        if (isEnd < 10) {
          
          setIsEnd(isEnd + 1);
        } else {
          setIsEnd(0);
        }
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

  useEffect(() => {
   

    if (isEnd === 10) {
      
      if (localStorage.getItem("point")) {
        let prevPoint = parseInt(localStorage.getItem("point"));
        localStorage.setItem("point", prevPoint + score);
      } else {
        localStorage.setItem("point", score);
      }
    }
  }, [isEnd]);
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
      <motion.div className={styles.Container}>
        <Header reset={reset} />
        <div  className={styles.GameContainer}>
        <AnimatePresence>
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
          </AnimatePresence>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default GamePage;
