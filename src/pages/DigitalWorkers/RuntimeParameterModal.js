import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

export default (props) => {
    return (

        

        <>
            <Modal show={props.isShow} onHide={props.onClose} className='modal-dialog-zoom' centered>
                <Modal.Body>
                    <div style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px', paddingTop: '20px'}}>
                        <p style={{fontSize: '2rem'}}>Runtime Parameters</p>
                        <p>Please provide all required runtime parameters</p>
                        <div style={{paddingBottom: '30px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500'}}>Parameter 1</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{paddingBottom: '30px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500'}}>Parameter 2</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{  paddingBottom: '30px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500'}}>Parameter 3</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{paddingBottom: '40px'}}>
                            <Form.Label style={{paddingBottom: '5px', fontWeight: '500'}}>Parameter 4</Form.Label>
                            <Form.Control style={{height: '50px'}} type="text" placeholder="" value="Some Value" />
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <Button style={{paddingLeft: '20px', paddingRight: '20px'}} variant="secondary" onClick={props.onRun}>
                                Run
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}