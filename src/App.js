import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css'
import Home from './components/Home'

const App = props => {
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
    </Fragment>
  )
}

export default withRouter(App)
