import React from 'react'
import { Route } from 'react-router-dom'
import DictionaryContainer from './containers/DictionaryContainer/'

const App = () => (
  <React.Fragment>
    <Route exact path='/' component={DictionaryContainer}/>
  </React.Fragment>
)

export default App
