'use client';

import { useState } from "react";

import styles from "./page.module.css";


export default function Home() {

    const [step, setStep] = useState(0);

  return (
    <div className={styles.page}>
        <div className={styles.headerWrapper}>
            <div className={styles.header}>My Cart</div>
            <div className={styles.subheader}>3 Items</div>
            <div className={styles.timeline}>
                <div className={step === 0 ? styles.eventActive : styles.event}>Cart</div>
                <img src="/caret-right.svg" />
                <div className={step === 1 ? styles.eventActive : styles.event}>Address</div>
                <img src="/caret-right.svg" />
                <div className={step === 2 ? styles.eventActive : styles.event}>Measurement</div>
            </div>
        </div>
        <div className={styles.contentWrapper}>
            <div className={styles.cardContainer}>
                {step === 0 && <>
                    <div className={styles.card}>
                        <img src="/png/test.png" />
                        <div className={styles.cardContent}>
                            <div>
                                <div className={styles.cardTitle}>Coord Set</div>
                                <div className={styles.cardprice}>$130</div>
                            </div>
                            <div className={styles.viewDetails}>View Customization Details</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/png/test.png" />
                        <div className={styles.cardContent}>
                            <div>
                                <div className={styles.cardTitle}>Coord Set</div>
                                <div className={styles.cardprice}>$130</div>
                            </div>
                            <div className={styles.viewDetails}>View Customization Details</div>
                        </div>
                    </div>
                </>}
                {
                    step === 1 && <>
                        <div className={styles.addressContainer}>
                            <input type="radio" className={styles.radio} name="address" id="add-0" />
                            <label className={styles.address} htmlFor="add-0">
                                <div className={styles.addName}>Jyotsana Gaur</div>
                                <div className={styles.addVal}>Flat number 3 ,ganpati bhawan, aira holmes, kasumpti, aira holmes</div>
                                <div className={styles.addVal}>Shimla, Himachal Pradesh</div>
                                <div className={styles.addVal}>171009</div>
                            </label>
                        </div>
                        <div className={styles.addressContainer}>
                            <input type="radio" className={styles.radio} name="address" id="add-1" />
                            <label className={styles.address} htmlFor="add-1">
                                <div className={styles.addName}>Jyotsana Gaur</div>
                                <div className={styles.addVal}>Flat number 3 ,ganpati bhawan, aira holmes, kasumpti, aira holmes</div>
                                <div className={styles.addVal}>Shimla, Himachal Pradesh</div>
                                <div className={styles.addVal}>171009</div>
                            </label>
                        </div>
                    </>
                }
                {
                    step === 2 && <>
                        <div className={styles.measurementContainer}>
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
                    </>
                }
            </div>
            <div className={styles.summary}>
                <div className={styles.priceSummary}>
                    <div className={styles.priceHeader}>Price Summary</div>
                    <div className={styles.priceDetail}>
                        <div className={styles.priceDetail}>Cart Total</div>
                        <div className={styles.priceDetail}>$230</div>
                    </div>
                    <div className={styles.priceDetail}>
                        <div className={styles.priceDetail}>Shipping Cost</div>
                        <div className={styles.priceDetail}>FREE</div>
                    </div>
                    <div className={styles.dashedHr} />
                    <div className={styles.priceDetail}>
                        <div className={styles.priceDetail}>Total</div>
                        <div className={styles.priceDetail}>$230</div>
                    </div>
                </div>
                <button className={styles.btn} type="button" onClick={() => setStep(step + 1)}>{step === 2 ? 'Proceed to Payment'  : 'Continue' }</button>
            </div>
        </div>
    </div>
  );
}
