"use client";
import React from "react";
import styles from "./OrderCard.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Modal from "../Modal/Modal";

const steps = [
    { label: "Order Placed", key: "placedDate" },
    { label: "Stitching Starts", key: "stitchingDate" },
    { label: "Embroidery Started", key: "embroideryDate" },
    { label: "Order Shipping", key: "shippingDate" },
    { label: "Order Delivered", key: "deliveredDate" },
];

const OrderCard = ({ order }) => {
    const {
        imgUrl,
        title,
        cost,
        orderDate,
        statusNumber,
        reviewStar,
        reviewData,
        placedDate,
        stitchingDate,
        embroideryDate,
        shippingDate,
        deliveredDate,
    } = order;

    const isDelivered = statusNumber === 5;

    const stepDates = [
        placedDate,
        stitchingDate,
        embroideryDate,
        shippingDate,
        deliveredDate,
    ];

    const [reviewStarState, setReviewStarState] = useState(order.reviewStar);
    const [hoverRating, setHoverRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [reviewTitle, setReviewTitle] = useState(reviewData.title || "");
    const [reviewDesc, setReviewDesc] = useState(reviewData.description || "");
    const [reviewImages, setReviewImages] = useState(reviewData.images || []);

    return (
        <>
            {showModal && (
                <Modal title="Add review" onClose={() => setShowModal(false)}>
                    <div className={styles.productInfo}>
                        <img
                            src="/kurti/red/body_long.png"
                            alt="Product"
                            className={styles.productImage}
                        />
                        <div>
                            <div className={styles.productId}>#1234566</div>
                            <div className={styles.productName}>Banarsi Tissue Suit</div>
                        </div>
                    </div>

                    <input
                        className={styles.input}
                        placeholder="Enter your review in brief"
                        value={reviewTitle}
                        onChange={(e) => setReviewTitle(e.target.value)}
                    />

                    <textarea
                        className={styles.textarea}
                        placeholder="Enter your review in detail"
                        value={reviewDesc}
                        onChange={(e) => setReviewDesc(e.target.value)}
                    />


                    <div className={styles.uploadSection}>
                        <div className={styles.uploadTitle}>Upload product photos</div>
                        <div className={styles.uploadGrid}>
                            {reviewImages.map((img, i) => (
                                <div key={i} className={styles.imageWrapper}>
                                    <img src={img} alt={`Uploaded preview ${i}`} className={styles.reviewImg} />
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => {
                                            setReviewImages((prev) => prev.filter((_, index) => index !== i));
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}

                            {/* Upload Button */}
                            <label htmlFor={`upload-${order.id}`}>
                                <div className={styles.uploadBox}>+</div>
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                id={`upload-${order.id}`}
                                style={{ display: "none" }}
                                onChange={(e) => {
                                    const files = Array.from(e.target.files || []);
                                    const urls = files.map((file) => URL.createObjectURL(file));
                                    setReviewImages((prev) => [...prev, ...urls]);
                                }}
                            />
                        </div>

                    </div>

                    <button className={styles.saveButton} onClick={() => {
                        order.reviewData.title = reviewTitle;
                        order.reviewData.description = reviewDesc;
                        order.reviewData.images = reviewImages;
                        order.reviewStar = reviewStarState;
                        setShowModal(false);
                    }}>Save Review</button>
                </Modal>
            )}
            <div className={styles.card}>
                {/* Top Info */}
                <div className={styles.topSection}>
                    <img src={imgUrl} className={styles.productImg} />
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div>
                            <div className={styles.title}>{title}</div>
                            <div className={styles.cost}>{cost}</div>
                            {isDelivered && (
                                <div className={styles.stars}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            size={20}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setReviewStarState(star)}
                                            className={
                                                star <= (hoverRating || reviewStarState)
                                                    ? styles.starActive
                                                    : styles.starInactive
                                            }
                                            style={{ cursor: "pointer", transition: "color 0.2s" }}
                                        />
                                    ))}
                                    <span onClick={() => setShowModal(true)} className={styles.editReview}>
                                        {(reviewData.title || reviewData.description || (reviewData.images?.length > 0))
                                            ? "Edit a review"
                                            : "Add a review"}
                                    </span>
                                </div>
                            )}

                        </div>
                        <div>
                            <div className={styles.statusLine}>
                                <span className={styles.greenDot} />
                                {isDelivered
                                    ? `Order Completed on ${deliveredDate}`
                                    : `Order Placed on ${placedDate}`}
                            </div>
                            <div className={styles.subtext}>
                                {isDelivered
                                    ? "Your order has been delivered"
                                    : "Custom Stitching in 5 days"}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Stepper */}
                <div className={styles.stepper}>
                    {steps.map((step, index) => {
                        const isCompleted = index + 1 <= statusNumber;
                        return (
                            <div className={styles.stepItem} key={step.label}>
                                <div
                                    className={`${styles.stepCircle} ${isCompleted ? styles.completed : ""
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <div className={styles.stepLabel}>{step.label}</div>
                                {stepDates[index] && (
                                    <div className={styles.stepDate}>{stepDates[index]}</div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Review */}
                {isDelivered && (
                    <div className={styles.reviewBox}>
                        <div className={styles.bgReview}>
                            <div className={styles.reviewTitle}>{reviewData.title}</div>
                            <div className={styles.reviewDesc}>{reviewData.description}</div>
                        </div>
                        <div className={styles.reviewImages}>
                            {reviewImages.map((img, i) => (
                                <img key={i} src={img} className={styles.reviewImg} />
                            ))}
                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default OrderCard;
