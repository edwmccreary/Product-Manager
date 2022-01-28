import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom";
//views
import ProductForm from './views/ProductForm';
import ProductView from './views/ProductView';
import ProductEdit from './views/ProductEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ProductForm/>
          </Route>
          <Route exact path="/products/:_id">
            <ProductView/>
          </Route>
          <Route exact path="/products/edit/:_id">
            <ProductEdit/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
