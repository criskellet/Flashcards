// topicsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

// create 'topics' slice
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    
        
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.url,
                quizIds: []
                    
            };
            
            // add new topic object using id as a key
            state.topics[action.payload.id] = newTopic;
           
            
            
        }, //addTopic()
        
        addTopicQuiz: (state, action) => {
            // add the quiz id to the relevant topic quiz id array
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            
        } //addTopicQuiz
    }
});

// define topics selector
export const selectTopics = (state) => state.topics.topics;


export const {addTopic, addTopicQuiz} = topicsSlice.actions;
export default topicsSlice.reducer;