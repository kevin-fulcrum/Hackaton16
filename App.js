import React from 'react'
import {} from 'react-native'
import StackHome from './src/navigation/StackHome'
import {Provider} from 'react-redux'
import reduxStore from './src/redux/Store'

const {store} = reduxStore();

const App=()=>{
  return(
    <Provider store={store}>
    <StackHome></StackHome>
    </Provider>
  )
};

export default App