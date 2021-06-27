
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import {persister, store} from './src/redux/store';


import {persister, store} from './src/Redux/store'
import AppNav from './AppNav';

const App = () => {1
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
           <AppNav />
           </PersistGate>
    </Provider>
  );
};
export default App;