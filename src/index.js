import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import AppWithState from './App';
import './index.css';

class Root extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <AppWithState />
        </Provider> 
      </React.StrictMode>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Root />);
