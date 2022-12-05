import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchQuotes } from './quotes/quotesSlice';
import { selectRandomQuote } from './quotes/selectedQuoteSlice';
import * as logo from './images/twitter-logo.png';
import './App.css';


export const App = (props) => {
  const dispatch = useDispatch();
  const { quotes, isLoading, getNewQuote, getQuotes, selectedQuote } = props;

React.useEffect(() => {
    if(!isLoading && quotes === null) {
        getQuotes();
    }
})

  const handleClick = () => {
    dispatch(getNewQuote());
  };

  const isDisabled = quotes === null || quotes.length <= 1;
  const classNameBtn = isDisabled ? 'btn disabled' : 'btn';

  const { text, author } = selectedQuote;

  return (
    <div id="quote-box">
      {isLoading && (
        <center>Loading ... </center>
      )}
      {!isLoading && (
        <>
          {!!text && <p id="text">{text}</p>}
          {!!author && <p id="author">— {author}</p>}
    
          <div id="btn-controls">
            <a id="tweet-quote" className={classNameBtn} href="twitter.com/intent/tweet" target="_blank">
              <img src={logo} alt="twitter-logo"/>
            </a>
            <button 
              id="new-quote" 
              className={classNameBtn}
              onClick={handleClick} 
              disabled={isDisabled}
            > 
              New quote
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return { 
    quotes: state.quotes.items,
    selectedQuote: state.selectedQuote,
    isLoading: state.quotes.loading !== 'none',
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getQuotes: () => dispatch(fetchQuotes()),
    getNewQuote: () => dispatch(selectRandomQuote()),
    dispatch
  }
};

const AppWithState = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithState;
