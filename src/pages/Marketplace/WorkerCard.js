import React, { Component }  from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Outlet, Link } from "react-router-dom";

function WorkerCard() {
  return (
    // src\pages\Marketplace\WorkerCard.js
        <Card style={{ width: '198px', height: '198px' }}>

          {/* <Card.Body style={{ textAlign: 'right' }}>
            <Card.Title>Digital Worker 1</Card.Title>
            <Card.Subtitle>Spectar Group</Card.Subtitle>
            <Card.Text>$15.99</Card.Text>
          </Card.Body> */}

          <div class="card text-right" style={{width: '18rem'}}>
            <Card.Img variant="top" style={ {width: '93px', height:'93px', margin: 'auto' }} src={ require('../../resources/atoicon.png')  }></Card.Img>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

              
                
              

              <Link to="/digitalworkers"><div class="btn btn-primary">Go somewhere</div></Link>
             
           
            </div>
          </div>
        </Card>
  )
}

export default WorkerCard;