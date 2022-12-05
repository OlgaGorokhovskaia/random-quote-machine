import { createSlice } from '@reduxjs/toolkit';
import { selectRandomQuote } from './selectedQuoteSlice';


export const fetchQuotes = () => async (dispatch) => {
    dispatch(quotesLoading());
    const fetchData = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const data = await fetchData.json();
    if (data && data.quotes) {
        dispatch(quotesReceived(data.quotes));
        dispatch(selectRandomQuote());
    } else {
        dispatch(errorReceived(data.error));
    }
};

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
      loading: 'none',
      items: null,
      error: null,
    },
    reducers: {
        quotesLoading(state, action) {
            if (state.loading === 'none') {
            state.loading = 'pending';
            state.error = null;
            }
        },
        quotesReceived(state, action) {
            if (state.loading === 'pending') {
            state.loading = 'none';
            state.items = action.payload;
            }
        },
        errorReceived(state, action) {
            if (state.loading === 'pending') {
            state.loading = 'none';
            state.items = [];
            state.error = 'Error request';
            }
        },
    },
});


export const { quotesLoading, quotesReceived, errorReceived } = quotesSlice.actions;

export default quotesSlice.reducer;

