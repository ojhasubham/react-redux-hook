import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Home, AboutUs, ContactUs } from './components'

class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default Routes
