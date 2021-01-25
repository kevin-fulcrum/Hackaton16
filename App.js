import React from 'react'
import {} from 'react-native'
import StackHome from './src/navigation/StackHome'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './src/redux/Store'

const {store,persistor} = reduxStore();

const App=()=>{
  return(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <StackHome></StackHome>
    </PersistGate>
    </Provider>
  )
};

export default App