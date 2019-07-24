import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middleware';
import Layout from './components/layout/layout';

const store = createStore(reducer, middleware);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
