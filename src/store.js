import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './quotes/quotesSlice';
import selectedQuoteReducer from './quotes/selectedQuoteSlice';

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    selectedQuote: selectedQuoteReducer,
  },
});

export default store;
