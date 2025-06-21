import Button from '../Button/Button';
import styles from './Measurement.module.css';

export default function Measurement() {
    return (
        <div>
            <div className={styles.measurementContainer}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px'}}>
                    <div className={styles.header}>Saved Measurements</div>
                    <Button>Add New Measurement</Button>
                </div>
                <input type="radio" className={styles.radio} name="measure" id="meas-0" />
                <label className={styles.measurement} htmlFor="meas-0">
                    <div className={styles.addName}>Jyotsana Gaur</div>
                    <div>
                        <div className={styles.measureRow}>
                            <div>
                                <div className={styles.measureKey}>Chest</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Sleeve</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Shoulder</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Bicep</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                        </div>
                        <div className={styles.measureRow}>
                            <div>
                                <div className={styles.measureKey}>Chest</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Sleeve</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Shoulder</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Bicep</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                        </div>
                        <div className={styles.measureRow}>
                            <div>
                                <div className={styles.measureKey}>Chest</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Sleeve</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Shoulder</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Bicep</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
            <div className={styles.measurementContainer}>
                <input type="radio" className={styles.radio} name="measure" id="meas-1" />
                <label className={styles.measurement} htmlFor="meas-1">
                    <div className={styles.addName}>Jyotsana Gaur</div>
                    <div>
                        <div className={styles.measureRow}>
                            <div>
                                <div className={styles.measureKey}>Chest</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Sleeve</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Shoulder</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Bicep</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                        </div>
                        <div className={styles.measureRow}>
                            <div>
                                <div className={styles.measureKey}>Chest</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Sleeve</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Shoulder</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Bicep</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                        </div>
                        <div className={styles.measureRow}>
                            <div>
                                <div className={styles.measureKey}>Chest</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Sleeve</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Shoulder</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                            <div className={styles.hr} />
                            <div>
                                <div className={styles.measureKey}>Bicep</div>
                                <div className={styles.measureValue}>36"</div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}