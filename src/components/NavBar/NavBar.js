'use client';

import React from "react";
import styles from './NavBar.module.css';
import Image from "next/image";

const NavBar = () => {
    function getCookieValue(key) {
        const name = key + "=";
        if (typeof window !== undefined) {
            const decodedCookies = decodeURIComponent(window?.document?.cookie);
            const cookiesArray = decodedCookies.split(';');
            for (let i = 0; i < cookiesArray.length; i++) {
                let cookie = cookiesArray[i].trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
        }
        return null;
    }

    const token = getCookieValue("baliye-token");

    return (
        <div className={styles.navbar}>
            <div className={styles.contentWrapper}>
                <div style={{ cursor: "pointer" }} onClick={() => window.location.pathname = '/kurta'} className={styles.text}>Coord Set</div>
                <div style={{ cursor: "pointer" }} className={styles.text}>Potli Bags</div>
            </div>
            <Image
                src="/baliye.svg"
                alt="Next.js logo"
                width={200}
                height={38}
                priority
                onClick={() => window.location.pathname = "/"}
                style={{ marginRight: '7rem', cursor: "pointer" }}
            />
            {!token ? <div className={styles.contentWrapper}>
                <div style={{ cursor: "pointer" }} onClick={() => window.location.pathname = "/cart"}><img src="/ShoppingCart.svg" alt="" /></div>
                <div style={{ cursor: "pointer" }} onClick={() => window.location.pathname = "/account"}><img src="/User.svg" alt="" /></div>
            </div> : <>
                <a href="/login" className={styles.text}>Login</a>
            </>}
        </div>
    );
}

export default NavBar;
