import React from 'react';
import Popular from './Popular';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import {Switch} from 'react-router-dom';
import Results from './Results';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function() {
              return <p>Not Found </p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
