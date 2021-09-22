import React, {Component} from "react";

import PageWrapper from "./components/PageWrapper";

import {BrowserRouter as Router, Route, Link} from "react-router-dom"; 

// Pages
import Home from "./components/Pages/Home";
import Form from "./components/Common/Form";
import About from "./components/Pages/About";
class App extends Component {

  render (){

    return (
      <Router>
  
      <PageWrapper>
       
          <Route
          exact={true}
           path="/"
           component={Home}
          />
           
          
        <Route 
        
        path="/About"
        component={About}
        />
         
       <Route
       path="/Contact"
       component = {Form}
       />
        </PageWrapper>
        </Router> 

        
    )
  }
  

}
export default App;