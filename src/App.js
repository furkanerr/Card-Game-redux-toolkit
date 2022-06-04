import logo from './logo.svg';
import './App.css';
import {initialCards} from './features/gameSlice'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'

function App() {

  const dispatch = useDispatch();
  const game = useSelector((state)=>state.game)
  useEffect(() => {
    dispatch(initialCards())


  }, [])
  


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
