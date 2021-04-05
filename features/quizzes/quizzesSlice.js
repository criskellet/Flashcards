// quizzesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addTopicQuiz } from '../topics/topicsSlice.js';


export const addQuizToTopic = (payload) => {
    
    return (dispatch) => {
        console.log(`Calling addQuiz: ${payload.quizId} ${payload.topicId} ${payload.name}`);
            dispatch(addQuiz(payload));
        console.log(`Calling addTopicQuiz ${payload.quizId} ${payload.topicId} ${payload.name}`);
            dispatch(addTopicQuiz(payload));
        return Promise.resolve();
            
    };

    
};

// create 'quizzes' slice
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        allquizzes: {}
    },
    
        
    reducers: {
        addQuiz: (state, action) => {
            
            const newQuiz = {
                id: action.payload.quizId,
                topicId: action.payload.topicId,
                name: action.payload.name,
                cardIds: action.payload.cardIds
                    
            };
            
            // add new quiz object using id as a key
            state.allquizzes[action.payload.quizId] = newQuiz;
            
           
            
        } //addQuiz()
    }
});

// define quizzes selector
export const selectQuizzes = (state) => state.quizzes.allquizzes;


export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;