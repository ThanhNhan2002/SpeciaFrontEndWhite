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
            
            padding: '30px 30px 30px 30px',
            marginTop: '80px', 
            marginBottom: '80px', 
            marginLeft: '10px', 
            width: '80rem', 
          }}
      >

        {/* <div>
            <p style={{fontSize: '1.2rem', paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', borderBottom: '1px solid rgb(230, 230, 230)', fontWeight: '600'}}>Initial Parameters</p>
        </div> */}

        <div id="cardItem">


              <div style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent:'space-between', backgroundColor: "white", borderRadius: '10px', overflow: 'hidden'}}>
                  <div>
                    <img src={require('../../resources/atoicon.png')} style={{width: "250px", height: "250px"}}/>
                  </div>
                  <div style={{ marginTop: '25px', display:'flex', flexDirection:'column'}}>
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

                  <div style={{ margin: '24px 25px 0px 0px', flex:'1', textAlign:'right'}}>
                    <Link to={`/marketplace/${digitalWorkerId}`} style={{textDecoration: 'none', color: 'black'}}>
                          <button className='btn-close' style={{"fontSize": '1.2rem', marginTop: '20px', marginLeft: '20px'}}></button>
                    </Link>
                  </div>
              </div>
        </div>

        <div style={{marginTop: '25px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '20px'}}>
            <div style={{paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 1</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" value="Some Value" />
                    {/* <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i> */}
                </div>
            </div>
            <div style={{paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 2</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" value="Some Value" />
                    {/* <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i> */}
                </div>
            </div>
            <div style={{  paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 3</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" value="Some Value" />
                    {/* <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i> */}
                </div>
            </div>
            <div style={{paddingBottom: '30px'}}>
                <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 4</Form.Label>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control style={{flex: 1, height:'50px'}} type="text" placeholder="" />
                    {/* <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i> */}
                </div>
            </div>
            <div style={{textAlign: 'right', marginTop: '30px'}}>
              <Link to= {`#`}>
                  <Button style={{paddingRight: '15px', paddingLeft: '15px', width: '200px', height:'50px'}} variant="secondary">Proceed to pay</Button>
              </Link>
            </div>
        </div>





      </div>
    </div>
  )
}
