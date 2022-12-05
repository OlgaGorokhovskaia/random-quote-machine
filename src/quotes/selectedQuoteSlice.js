import { createSlice } from '@reduxjs/toolkit';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

export function selectRandomQuote(){
    return function (dispatch, getState) {
      const { quotes: { items } } = getState();
      const index = getRandomNumber(items.length - 1);
      return dispatch(selectQuote(items[index]));
    }
};

export const selectedQuoteSlice = createSlice({
    name: 'selectedQuote',
    initialState: {
        text: '',
        author: '',
    },
    reducers: {
        selectQuote(state, action) {
            const { quote, author } = action.payload;
            state.text = quote;
            state.author = author;
        },
    },
});


export const { selectQuote } = selectedQuoteSlice.actions;

export default selectedQuoteSlice.reducer;