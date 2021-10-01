import React, { useEffect, useState, Component } from "react";

import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';

import './custom.css'

class App extends Component {

  static displayName = App.name;

    render() {
       
        return (

            <Layout>
            <Route exact path='/' component={Home} />
            <Route  path='/register' component={Register} />
            <Route  path='/login' component={Login} />
     
      </Layout>
    );
  }
}
export default App;