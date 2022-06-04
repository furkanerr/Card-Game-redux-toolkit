import {useEffect} from 'react'

//redux
import {initialCards} from '../../features/gameSlice'
import { useSelector, useDispatch } from 'react-redux'


const GamePage = () => {
    const dispatch = useDispatch();
  const game = useSelector((state)=>state.game)
  useEffect(() => {
    dispatch(initialCards())


  }, [])
  
  return (
    <div>GamePage</div>
  )
}

export default GamePage