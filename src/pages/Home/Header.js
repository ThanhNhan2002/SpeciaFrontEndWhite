import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';

export default () => {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{flex: 1, marginTop: '200px', marginBottom: '200px', paddingRight: '50px', paddingLeft: '30px',}}>
                <p style={{fontSize: '2.7rem', color: 'black', fontWeight: '200', letterSpacing: '10px'}}>WELCOME TO SPECIA PORTAL</p>
            </div>
            <div style={{flex: 1, paddingTop: '15px', paddingBottom: '15px', paddingLeft: '20vw'}}>
                {/* <Form.Control style={{backgroundColor: 'rgb(255, 255, 255, 0.5)', height: '50px', border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '5px'}} type="text" placeholder="Search" /> */}
            </div>
        </div>
    )
}