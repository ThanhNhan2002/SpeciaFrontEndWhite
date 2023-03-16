import React, { Component }  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function InitialParameters() {
  let { digitalWorkerId } = useParams();

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div style={{
            backgroundColor: 'white', 
            boxShadow: '0px 0px 8px rgb(100, 100, 100, 0.1)', 
            borderRadius: '12px', 
            border: '1px solid rgb(230, 230, 230)', 
            
            padding: '30px 50px 30px 50px',
            marginTop: '80px', 
            marginBottom: '80px', 
            marginLeft: '10px', 
            marginRight: '8vw',
            width: '80rem', 
          }}
      >
        <div style={{ margin: '15px 25px 45px 38px', flex:'1'}}>
          <Link to={`/marketplace/${digitalWorkerId}`} style={{textDecoration: 'none', color: 'white'}}>
              <div style={{display:'flex', justifyContent: 'flex-start'}}>
                  <div>
                    <img style={{ marginTop:'16px', width:'15px', height: '15px', opacity:'0.7'}} src={require('../../resources/leftAngleBracket.png')}/>
                  </div>
                  <div>
                    <button style={{border:'0px', backgroundColor:'white', fontSize: '1.3rem', opacity:'0.7', marginTop: '6px', marginLeft: '0px'}}>Back</button>
                  </div>
              </div>
          </Link>
        </div>

        <div id="cardItem">
          <div style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent:'flex-start', backgroundColor: "white", borderRadius: '10px', overflow: 'hidden', margin:'0px 0px 0px 0px'}}>
              <div style={{ padding:'5px 0 5px 27px'}}>
                <img src={require('../../resources/atoicon.png')} style={{width: "250px", height: "250px", boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '10px'}}/>
              </div>
              <div style={{ marginTop: '25px',  marginLeft:'40px', display:'flex', flexDirection:'column'}}>
                  <div>
                    <p style={{fontSize: '1.9rem', fontWeight: '700'}}>Digital Worker {digitalWorkerId}</p>
                  </div>
                  <div>
                    <p style={{fontSize: '1.1rem', fontWeight: '200'}}>by Spectar Group</p>
                  </div>
                  <div style={{marginTop: '55px'}}>
                      <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>$19.99</span>
                  </div>
              </div>
          </div>
        </div>

        <div style={{marginTop: '25px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '20px'}}>
            <div style={{paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 1</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" value="Some Value" />
                </div>
            </div>
            <div style={{paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 2</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" value="Some Value" />
                </div>
            </div>
            <div style={{  paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 3</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" value="Some Value" />
                </div>
            </div>
            <div style={{paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 4</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" />
                </div>
            </div>
            <div style={{textAlign: 'right', marginTop: '30px'}}>
              <Link to= {`/marketplace/${digitalWorkerId}/paymentportal`}>
                  <Button style={{paddingRight: '15px', paddingLeft: '15px', width: '200px', height:'50px'}} variant="secondary">Proceed to pay</Button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
