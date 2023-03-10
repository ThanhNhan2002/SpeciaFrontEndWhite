import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

const Layout = () => {
  return (
    <>
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{padding: 0}}>
            <div class="container-fluid" style={{backgroundColor: "#673AB7", paddingTop: '9px', paddingBottom: '9px', paddingLeft: "20px"}}>
              <a class="navbar-brand" href="#" style={{color: "white"}}>Specia Portal</a>
            </div>
          </nav>
        </div>
        <div style={{display: "flex", flexDirection: "row", height: "100%", flex: 1}}>
          <div style={{}}>
            <div>
              <ul style={{listStyleType: "none", margin: "0", padding: 0}}>
                <li style={{marginLeft: "20px", marginRight: "20px", marginTop: "40px", marginBottom: "40px"}}>
                    <Link to="/">
                        <img src={require('./resources/home.png')}/>
                    </Link>
                </li>
                <li style={{marginLeft: "20px", marginRight: "20px", marginTop: "40px", marginBottom: "40px"}}>
                    <Link to="/marketplace">
                        <img src={require('./resources/marketplace.png')}/>
                    </Link>
                </li>
                <li style={{marginLeft: "20px", marginRight: "20px", marginTop: "40px", marginBottom: "40px"}}>
                    <Link to="/digitalworkers">
                        <img src={require('./resources/digitalworkers.png')}/>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
          <div style={{flex: 1, backgroundColor: "#F5F5F5"}}>
            <Outlet />
          </div>
        </div>
      </div>

    </>
  )
};

export default Layout;