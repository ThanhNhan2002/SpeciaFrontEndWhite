
import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Description from '../DigitalWorkers/Description';
import InitialParameters from './InitialParameters';
import Capabilities from './Capabilities';
import PurchaseResultModal from './PurchaseResultModal';

export default() =>  {
    let { digitalWorkerId } = useParams();
    const [purchaseResult, setPurchaseResult] = useState(false)

    function openPurchaseResult(){
        setPurchaseResult(true)
    }

    function closePurchaseResult(){
        setPurchaseResult(false)
    }

    return (
        <div style={{ display: 'flex', textAlign: "left", height: '100%', color: 'rgb(70, 70, 70)'}}>
            <div style={{ flex: 1, backgroundColor: 'white', marginRight: '10px', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '12px', border: '1px solid rgb(230, 230, 230)', marginTop: "20px", marginBottom: '20px'}}>                
                <Link to="/marketplace/" style={{textDecoration: 'none', color: 'black'}}>
                    <button className='btn-close' style={{"fontSize": '1.2rem', marginTop: '20px', marginLeft: '20px'}}></button>
                </Link>
                <div style={{marginTop: '50px', textAlign: 'center'}}>
                    <img src={require('../../resources/atoicon.png')} style={{width: "150px", height: "150px", boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '10px'}}/>
                    <div style={{paddingTop: '50px', marginBottom: '50px'}}>
                        <p style={{fontSize: '2rem', fontWeight: '600', marginBottom: '10px'}}>Digital Worker {digitalWorkerId}</p>
                        <p style={{fontSize: '1.1rem', fontWeight: '400', color: 'rgb(150, 150, 150)'}}>Spectar Group</p>
                    </div>
                    <div style={{display: 'flex', flexDirection:'column', height: '80px', justifyContent:'space-between', alignItems:'center' }}>
                      {/* <Button onClick={() => setPurchaseResult(true)} style={{paddingRight: '20px', paddingLeft: '20px', width: '200px'}} variant="secondary">Free Trial</Button> */}
                      {/* <Button onClick={() => setPurchaseResult(true)} style={{paddingRight: '20px', paddingLeft: '20px', width: '200px'}} variant="secondary">$19.99</Button> */}
                      <Link to= {`/marketplace/${digitalWorkerId}/initialparameters`}>
                        <Button style={{paddingRight: '20px', paddingLeft: '20px', width: '200px'}} variant="secondary">$19.99</Button>
                      </Link>
                      <Link to= {`/marketplace/${digitalWorkerId}/initialparameters`}>
                        <Button style={{paddingRight: '20px', paddingLeft: '20px', width: '200px'}} variant="secondary">Free Trial</Button>
                      </Link>
                    </div>
                </div>
            </div>

            <div style={{flex: 2, overflowY: 'scroll', paddingRight: '20px'}}>
                <Description/>
                <Capabilities />
                {/* <InitialParameters/> */}
            </div>

            <PurchaseResultModal isShow={purchaseResult}  onClose={closePurchaseResult} ></PurchaseResultModal>
        </div>
    )
}

