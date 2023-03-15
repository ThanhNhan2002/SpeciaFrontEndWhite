import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default (props) => {
    return (

        

        <>
            <Modal show={props.isShow} onHide={props.onClose} className='modal-dialog-zoom' centered>
                <Modal.Header closeButton>
                <Modal.Title>Runtime Parameters</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
                        <p>Please provide all required runtime parameters</p>
                        <div style={{paddingBottom: '30px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 1</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{paddingBottom: '30px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 2</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{  paddingBottom: '30px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 3</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{paddingBottom: '40px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 4</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <Button variant="secondary" onClick={props.onRun}>
                                Run
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}