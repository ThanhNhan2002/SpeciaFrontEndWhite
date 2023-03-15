
import React, { useState, Component } from 'react';

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router-dom';


import Description from '../DigitalWorkers/Description';
import InitialParameters from '../DigitalWorkers/InitialParameters';
import Capabilities from './Capabilities';

import PurchaseResultModal from './PurchaseResultModal';
// import RunHistory from './RunHistory';
// import RuntimeParameterModal from './RuntimeParameterModal';
// import BotExecutingModal from './BotExecutingModal';
// import ResultModal from './ResultModal';

export default() =>  {

    let { digitalWorkerId } = useParams();

    const [purchaseResult, setPurchaseResult] = useState(false)

    // const [botExecutingModalShow, setBotExecutingModalShow] = useState(false)

    // const [resultModalShow, setResultModalShow] = useState(false)

    function openPurchaseResult(){
        setPurchaseResult(true)
    }

    function closePurchaseResult(){
        setPurchaseResult(false)
    }

    // function openBotExecutingModal(){
    //     setRuntimeParameterModalShow(false)
    //     setBotExecutingModalShow(true)
    //     setTimeout(()=> {
    //         closeBotExecutingModal()
    //     }, 5000)
        

    // }
    // function closeBotExecutingModal(){
    //     setBotExecutingModalShow(false)
    // }


    // function openResultModal(){
    //     setResultModalShow(true)
    // }
    // function closeResultModal(){
    //     setResultModalShow(false)
    // }

    return (
        <div style={{ display: 'flex', textAlign: "left", height: '100%', color: 'rgb(70, 70, 70)'}}>
            <div style={{ flex: 1, backgroundColor: 'white', marginRight: '10px', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '12px', border: '1px solid rgb(230, 230, 230)', marginTop: "20px", marginBottom: '20px'}}>
            {/* <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}> */}
                
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
                      <Button onClick={() => setPurchaseResult(true)} style={{paddingRight: '20px', paddingLeft: '20px', width: '200px'}} variant="secondary">Free Trial</Button>
                      <Button onClick={() => setPurchaseResult(true)} style={{paddingRight: '20px', paddingLeft: '20px', width: '200px'}} variant="secondary">$19.99</Button>
                    </div>
                </div>
            </div>

            <div style={{flex: 2, overflowY: 'scroll', paddingRight: '20px'}}>
                <Description/>
                <Capabilities />
                <InitialParameters/>
                {/* 
                <InitialParameters/>
                <RunHistory/> */}
            </div>

            
            <PurchaseResultModal isShow={purchaseResult}  onClose={closePurchaseResult} ></PurchaseResultModal>
            {/* <RuntimeParameterModal isShow={runtimeParameterModalShow} onClose={closeRuntimeParameterModal} onRun={openBotExecutingModal}/>

            <BotExecutingModal isShow={botExecutingModalShow} onClose={closeBotExecutingModal}/> */}

            {/* <ResultModal isShow={} /> */}


            
        </div>
    )
}

