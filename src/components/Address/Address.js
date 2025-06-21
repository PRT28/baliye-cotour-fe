import styles from './Address.module.css'
import Button from '../Button/Button'

export default function Address() {
   return (
     <div className={styles.addressWrapper}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px'}}>
            <div className={styles.header}>Saved Address</div>
            <Button>Add New Address</Button>
        </div>
        <hr />
        <div className={styles.addressContainer}>
            <input type="radio" className={styles.radio} name="address" id="add-0" />
            <label className={styles.address} htmlFor="add-0">
                <div className={styles.addName}>Jyotsana Gaur</div>
                <div className={styles.addVal}>Flat number 3 ,ganpati bhawan, aira holmes, kasumpti, aira holmes</div>
                <div className={styles.addVal}>Shimla, Himachal Pradesh</div>
                <div className={styles.addVal}>171009</div>
                <Button type="secondary" styles={{marginTop: '18px'}}>Edit Address</Button>
            </label>
            
        </div>
        <div className={styles.addressContainer}>
            <input type="radio" className={styles.radio} name="address" id="add-1" />
            <label className={styles.address} htmlFor="add-1">
                <div className={styles.addName}>Jyotsana Gaur</div>
                <div className={styles.addVal}>Flat number 3 ,ganpati bhawan, aira holmes, kasumpti, aira holmes</div>
                <div className={styles.addVal}>Shimla, Himachal Pradesh</div>
                <div className={styles.addVal}>171009</div>
                <Button type="secondary" styles={{marginTop: '18px'}}>Edit Address</Button>
            </label>
        </div>
    </div>
   );
};