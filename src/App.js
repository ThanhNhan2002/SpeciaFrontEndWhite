import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';
import DigitalWorkers from './pages/DigitalWorkers/DigitalWorkers';
import Layout from './Layout';
import DigitalWorkerDetails from './pages/DigitalWorkers/DigitalWorkerDetails';
import WorkerDetails from './pages/Marketplace/WorkerDetails';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from './auth/login/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Registration from './auth/registration/Registration';
import InitialParameters from './pages/Marketplace/InitialParameters';
import PaymentPortal from './pages/Marketplace/PaymentPortal';



function App() {


  return (
            <Routes>
              <Route path='/auth/login' element={<Login/>}></Route>
              <Route path='/auth/register' element={<Registration/>}></Route>
              <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>}>
                <Route index element={<Home/>}></Route>
                <Route path='/marketplace' element={<Marketplace/>}></Route>
                <Route path='/marketplace/:digitalWorkerId' element={<WorkerDetails/>}></Route>
                <Route path='/marketplace/:digitalWorkerId/initialparameters' element={<InitialParameters/>}></Route>
                <Route path='/marketplace/:digitalWorkerId/paymentportal'  element={<PaymentPortal/>}></Route>
                <Route path='/digitalworkers' element={<DigitalWorkers/>} exact></Route>
                <Route path='/digitalworkers/:digitalWorkerId' element={<DigitalWorkerDetails/>}></Route>
                
              </Route>
            </Routes>
  );
}

export default App;
