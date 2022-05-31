import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Feature() {

  return (
    <Switch>
      <Route path="/product">
        <Home />
        <ToastContainer
        position="top-center"
        autoClose={3000} />
      </Route>
    </Switch>
  )
}

