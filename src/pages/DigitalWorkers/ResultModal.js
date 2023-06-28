import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import checkIcon from '../../resources/checkIcon.svg'

export default (props) => {
    return (
        <>
            <Modal show={props.isShow} onHide={props.onClose} centered>
                <Modal.Body>
                    <div style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '20px', paddingTop: '20px', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                        <p style={{fontSize: '2rem'}}>Task successfully completed!</p>
                        <div><img src={checkIcon} style={{ height: 100, width: 100, fontWeight:'lighter'}} alt="checked icon" /></div>
                        <div style={{textAlign: 'center', padding: '10px 0'}}>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Button style={{paddingLeft: '20px', paddingRight: '20px'}} variant="secondary" onClick={props.onRun}>
                                Check Results
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}