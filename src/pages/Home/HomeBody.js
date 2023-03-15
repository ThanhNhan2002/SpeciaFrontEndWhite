
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Home.module.css'; 

export default () => {

    const frequentlyUsedDigitalWorkers = [{id: 1, name: "ATOWP Assistant", price: "12.99", status: 'Owned'},
                            {id: 2, name: "Digital Assistant 2", price: "18.99", status: 'Owned'},
                            {id: 3, name: "Digital Assistant 3", price: "29.99", status: 'Hired'},
                            {id: 4, name: "Digital Assistant 4", price: "25.99", status: 'Owned'},
                            {id: 5, name: "Digital Assistant 5", price: "37.99", status: 'Hired'},
                            {id: 6, name: "Digital Assistant 6", price: "15.99", status: 'Owned'}]

    const newReleasedDigitalWorkers = [
                            {id: 6, name: "Digital Assistant 6", price: "15.99", status: 'Owned'},
                            {id: 9, name: "Digital Assistant 9", price: "8.99", status: 'Owned'},
                            {id: 10, name: "Digital Assistant 10", price: "8.99", status: 'Owned'},
                            {id: 11, name: "Digital Assistant 11", price: "8.99", status: 'Hired'},
                            {id: 13, name: "Digital Assistant 13", price: "8.99", status: 'Hired'},
                            {id: 12, name: "Digital Assistant 12", price: "8.99", status: 'Owned'}]        

    return (
        <div>
            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>Frequently Used</p>
                <div style={{marginTop: '20px'}}>
                <Row md={6}>
                    {frequentlyUsedDigitalWorkers.map(digitalWorker => (
                        <Col style={{paddingRight: 'calc(var(--bs-gutter-x) * .1)', paddingLeft: 'calc(var(--bs-gutter-x) * .5)'}}>
                            <Link to={`/digitalworkers/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'rgb(50, 50, 50)'}}>
                                <div className={"card"} style={{width: '100%', position: 'relative', textAlign: 'center', backgroundColor: "white", boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', border: '1px solid rgb(230, 230, 230)', borderRadius: '10px'}}>
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
                                            <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>{digitalWorker.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}

                </Row>
                <div style={{width: '100%', textAlign: 'right', marginTop: '20px'}}>
                    <Link to="/digitalworkers" style={{textDecoration: 'none'}}>
                        <p style={{marginLeft: 'auto'}}>See All</p>
                    </Link>
                </div>
                </div>
            </div>

            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>New Release</p>
                <div style={{marginTop: '20px'}}>
                <Row md={6}>
                    {newReleasedDigitalWorkers.map(digitalWorker => (
                        <Col style={{paddingRight: 'calc(var(--bs-gutter-x) * .1)', paddingLeft: 'calc(var(--bs-gutter-x) * .5)'}}>
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
                        </Col>
                    ))}

                </Row>
                <div style={{width: '100%', textAlign: 'right', marginTop: '20px'}}>
                    <Link to="/marketplace" style={{textDecoration: 'none'}}>
                        <p style={{marginLeft: 'auto'}}>See All</p>
                    </Link>
                </div>
                </div>
            </div>
            
        </div>
    )
}