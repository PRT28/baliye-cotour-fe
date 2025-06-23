'use client'

import Address from "@/components/Address/Address";
import Measurement from "@/components/Measurement/Measurement";
import React, { useState } from "react";
import styles from "./page.module.css";
import PersonalDetails from "@/components/PersonalDetails/PersonalDetails";

export default function Page() {

    const [opt, setOpt] = useState(1);

    return (
        <div className={styles.page}>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>My Account</div>
            </div>
            <div className={styles.parentDiv}>
                <div className={styles.container}>
                    <div className={styles.list}>
                        <div className={styles.boldHeading}>Profile</div>
                        <div className={styles.listItem +" "+ (opt === 0 && styles.activeItem)} onClick={() => setOpt(0)}>Personal Details</div>
                        <div className={styles.listItem +" "+ (opt === 1 && styles.activeItem)} onClick={() => setOpt(1)}>Saved Measurements</div>
                        <div className={styles.listItem +" "+ (opt === 2 && styles.activeItem)} onClick={() => setOpt(2)}>Saved Addresses</div>
                    </div>
                    <hr className={styles.seperator} />
                    <div className={styles.list}>
                        <div className={styles.boldHeading}>Order Details</div>
                        <div className={styles.listItem +" "+ (opt === 3 && styles.activeItem)} onClick={() => setOpt(3)}>All Orders</div>
                    </div>
                </div>
                <div style={{width: '100%'}}>
                    {opt === 0 && <PersonalDetails />}
                    {opt === 1 && <Measurement showRadio={false} />}
                    {opt === 2 && <Address showRadio={false} />}
                </div>
            </div>
        </div>
    );
}