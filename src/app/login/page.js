'use client';

import { useState } from "react";

import styles from "./page.module.css";
import countryIcons, {countryData} from "@/lib/country";
import CIcon from '@coreui/icons-react';

import { signIn } from "next-auth/react";


export default function Home() {

    const [country, setCountry] = useState('IN');
    const [active, setActive] = useState(false);

    const countries = Object.keys(countryIcons);

  return (
    <div className={styles.page}>
        {active && <div className={styles.backdrop} onClick={() => setActive(false)} />}
        <div className={styles.loginContainer}>
            <div>
                <div className={styles.header}>Welcome to Baliye Cotour</div>
                <div className={styles.subheader}>Join/Sign in with</div>
            </div>
            <div style={{position: 'relative'}}>
                <div className={styles.inputBox}>
                    <div className={styles.countryWrapper} onClick={() => setActive(!active)}>
                        <CIcon size="sm" width={50} icon={countryIcons[country]} title={countryData[country]?.phone} />
                    </div>
                    <div onClick={() => setActive(!active)}><img src="/CaretDown.svg" alt="" style={{transform: active ? 'rotate(180deg)' : ''}} /></div>
                    <input type="text" className={styles.textBoxNone} placeholder="123 456 789" />
                </div>
                {active && <div className={styles.countryDrop}>
                    {
                        countries.map((d, i) => <div key={i} onClick={() => { setActive(!active); setCountry(d); }} className={styles.countryDropItem}><CIcon size="sm" width={50} icon={countryIcons[d]} title={countryData[d]?.name} /></div>)
                    }
                    </div>}
            </div>
            <button type="button" className={styles.btn}>Let's go</button>
            <div className={styles.lineWrapper}>
                <div className={styles.line} />
                <div className={styles.lineText}>or</div>
                <div className={styles.line} />
            </div>
            <div className={styles.socialWrapper}>
                <div onClick={() => signIn("google", {redirect: false})} className={styles.socialOpt}>
                    <img src="/gmail.svg" />
                    <div>Gmail</div>
                </div>
                <div onClick={() => signIn("azureAd", {redirect: false})} className={styles.socialOpt}>
                    <img src="/Outlook.svg" />
                    <div>Outlook</div>
                </div>
            </div>
        </div>
      <img
          className={styles.logo}
          src="/png/login.svg"
        />
    </div>
  );
}
