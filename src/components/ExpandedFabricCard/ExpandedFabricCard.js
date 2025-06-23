'use client'

import { useState } from 'react';

import styles from './ExpandedFabricCard.module.css';

export default function ExpandedFabricCard({setExpandedId, setColour}) {
    const [selected, setSelected] = useState('white')
    return(
        <div onClick={() => setExpandedId(null)} className={`${styles.card} ${styles.expanded}`}>
            <img src="/fabric/cotton.png" style={{width: '100%', aspectRatio: '3', marginBottom: '10px'}} />
            <div className={styles.imageRow}>
                <div onClick={() => { setSelected('white'); setColour('white'); }}>
                    <img src="/fabric/cotton.png" alt="" className={styles.white}  style={{width: selected === 'white' ? '250px'  : '100px', height: '50px'}} />
                </div>
                <div onClick={() => { setSelected('red'); setColour('red'); }}>
                    <img src="/fabric/cotton.png" alt="" className={styles.red}  style={{width: selected === 'red' ? '250px'  : '100px', height: '50px'}} />
                </div>
                <div onClick={() => { setSelected('blue'); setColour('blue'); }}>
                    <img src="/fabric/cotton.png" alt="" className={styles.blue}  style={{width: selected === 'blue' ? '250px'  : '100px', height: '50px'}} />
                </div>
            </div>
        
        </div>
    );
}