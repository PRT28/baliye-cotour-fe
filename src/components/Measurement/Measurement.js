"use client";
import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Measurement.module.css';

export default function Measurement({ showRadio = true }) {
    const [editScreen, setEditScreen] = useState(false);
    const measurementList = [0, 1]; // Dummy list for display

    const handleCancel = () => {
        setEditScreen(false);
    };

    const measurements = [
        'Chest', 'Sleeve', 'Shoulder', 'Bicep', 'Wrist Around', 'Front Raise',
        'Waist', 'Back Raise', 'Hip', 'Thigh', 'Leg Length', 'Leg Opening'
    ];

    return (
        <div className={styles.measurementWrapper}>
            {!editScreen ? (
                <>
                    <div className={styles.measurementContainer}>
                        <div style={{width:"100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
                            <div className={styles.header}>Saved Measurements</div>
                            <Button onClick={() => setEditScreen(true)}>Add New Measurement</Button>
                        </div>
                    </div>

                    {measurementList.map((index) => (
                        <div key={index} className={styles.measurementCard}>
                            {showRadio && (
                                <input type="radio" className={styles.radio} name="measure" id={`meas-${index}`} />
                            )}
                            <label className={styles.measurementLabel} htmlFor={`meas-${index}`}>
                                <div className={styles.addName}>{index === 0 ? 'Jyotsana Gaur' : 'Khushi Gaur'}</div>
                                <div className={styles.measureGrid}>
                                    {measurements.map((key) => (
                                        <div key={key} className={styles.measureCell}>
                                            <div className={styles.measureKey}>{key}</div>
                                            <div className={styles.measureValue}>36”</div>
                                        </div>
                                    ))}
                                </div>
                                <Button type="secondary" onClick={() => setEditScreen(true)}>Edit Measurements</Button>
                            </label>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <div className={styles.header} style={{ padding: '32px 32px 0' }}>Saved Measurements</div>
                    <form className={styles.formWrapper}>
                        <input className={styles.input} type="text" placeholder="Enter profile name" />
                        <div className={styles.grid}>
                            {measurements.map((label, i) => (
                                <div key={label} className={styles.inputGroup}>
                                    <input className={styles.input} placeholder={label} />
                                    <span className={styles.unit}>Inch</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.actions}>
                            <Button type="secondary" onClick={handleCancel}>Cancel</Button>
                            <Button>Save Measurement</Button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}
