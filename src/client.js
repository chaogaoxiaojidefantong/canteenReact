import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
 import configure from '@middleware/configureStore'
 import Routes from '@configs/router.config'
 import store from '@middleware/store'
 import { createStore } from 'redux'
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
debugger