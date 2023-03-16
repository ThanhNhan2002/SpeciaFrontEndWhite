import React, { Component } from 'react';

export default () => {
    return (
        <div style={{backgroundColor: 'white', boxShadow: '0px 0px 8px rgb(100, 100, 100, 0.1)', borderRadius: '12px', border: '1px solid rgb(230, 230, 230)', marginLeft: '10px', marginBottom: '20px'}}>
            <div>
                <p style={{fontSize: '1.2rem', paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', borderBottom: '1px solid rgb(230, 230, 230)', fontWeight: '500'}}>Capabilities</p>
            </div>
            <div style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                <div style ={{ display: 'flex', marginBottom:'12px'}}>
                    <div style ={{fontSize:'15px'}}>&#9679;</div>
                    <div style={{marginLeft:'8px'}}>Lorem ipsum dolor sit amet. Ut earum laudantium qui aliquam voluptatum hic recusandae placeat aut reprehenderit quod et obcaecati beatae. Quo reprehenderit tempore et quisquam autem et dolores suscipit aut rerum asperiores nam alias error eos quae nemo. Nam autem facilis ab alias tempore ut quia possimus. </div>
                </div>
                <div style ={{ display: 'flex', marginBottom:'12px' }}>
                    <div style ={{fontSize:'15px'}}>&#9679;</div>
                    <div style={{marginLeft:'8px'}}>Lorem ipsum dolor sit amet. Ut earum laudantium qui aliquam voluptatum hic recusandae placeat aut reprehenderit quod et obcaecati beatae!  </div>
                </div>
                <div style ={{ display: 'flex', marginBottom:'12px'}}>
                    <div style ={{fontSize:'15px'}}>&#9679;</div>
                    <div style={{marginLeft:'8px'}}>Quo reprehenderit tempore et quisquam autem et dolores suscipit aut rerum asperiores nam alias error eos quae nemo. Nam autem facilis ab alias tempore ut quia possimus. </div>
                </div>
                <div style ={{ display: 'flex', marginBottom:'12px'}}>
                    <div style ={{fontSize:'15px'}}>&#9679;</div>
                    <div style={{marginLeft:'8px'}}>This is an alert—check it out! </div>
                </div>
                <div style={{textAlign: 'right'}}>
                    <p>See all</p>
                </div>
            </div>
        </div>
    )
}