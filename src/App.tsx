import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AppContainer } from './App.styles';
import CustomerView from './view/CustomerView';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <CustomerView />
    </Provider>
  </AppContainer>
);

export default App;
