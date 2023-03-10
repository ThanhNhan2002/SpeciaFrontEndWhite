
import React, { Component } from 'react';

export default () => {
    return (
        <div style={{textAlign: "left", marginLeft: "50px", marginRight: "50px", marginTop: "30px"}}>
            <div>
                <p style={{fontSize: '3rem'}}>Welcome, Username!</p>
                <div style={{display: "flex", height: "35vh", marginTop: '50px'}}>
                    <div style={{flex: 1, backgroundColor: "white", marginRight: '10px'}}></div>
                    <div style={{flex: 1, backgroundColor: "white", marginRight: '10px'}}></div>
                    <div style={{flex: 1, backgroundColor: "white", marginRight: '10px'}}></div>
                    <div style={{flex: 1, backgroundColor: "white", marginRight: '10px'}}></div>
                    <div style={{flex: 1, backgroundColor: "white"}}></div>
                </div>
                <div style={{display: "flex", height: "35vh", marginTop: '10px'}}>
                    <div style={{flex: 1, backgroundColor: "white", marginRight: '10px'}}></div>
                    <div style={{flex: 1, backgroundColor: "white"}}></div>
                </div>
            </div>
        </div>
    )
}