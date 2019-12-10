import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
 import Route from './router/';
 import store from '@/store/store';
 import { AppContainer } from 'react-hot-loader';
 import registerServiceWorker from './registerServiceWorker';
 import './style/common.less'
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
 registerServiceWorker();