import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

export default (props) => {
    return (
        <>
            <Modal show={props.isShow} onHide={props.onClose} centered>
                <Modal.Body>
                    <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
                        <p>Digital Worker Ran Successfully!</p>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}