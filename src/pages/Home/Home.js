import React, { Component } from 'react';
import Header from './Header';

import styles from './Home.module.css'; 

export default () => {
    return (
        <div style={{position: 'relative'}}>
            <div className={styles.background} style={{height: '60vw', width: '100%', position: 'absolute', zIndex: '-10'}}>
            </div>
            <div style={{textAlign: "left", paddingLeft: "30px", paddingRight: "50px", paddingTop: "30px", paddingBottom: "50px", zIndex: '10'}}>
                <Header/>
            </div>
        </div>
    )
}