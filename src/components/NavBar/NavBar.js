'use client';

import React from "react";
import styles from './NavBar.module.css';
import Image from "next/image";
import { getCookieValue } from "@/lib/cookies";

const NavBar = () => {

    const token = getCookieValue("baliye-token");

    return (
        <div className={styles.navbar}>
            <div className={styles.contentWrapper}>
                <div className={styles.text}>Coord Set</div>
                <div className={styles.text}>Potli Bags</div>
            </div>
            <Image
                src="/baliye.svg"
                alt="Next.js logo"
                width={200}
                height={38}
                priority
            />
            {token ? <div className={styles.contentWrapper}>
                    <img src="/ShoppingCart.svg" alt="" />
                    <img src="/User.svg" alt="" />
                </div> : <>
                    <a href="/login" className={styles.text}>Login</a>
            </>}
        </div>
    );
}

export default NavBar;
