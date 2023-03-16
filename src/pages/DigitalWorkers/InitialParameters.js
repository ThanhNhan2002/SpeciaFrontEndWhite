import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';

 
 export default () => {
    return (
        <div style={{backgroundColor: 'white', boxShadow: '0px 0px 8px rgb(100, 100, 100, 0.1)', borderRadius: '12px', border: '1px solid rgb(230, 230, 230)', paddingBottom: '30px', marginBottom: '20px', marginLeft: '10px'}}>
            <div>
                <p style={{fontSize: '1.2rem', paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', borderBottom: '1px solid rgb(230, 230, 230)', fontWeight: '600'}}>Initial Parameters</p>
            </div>
            <div style={{paddingLeft: '30px', paddingRight: '30px', paddingTop: '20px'}}>

                <div style={{paddingBottom: '30px'}}>
                    <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 1</Form.Label>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Form.Control style={{flex: 1}} type="text" placeholder="" value="Some Value" disabled/>
                        <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i>
                    </div>
                </div>
                <div style={{paddingBottom: '30px'}}>
                    <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 2</Form.Label>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Form.Control style={{flex: 1}} type="text" placeholder="" value="Some Value" disabled/>
                        <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i>
                    </div>
                </div>
                <div style={{  paddingBottom: '30px'}}>
                    <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 3</Form.Label>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Form.Control style={{flex: 1}} type="text" placeholder="" value="Some Value" disabled/>
                        <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i>
                    </div>
                </div>
                <div style={{paddingBottom: '30px'}}>
                    <Form.Label style={{paddingBottom: '5px', fontWeight: '500', paddingLeft: '5px'}}>Parameter 4</Form.Label>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Form.Control style={{flex: 1}} type="text" placeholder="" value="Some Value" disabled/>
                        <i style={{fontSize: '1.5rem', color: 'green', marginTop: '10px', marginBottom: '20px', marginLeft: '20px'}} class="fa-regular fa-pen-to-square"></i>
                    </div>
                </div>
            </div>
        </div>
    )
 }