import React, { Component } from 'react';
import Header from './Header';
import WorkerCard from './WorkerCard';
import styles from './Marketplace.module.css'; 
import WorkerList from './WorkerList';

export default () => {
    return (
        <div style={{position: 'relative'}}>
            <div className={styles.background} style={{height: '60vw', width: '100%', position: 'absolute', zIndex: '-10'}}>
            </div>
            <div style={{textAlign: "left", paddingLeft: "30px", paddingRight: "50px", paddingTop: "30px", paddingBottom: "50px", zIndex: '10'}}>
                <Header/>
                <WorkerList />
            </div>
        </div>
    )
}


// function WorkerList() {
//     return (
 

    // <div class="container">
    //     <div class="row row-cols-3">
    //       <div class="col"><WorkerCard /></div>
    //       <div class="col"><WorkerCard /></div>
    //       <div class="col"><WorkerCard /></div>
          
    //     </div>

    //     <div class="row row-cols-3" style={{margin: '18rem'}}>
    //         <div class="col"><WorkerCard /></div>
    //     </div>

    //   </div>
          
        
//     )
// }

// export default WorkerList;