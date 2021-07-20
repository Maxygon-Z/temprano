import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react' 
import Nav from '../components/navigate/NavUser'
import Home from '../pages/Home'
import Formul from '../pages/formul'

function RutasC() {
    return (
      <Router>
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user" exact component={Formul}/>
        </Switch>
      </Router>
    );
  }
  
  export default RutasC;