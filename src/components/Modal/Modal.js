"use client";

import styles from "./Modal.module.css";

const Modal = ({ title, onClose, children }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
