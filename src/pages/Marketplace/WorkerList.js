
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default () => {


    const newReleasedDigitalWorkers = [
                            {id: 6, name: "Digital Assistant 6", price: "15.99", status: 'Owned'},
                            {id: 9, name: "Digital Assistant 9", price: "24.99", status: 'Owned'},
                            {id: 10, name: "Digital Assistant 10", price: "8.99", status: 'Owned'},
                            {id: 19, name: "Digital Assistant 12", price: "7.99", status: 'Hired'},
                            {id: 16, name: "Digital Assistant 14", price: "12.99", status: 'Hired'},
                            {id: 11, name: "Digital Assistant 16", price: "8.99", status: 'Hired'},
                            {id: 13, name: "Digital Assistant 18", price: "18.99", status: 'Hired'},
                            {id: 12, name: "Digital Assistant 19", price: "19.99", status: 'Owned'}]     
                            
    const ATODigitalWorkers = [
        {id: 26, name: "ATOWP Assistant 6", price: "15.99", status: 'Owned'},
        {id: 29, name: "ATOWP Assistant 9", price: "24.99", status: 'Owned'},
        {id: 210, name: "ATOWP Assistant 10", price: "8.99", status: 'Owned'},
        {id: 219, name: "ATOWP Assistant 12", price: "7.99", status: 'Hired'},
        {id: 216, name: "ATOWP Assistant 14", price: "12.99", status: 'Hired'}]     

    const AllDigitalWorkers = [
            {id: 6, name: "Digital Assistant 6", price: "15.99", status: 'Owned'},
            {id: 219, name: "ATOWP Assistant 12", price: "7.99", status: 'Hired'},
            {id: 9, name: "Digital Assistant 9", price: "24.99", status: 'Owned'},
            {id: 10, name: "Digital Assistant 10", price: "8.99", status: 'Owned'},
            {id: 26, name: "ATOWP Assistant 6", price: "15.99", status: 'Owned'},
            {id: 19, name: "Digital Assistant 12", price: "7.99", status: 'Hired'},
            {id: 16, name: "Digital Assistant 14", price: "12.99", status: 'Hired'},
            {id: 11, name: "Digital Assistant 16", price: "8.99", status: 'Hired'},
            {id: 13, name: "Digital Assistant 18", price: "18.99", status: 'Hired'},
            {id: 210, name: "ATOWP Assistant 10", price: "8.99", status: 'Owned'},
            {id: 12, name: "Digital Assistant 19", price: "19.99", status: 'Owned'},
            {id: 29, name: "ATOWP Assistant 9", price: "24.99", status: 'Owned'},
            {id: 216, name: "ATOWP Assistant 14", price: "12.99", status: 'Hired'}]    

    return (
        <div>

            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>New Release</p>
                <div style={{marginTop: '20px'}}>
                    <Row md={6}>
                        {newReleasedDigitalWorkers.map(digitalWorker => (
                            <Col style={{paddingRight: 'calc(var(--bs-gutter-x) * .1)', paddingLeft: 'calc(var(--bs-gutter-x) * .5)', paddingBottom: 'calc(var(--bs-gutter-x) * .6)'}}>
                                <Link to={`/marketplace/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'rgb(50, 50, 50)'}}>
                                    <div class="card" style={{width: '100%', position: 'relative', textAlign: 'center', backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '10px'}}>
                                        <div style={{position: 'absolute', width: '100%', height: '180px', filter: 'blur(40px)', backgroundSize: 'contain'}}>
                                            <img style={{width: '100px', height: '100%'}} src={require('../../resources/atoicon.png')} class="card-img-top" alt="..."/>
                                        </div>
                                        <div style={{ position: 'absolute', width: '100%', height: '180px', zIndex: '10'}}>
                                            <img style={{width: '100px', padding: 'auto', marginTop: '40px', borderRadius: '10px'}} src={require('../../resources/atoicon.png')} class="card-img-top" alt="..."/>
                                        </div>
                                        <div class="card-body" style={{width: '100%', position: 'relative', paddingTop: '180px', textAlign: 'left'}}>
                                            <div style={{height: '110px'}}>
                                                <h5 class="card-title">{digitalWorker.name}</h5>
                                                <p style={{fontSize: '1rem', fontWeight: '200'}}>By Spectar Group</p>
                                            </div>
                                            <div style={{}}>
                                                <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>${digitalWorker.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}

                    </Row>
                </div>
            </div>

            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>ATO Workpaper</p>
                <div style={{marginTop: '20px'}}>
                    <Row md={6}>
                        {ATODigitalWorkers.map(digitalWorker => (
                            <Col style={{paddingRight: 'calc(var(--bs-gutter-x) * .1)', paddingLeft: 'calc(var(--bs-gutter-x) * .5)', paddingBottom: 'calc(var(--bs-gutter-x) * .6)'}}>
                                <Link to={`/marketplace/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'rgb(50, 50, 50)'}}>
                                    <div class="card" style={{width: '100%', position: 'relative', textAlign: 'center', backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '10px'}}>
                                        <div style={{position: 'absolute', width: '100%', height: '180px', filter: 'blur(40px)', backgroundSize: 'contain'}}>
                                            <img style={{width: '100px', height: '100%'}} src={require('../../resources/atoicon.png')} class="card-img-top" alt="..."/>
                                        </div>
                                        <div style={{ position: 'absolute', width: '100%', height: '180px', zIndex: '10'}}>
                                            <img style={{width: '100px', padding: 'auto', marginTop: '40px', borderRadius: '10px'}} src={require('../../resources/atoicon.png')} class="card-img-top" alt="..."/>
                                        </div>
                                        <div class="card-body" style={{width: '100%', position: 'relative', paddingTop: '180px', textAlign: 'left'}}>
                                            <div style={{height: '110px'}}>
                                                <h5 class="card-title">{digitalWorker.name}</h5>
                                                <p style={{fontSize: '1rem', fontWeight: '200'}}>By Spectar Group</p>
                                            </div>
                                            <div style={{}}>
                                                <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>${digitalWorker.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}

                    </Row>
                </div>
            </div>

            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>All</p>
                <div style={{marginTop: '20px'}}>
                    <Row md={6}>
                        {AllDigitalWorkers.map(digitalWorker => (
                            <Col style={{paddingRight: 'calc(var(--bs-gutter-x) * .1)', paddingLeft: 'calc(var(--bs-gutter-x) * .5)', paddingBottom: 'calc(var(--bs-gutter-x) * .6)'}}>
                                <Link to={`/marketplace/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'rgb(50, 50, 50)'}}>
                                    <div class="card" style={{width: '100%', position: 'relative', textAlign: 'center', backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '10px'}}>
                                        <div style={{position: 'absolute', width: '100%', height: '180px', filter: 'blur(40px)', backgroundSize: 'contain'}}>
                                            <img style={{width: '100px', height: '100%'}} src={require('../../resources/atoicon.png')} class="card-img-top" alt="..."/>
                                        </div>
                                        <div style={{ position: 'absolute', width: '100%', height: '180px', zIndex: '10'}}>
                                            <img style={{width: '100px', padding: 'auto', marginTop: '40px', borderRadius: '10px'}} src={require('../../resources/atoicon.png')} class="card-img-top" alt="..."/>
                                        </div>
                                        <div class="card-body" style={{width: '100%', position: 'relative', paddingTop: '180px', textAlign: 'left'}}>
                                            <div style={{height: '110px'}}>
                                                <h5 class="card-title">{digitalWorker.name}</h5>
                                                <p style={{fontSize: '1rem', fontWeight: '200'}}>By Spectar Group</p>
                                            </div>
                                            <div style={{}}>
                                                <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>${digitalWorker.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}

                    </Row>
                </div>
            </div>
            
        </div>
    )
}