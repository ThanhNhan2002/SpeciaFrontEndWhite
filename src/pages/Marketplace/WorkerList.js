
import { Link } from "react-router-dom";
import React, { Component } from 'react';


function WorkerList () {
    const digitalWorkers = [{id: 1, name: "Digital Worker 1", price: "12.99", status: 'Owned'},
                            {id: 2, name: "Digital Worker 2", price: "18.99", status: 'Owned'},
                            {id: 3, name: "Digital Worker 3", price: "29.99", status: 'Hired'},
                            {id: 4, name: "Digital Worker 4", price: "25.99", status: 'Owned'},
                            {id: 5, name: "Digital Worker 5", price: "37.99", status: 'Hired'},
                            {id: 6, name: "Digital Worker 6", price: "15.99", status: 'Owned'},
                            {id: 7, name: "Digital Worker 7", price: "8.99", status: 'Hired'},
                            {id: 8, name: "Digital Worker 8", price: "8.99", status: 'Hired'},
                            {id: 9, name: "Digital Worker 9", price: "8.99", status: 'Owned'},
                            {id: 10, name: "Digital Worker 10", price: "8.99", status: 'Owned'},
                            {id: 11, name: "Digital Worker 11", price: "8.99", status: 'Hired'},
                            {id: 12, name: "Digital Worker 12", price: "8.99", status: 'Owned'},
                            {id: 13, name: "Digital Worker 13", price: "8.99", status: 'Hired'},]
    return (
        <div>
            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>All</p>
                <div style={{marginTop: '20px'}}>
                    <div className="row">
                        {digitalWorkers.map(digitalWorker => (
                        <div key={digitalWorker.id} id="cardItem" className="col-sm-3" style={{paddingTop: '12px', paddingBottom: '12px'}}>
                            {/* `/digitalworkers/${digitalWorker.id}` */}
                            <Link to={`/marketplace/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                <div style={{ width: "100%", height: '400px', display: 'flex', flexDirection: "column", backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '13px', overflow: 'hidden'}}>
                                    <img class ='rounded-circle' src={require('../../resources/atoicon.png')} style={{width: "210px", height: "210px", alignSelf: "center", marginTop: "15px"}}/>
                                    <div style={{flex: 1, padding: '20px', paddingBottom: "25px"}}>
                                        <p style={{fontSize: '1.5rem', fontWeight: '500'}}>{digitalWorker.name}</p>
                                    </div>
                                    <div style={{ display:'flex', padding: '20px', flexDirection: "row", justifyContent: 'space-between', alignItem: 'center' }}>
                                      <div>
                                        <p style={{fontSize: '1.2rem', fontWeight:'300'}}>by Spectar Group</p>
                                      </div>
                                      <div>
                                        <span style={{fontSize: "1rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>${digitalWorker.price}</span>
                                      </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkerList;