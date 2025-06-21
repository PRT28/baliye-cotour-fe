"use client";
import styles from './Address.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function Address({ showRadio = true }) {
    const [editScreen, setEditScreen] = useState(false);
    const [addressType, setAddressType] = useState('Home');

    const handleCancel = () => {
        setEditScreen(false);
    };

    const handleTypeChange = (type) => {
        setAddressType(type);
    };

    return (
        <div className={styles.addressWrapper}>
            {!editScreen ? (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px' }}>
                        <div className={styles.header}>Saved Address</div>
                        <Button onClick={() => setEditScreen(true)}>Add New Address</Button>
                    </div>
                    <hr />
                    {[0, 1].map((index) => (
                        <div key={index} className={styles.addressContainer}>
                            {showRadio && (
                                <input type="radio" className={styles.radio} name="address" id={`add-${index}`} />
                            )}
                            <label className={styles.address} htmlFor={`add-${index}`}>
                                <div className={styles.addName}>Jyotsana Gaur</div>
                                <div className={styles.addVal}>Flat number 3, Ganpati Bhawan, Aira Holmes, Kasumpti</div>
                                <div className={styles.addVal}>Shimla, Himachal Pradesh</div>
                                <div className={styles.addVal}>171009</div>
                                <Button type="secondary" styles={{ marginTop: '18px' }} onClick={() => setEditScreen(true)}>Edit Address</Button>
                            </label>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <div className={styles.header} style={{ padding: '32px 32px 0' }}>Saved Addresses</div>
                    <form className={styles.formWrapper}>
                        <input className={styles.input} type="text" placeholder="Full Name*" required />
                        <input className={styles.input} type="text" placeholder="Street Address*" required />
                        <div className={styles.row}>
                            <select className={styles.input} required>
                                <option value="">City</option>
                                <option value="Shimla">Shimla</option>
                                {/* Add more cities */}
                            </select>
                            <select className={styles.input} required>
                                <option value="">State</option>
                                <option value="HP">Himachal Pradesh</option>
                                {/* Add more states */}
                            </select>
                        </div>
                        <input className={styles.input} type="text" placeholder="Pincode*" required />

                        <div className={styles.addressType}>
                            <div className={styles.addressTypeLabel}>Address Type</div>
                            <div className={styles.typeButtons}>
                                {['Home', 'Work', 'Other'].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => handleTypeChange(type)}
                                        className={`${styles.typeButton} ${addressType === type ? styles.active : ''}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <Button type="secondary" onClick={handleCancel}>Cancel</Button>
                            <Button>Save Address</Button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}
