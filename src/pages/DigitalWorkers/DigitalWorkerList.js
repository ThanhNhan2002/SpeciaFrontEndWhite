
import { Link } from "react-router-dom";

export default () => {

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

    const ownedDigitalWorkers = [{id: 1, name: "ATOWP Assistant", price: "12.99", status: 'Owned'},
                            {id: 2, name: "Digital Assistant 2", price: "18.99", status: 'Owned'},
                            {id: 4, name: "Digital Assistant 4", price: "25.99", status: 'Owned'},
                            {id: 6, name: "Digital Assistant 6", price: "15.99", status: 'Owned'},
                            {id: 9, name: "Digital Assistant 9", price: "8.99", status: 'Owned'},
                            {id: 10, name: "Digital Assistant 10", price: "8.99", status: 'Owned'},
                            {id: 12, name: "Digital Assistant 12", price: "8.99", status: 'Owned'}]        

    const hiredDigitalWorkers = [{id: 3, name: "Digital Assistant 3", price: "29.99", status: 'Hired'},
                                {id: 5, name: "Digital Assistant 5", price: "37.99", status: 'Hired'},
                                {id: 7, name: "Digital Assistant 7", price: "8.99", status: 'Hired'},
                                {id: 8, name: "Digital Assistant 8", price: "8.99", status: 'Hired'},
                                {id: 11, name: "Digital Assistant 11", price: "8.99", status: 'Hired'},
                                {id: 13, name: "Digital Assistant 13", price: "8.99", status: 'Hired'},]

    return (
        <div>
            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>All</p>
                <div style={{marginTop: '20px'}}>
                    <div className="row">
                        {digitalWorkers.map(digitalWorker => (
                        <div key={digitalWorker.id} id="cardItem" className="col-sm-4" style={{paddingTop: '12px', paddingBottom: '12px'}}>
                            <Link to={`/digitalworkers/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                <div style={{ width: "100%", height: '125px', display: 'flex', flexDirection: "row", backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '10px', overflow: 'hidden'}}>
                                    <img src={require('../../resources/atoicon.png')} style={{width: "125px", height: "125px"}}/>
                                    <div style={{flex: 1, padding: '20px'}}>
                                        <p style={{fontSize: '1.2rem'}}>{digitalWorker.name}</p>
                                        <p style={{fontSize: '1rem', fontWeight: '200'}}>by Spectar Group</p>
                                    </div>
                                    <div style={{padding: '20px'}}>
                                        <div style={{textAlign: 'right'}}>
                                            <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>{digitalWorker.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>Owned</p>
                <div style={{marginTop: '20px'}}>
                    <div className="row">
                        {ownedDigitalWorkers.map(digitalWorker => (
                        <div key={digitalWorker.id} id="cardItem" className="col-sm-4" style={{paddingTop: '12px', paddingBottom: '12px'}}>
                            <Link to={`/digitalworkers/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                <div style={{ width: "100%", height: '125px', display: 'flex', flexDirection: "row", backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '10px', overflow: 'hidden'}}>
                                    <img src={require('../../resources/atoicon.png')} style={{width: "125px", height: "125px"}}/>
                                    <div style={{flex: 1, padding: '20px'}}>
                                        <p style={{fontSize: '1.2rem'}}>{digitalWorker.name}</p>
                                        <p style={{fontSize: '1rem', fontWeight: '200'}}>by Spectar Group</p>
                                    </div>
                                    <div style={{padding: '20px'}}>
                                        <div style={{textAlign: 'right'}}>
                                            <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>{digitalWorker.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '40px'}}>
                <p style={{color: 'black', padding: 0, fontSize: '1.5rem', marginLeft: '5px'}}>Hired</p>
                <div style={{marginTop: '20px'}}>
                    <div className="row">
                        {hiredDigitalWorkers.map(digitalWorker => (
                        <div key={digitalWorker.id} id="cardItem" className="col-sm-4" style={{paddingTop: '12px', paddingBottom: '12px'}}>
                            <Link to={`/digitalworkers/${digitalWorker.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                <div style={{ width: "100%", height: '125px', display: 'flex', flexDirection: "row", backgroundColor: "white", border: '1px solid rgb(230, 230, 230)', boxShadow: '0px 0px 10px rgb(100, 100, 100, 0.05)', borderRadius: '10px', overflow: 'hidden'}}>
                                    <img src={require('../../resources/atoicon.png')} style={{width: "125px", height: "125px"}}/>
                                    <div style={{flex: 1, padding: '20px'}}>
                                        <p style={{fontSize: '1.2rem'}}>{digitalWorker.name}</p>
                                        <p style={{fontSize: '1rem', fontWeight: '200'}}>by Spectar Group</p>
                                    </div>
                                    <div style={{padding: '20px'}}>
                                        <div style={{textAlign: 'right'}}>
                                            <span style={{fontSize: "0.9rem", fontWeight: '600', color: "rgb(100, 100, 100)", backgroundColor: 'rgb(245, 245, 245)', padding: '5px', borderRadius: '4px'}}>{digitalWorker.status}</span>
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