import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import store from './store';
import ModalRoot from './ModalRoot';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
      <ModalRoot />
    </Provider>
  );
}

export default App;
