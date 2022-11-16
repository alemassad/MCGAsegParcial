
import React from 'react';
import './App.css';
import Products from './components/Products';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

function App() {

  const store = generateStore()
  
  return (
    <Provider store={store}>     
      <Products />
    </Provider>
  );
}

export default App;
