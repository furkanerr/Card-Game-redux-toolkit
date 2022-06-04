import { createSlice } from "@reduxjs/toolkit";


const initialState  ={
    score:0,
    cards:[]
}

export const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        initialCards: (state) => {
            let card;
                for(let i=1;i<=10;i++){
                    card = {
                        id:i,
                        src:`src/images/${i}`,
                        matched:false
                    }
                    state.cards = [...state.cards,card]
                }
                
                state.cards=[...state.cards.sort(() => Math.random() - 0.5)]
                console.log(state.cards)
        },



    }
})

export const { initialCards} = gameSlice.actions

export default gameSlice.reducer