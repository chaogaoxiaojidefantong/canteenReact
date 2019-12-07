import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
 import Routes from '@configs/router.config'
 import Route from './router/';
 import store from '@/store/store';
 import { AppContainer } from 'react-hot-loader';
 import { createStore } from 'redux'
 const render=Component=>{
  ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
 }
 render(Route);
