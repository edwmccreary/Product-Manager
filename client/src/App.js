import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom";
//views
import Main from './Main';
import ProductForm from './views/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ProductForm/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
