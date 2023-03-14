import Alert from 'react-bootstrap/Alert';

export default () => {
    return (
        <div style={{backgroundColor: 'white', boxShadow: '0px 0px 8px rgb(100, 100, 100, 0.1)', borderRadius: '12px', border: '1px solid rgb(230, 230, 230)', marginLeft: '10px', marginBottom: '20px'}}>
            <div>
                <p style={{fontSize: '1.2rem', paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', borderBottom: '1px solid rgb(230, 230, 230)', fontWeight: '500'}}>Run History</p>
            </div>
            <div style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                <Alert variant='success'>
                    This is an alert—check it out!
                </Alert>
                <Alert variant='success'>
                    This is an alert—check it out!
                </Alert>
                <Alert variant='danger'>
                    This is an alert—check it out!
                </Alert>
                <Alert variant='danger'>
                    This is an alert—check it out!
                </Alert>
                <Alert variant='success'>
                    This is an alert—check it out!
                </Alert>
                <div style={{textAlign: 'right'}}>
                    <p>See all</p>
                </div>
            </div>
        </div>
    )
}