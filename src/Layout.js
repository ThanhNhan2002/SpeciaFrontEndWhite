import { Outlet, Link, useLocation } from "react-router-dom";
import React, { Component } from 'react';

import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from 'js-cookie';

const Layout = () => {

  const navigate = useNavigate();

  const location = useLocation()


  function logout(){
    console.log('log out')
    Cookies.remove('oidc_id_token')
    return navigate('/auth/login')
  }

  return (
    <>
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>

        <div style={{display: "flex", flexDirection: "row", height: "100%", flex: 1,}}>
          <div style={{height: '100%'}}>
            <div style={{height: '100%'}}>
              <ul style={{listStyleType: "none", margin: "0", padding: 0, display: 'flex', flexDirection: 'column', height: '100%'}}>
                <li style={{marginLeft: "auto", marginRight: "auto", marginTop: "40px", marginBottom: "40px"}}>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: 'transparent', border: 0, padding: 0}}>
                    <img width="40px" src={require('./resources/UserAvatar.png')} style={{border: "1px solid black", borderRadius: '50px'}}/>
                  </button>
                  <ul style={{paddingLeft: '15px'}} class="dropdown-menu">
                    <li style={{cursor: 'pointer'}} onClick={logout}>Log out</li>
                  </ul>
                </li>
                <div style={{flex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <li style={{paddingLeft: "25px", paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", marginTop: "20px", marginBottom: "20px", borderLeft: location.pathname == '/'? '5px solid grey': '5px solid transparent'}}>
                      <Link to="/">
                          <img src={require('./resources/home.png')}/>
                      </Link>
                  </li>
                  <li style={{paddingLeft: "25px", paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", marginTop: "20px", marginBottom: "20px", borderLeft: location.pathname.includes('marketplace')? '5px solid grey': '5px solid transparent'}}>
                      <Link to="/marketplace">
                          <img src={require('./resources/marketplace.png')}/>
                      </Link>
                  </li>
                  <li style={{paddingLeft: "25px", paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", marginTop: "20px", marginBottom: "20px", borderLeft: location.pathname.includes('digitalworkers')? '5px solid grey': '5px solid transparent'}}>
                      <Link to="/digitalworkers">
                          <img src={require('./resources/digitalworkers.png')}/>
                      </Link>
                  </li>
                </div>
                <li style={{marginLeft: "auto", marginRight: "auto", marginTop: "40px", marginBottom: "40px"}}>
                    <div style={{width: '40px', height: '40px'}}></div>
                </li>
              </ul>
            </div>
          </div>
          <div style={{flex: 1, overflowY: 'auto'}}>
              <Outlet />
          </div>
        </div>
      </div>

    </>
  )
};

export default Layout;