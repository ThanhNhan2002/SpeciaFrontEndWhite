import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

export default (props) => {
    return (
        <>
            <Modal show={props.isShow} onHide={props.onClose} centered>
                <Modal.Body>
                    <div style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '20px', paddingTop: '20px'}}>
                        <p style={{fontSize: '2rem'}}>Task sucessfully completed!</p>
                        <div style={{textAlign: 'center', padding: '50px 0'}}>
                            
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