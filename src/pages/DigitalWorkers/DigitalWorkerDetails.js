
import React, { useState, useEffect, Component } from 'react';


import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router-dom';


import Description from './Description';
import InitialParameters from './InitialParameters';
import RunHistory from './RunHistory';
import RuntimeParameterModal from './RuntimeParameterModal';
import BotExecutingModal from './BotExecutingModal';
import ResultModal from './ResultModal';

const digitalWorkers = [{id: 1, name: "ATOWP Assistant", price: "12.99", status: 'Owned'},
                    {id: 2, name: "Digital Assistant 2", price: "18.99", status: 'Owned'},
                    {id: 3, name: "Digital Assistant 3", price: "29.99", status: 'Hired'},
                    {id: 4, name: "Digital Assistant 4", price: "25.99", status: 'Owned'},
                    {id: 5, name: "Digital Assistant 5", price: "37.99", status: 'Hired'},
                    {id: 6, name: "Digital Assistant 6", price: "15.99", status: 'Owned'},
                    {id: 7, name: "Digital Assistant 7", price: "8.99", status: 'Hired'},
                    {id: 8, name: "Digital Assistant 8", price: "8.99", status: 'Hired'},
                    {id: 9, name: "Digital Assistant 9", price: "8.99", status: 'Owned'},
                    {id: 10, name: "Digital Assistant 10", price: "8.99", status: 'Owned'},
                    {id: 11, name: "Digital Assistant 11", price: "8.99", status: 'Hired'},
                    {id: 12, name: "Digital Assistant 12", price: "8.99", status: 'Owned'},
                    {id: 13, name: "Digital Assistant 13", price: "8.99", status: 'Hired'},]

export default () => {



    let { digitalWorkerId } = useParams();

    const [digitalWorker, setDigitalWorker] = useState(digitalWorkers[0])

    const [runtimeParameterModalShow, setRuntimeParameterModalShow] = useState(false)

    const [botExecutingModalShow, setBotExecutingModalShow] = useState(false)

    const [resultModalShow, setResultModalShow] = useState(false)

    let executeTimer;

    useEffect(() => {
        setDigitalWorker(digitalWorkers.find(item => item.id == digitalWorkerId))
    }, [digitalWorkerId, digitalWorker]);

    function openRuntimeParameterModal(){
        setRuntimeParameterModalShow(true)
    }
    function closeRuntimeParameterModal(){
        setRuntimeParameterModalShow(false)
    }

    function openBotExecutingModal(){
        setRuntimeParameterModalShow(false)
        setBotExecutingModalShow(true)
        executeTimer = setTimeout(()=> {
            closeBotExecutingModal()
        }, 3000)
        

    }
    function closeBotExecutingModal(){
        setBotExecutingModalShow(false)
        openResultModal()
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
                        <p style={{fontSize: '2rem', fontWeight: '600', marginBottom: '10px'}}>{digitalWorker.name}</p>
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

            <ResultModal isShow={resultModalShow} onClose={closeResultModal} />


            
        </div>
    )
}