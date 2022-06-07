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
                        src:`/images/${i}.png`,
                        matched:false,
                        
                    }
                    
                    state.cards = [...state.cards,card]     
                   
                }
                    state.cards=[...state.cards.sort(() => Math.random() - 0.5)]
                    
            
                            
        },

        matched:(state,action)=>{
            state.cards.forEach(item =>{
                if(action.payload.id === item.id){
                    item.matched=true;
                    item.isDisabled=true;
                    
                }
            })
           
        },
        resetCard:(state) =>{   
               
            state.cards.forEach((card)=>{
                card.matched =false
            })
            state.score =0;
            state.cards.sort(() => Math.random() - 0.5)
           
        },
        removeCard:(state) =>{
            state.cards =[]
            state.score =0;
        },
        increaseScore:(state) =>{
          state.score =  state.score+50;
        },

        decreaseScore:(state) =>{
            state.score = state.score-10;
        }


    }
})

export const cardsSelector = (state)=>state.game.cards
export const pointSelector = (state) => state.game.score

export const { initialCards,matched,increaseScore,decreaseScore,resetCard,removeCard} = gameSlice.actions

export default gameSlice.reducer