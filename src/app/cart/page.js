'use client';

import { useState } from "react";

import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Address from "@/components/Address/Address";


export default function Home() {

    const [step, setStep] = useState(0);


    const handleCheckout = async () => {
        setLoading(true);
        const stripe = await stripePromise;

        const res = await fetch("http://localhost:8086/api/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            amount: 500
        }
        });

        const data = await res.json();

        const result = await stripe?.redirectToCheckout({
        sessionId: data.id,
        });

        if (result?.error) {
        alert(result.error.message);
        }

        setLoading(false);
  };

  return (
    <div className={styles.page}>
        <div className={styles.headerWrapper}>
            <div className={styles.header}>My Cart</div>
            <div className={styles.subheader}>3 Items</div>
            <div className={styles.timeline}>
                <div className={step === 0 ? styles.eventActive : styles.event}>Cart</div>
                <img src="/caret-right.svg" />
                <div className={step === 1 ? styles.eventActive : styles.event}>Address</div>
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
                    step === 1 && <Address />
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
                <button className={styles.btn} type="button" onClick={() => {
                    if (step  < 1) {
                        setStep(step + 1);
                    } else {
                        handleCheckout()
                    }
                    }}>{step === 1 ? 'Proceed to Payment'  : 'Continue' }</button>
            </div>
        </div>
    </div>
  );
}
