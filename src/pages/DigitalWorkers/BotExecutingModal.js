import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

import Spinner from 'react-bootstrap/Spinner';

export default (props) => {
    
    return (

        

        <>
            <Modal show={props.isShow} onHide={props.onClose} centered>
                <Modal.Body>
                    <div style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '20px', paddingTop: '20px'}}>
                        <p style={{fontSize: '2rem'}}>Please wait!</p>
                        <p>Your digital assistant is working on the task.</p>
                        <div style={{textAlign: 'center', padding: '50px 0'}}>
                            <Spinner animation="border" role="status" style={{width: '100px', height: '100px'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Button style={{paddingLeft: '20px', paddingRight: '20px'}} variant="secondary" onClick={props.onRun}>
                                Terminate
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}