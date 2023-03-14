
import React, { useState, Component } from 'react';

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router-dom';


import Description from './Description';
import InitialParameters from './InitialParameters';
import RunHistory from './RunHistory';
import RuntimeParameterModal from './RuntimeParameterModal';
import BotExecutingModal from './BotExecutingModal';
import ResultModal from './ResultModal';

export default () => {

    let { digitalWorkerId } = useParams();

    const [runtimeParameterModalShow, setRuntimeParameterModalShow] = useState(false)

    const [botExecutingModalShow, setBotExecutingModalShow] = useState(false)

    const [resultModalShow, setResultModalShow] = useState(false)

    function openRuntimeParameterModal(){
        setRuntimeParameterModalShow(true)
    }
    function closeRuntimeParameterModal(){
        setRuntimeParameterModalShow(false)
    }

    function openBotExecutingModal(){
        setRuntimeParameterModalShow(false)
        setBotExecutingModalShow(true)
        setTimeout(()=> {
            closeBotExecutingModal()
        }, 5000)
        

    }
    function closeBotExecutingModal(){
        setBotExecutingModalShow(false)
    }


    function openResultModal(){
        setResultModalShow(true)
    }
    function closeResultModal(){
        setResultModalShow(false)
    }

    return (
        <div style={{ display: 'flex', textAlign: "left", height: '100%', color: 'rgb(70, 70, 70)'}}>
            <div style={{ flex: 1, backgroundColor: 'white', marginRight: '10px', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '12px', border: '1px solid rgb(230, 230, 230)', marginTop: "20px", marginBottom: '20px'}}>
                <Link to="/digitalworkers" style={{textDecoration: 'none', color: 'black'}}>
                    <button className='btn-close' style={{"fontSize": '1.2rem', marginTop: '20px', marginLeft: '20px'}}></button>
                </Link>
                <div style={{marginTop: '50px', textAlign: 'center'}}>
                    <img src={require('../../resources/atoicon.png')} style={{width: "150px", height: "150px", boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.1)', borderRadius: '10px'}}/>
                    <div style={{paddingTop: '50px', marginBottom: '50px'}}>
                        <p style={{fontSize: '2rem', fontWeight: '600', marginBottom: '10px'}}>Digital Worker {digitalWorkerId}</p>
                        <p style={{fontSize: '1.1rem', fontWeight: '400', color: 'rgb(150, 150, 150)'}}>Spectar Group</p>
                    </div>
                    <Button onClick={openRuntimeParameterModal} style={{paddingRight: '80px', paddingLeft: '80px'}} variant="secondary">Run</Button>{' '}
                </div>
            </div>
            <div style={{flex: 2, overflowY: 'scroll', paddingRight: '20px'}}>
                <Description/>
                <InitialParameters/>
                <RunHistory/>
            </div>

            <RuntimeParameterModal isShow={runtimeParameterModalShow} onClose={closeRuntimeParameterModal} onRun={openBotExecutingModal}/>

            <BotExecutingModal isShow={botExecutingModalShow} onClose={closeBotExecutingModal}/>

            {/* <ResultModal isShow={} /> */}


            
        </div>
    )
}