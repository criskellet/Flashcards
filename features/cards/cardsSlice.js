// cardsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

// create 'topics' slice
export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    
        
    reducers: {
        addCard: (state, action) => {
            const newCard = {
                id: action.payload.cardId,
                front: action.payload.front,
                back: action.payload.back
                    
            };
            
            // add new card object using id as a key
            state.cards[action.payload.cardId] = newCard;
           
            
            
        }, //addCard()
        
        addTopicQuiz: (state, action) => {
            // add the quiz id to the relevant topic quiz id array
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            
        } //addTopicQuiz
    }
});

// define cards selector
export const selectCards = (state) => state.cards.cards;


export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;