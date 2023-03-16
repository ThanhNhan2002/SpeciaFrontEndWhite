import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import checkIcon from '../../resources/checkIcon.svg'


export default function PurchaseResultModal (props) {
    return (
        <>
            <Modal show={props.isShow} onHide={props.onClose} className='modal-dialog-zoom' centered backdrop="static">
                <Modal.Header closeButton>
                  <Modal.Title>Runtime Parameters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
                        <div><img src={checkIcon} style={{ height: 100, width: 100, fontWeight:'lighter'}} alt="checked icon" /></div>
                        <div style ={{ marginTop:'20px' }}><p>Purchased successfully</p></div>
                        <div style={{textAlign: 'right', flex:'2', marginTop:'30px'}}>
                          <Link to='/marketplace'>
                            <Button variant="secondary" onClick={props.onRun}>
                                Return to marketplace
                            </Button>
                          </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}