// import { createSlice } from "@reduxjs/toolkit";

// const gptSlice = createSlice({
//     name: "gpt",
//     initialState: {
//         showGptSearch: false
//     },
//     reducers: {
//         toggleGptSearchView : (state) => {
//             state.showGptSearch = !state.showGptSearch
//         }
//     }
// })

// export const { toggleGptSearchView } = gptSlice.actions

// export default gptSlice.reducer

import {createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        searchResult: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
           const{movieNames,movieResult}=action.payload;  // here we are extracting that actions from gpt search bar to pass multiple actions.
           state.movieNames=movieNames;  // here and in below line we are setting this into the state.
           state.movieResult=movieResult
        }
    },
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;