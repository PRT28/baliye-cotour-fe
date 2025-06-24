"use client";
import React, { useState } from "react";
import styles from "./Orders.module.css";
import { CiFilter } from "react-icons/ci";
import Modal from "../Modal/Modal";
import OrderCard from "../OrderCard/OrderCard";

const Orders = () => {
    const orderData = [
        {
            id: 1,
            imgUrl: "/kurti/blue/body_long.png",
            title: "Men's Classic T-Shirt - Navy Blue",
            cost: "₹799",
            orderDate: "2025-06-10",
            orderStatus: "Shipped",
            statusNumber: 1,
            reviewStar: 2,
            reviewData: {
                title: "Okayish Quality",
                description: "The color is nice but the fabric quality could be better.",
                images: ["https://example.com/reviews/review1-img1.jpg"]
            }
        },
        {
            id: 2,
            imgUrl: "/kurti/red/body_long.png",
            title: "Slim Fit Stretch Jeans - Black",
            cost: "₹1,299",
            orderDate: "2025-06-05",
            orderStatus: "Out for Delivery",
            statusNumber: 5,
            reviewStar: 0,
            reviewData: {
                title: "",
                description: "",
                images: []
            }
        },
        {
            id: 3,
            imgUrl: "/kurti/white/body_long.png",
            title: "Women's Floral Summer Dress",
            cost: "₹1,499",
            orderDate: "2025-05-25",
            orderStatus: "Delivered",
            statusNumber: 5,
            reviewStar: 3,
            reviewData: {
                title: "Absolutely love it!",
                description: "Perfect fit, vibrant colors, and super comfortable for summer.",
                images: [
                    "/kurti/white/body_short.png",
                    "/kurti/red/body_short.png",
                ]
            }
        }
    ];

    const [filterModal, setFilterModal] = useState(false);
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const clearFilters = () => {
        setSelectedTime("");
        setSelectedStatus("");
    };

    return (
        <>
            {filterModal && (
                <Modal title="Order Filter" onClose={() => setFilterModal(false)}>
                    <div className={styles.section}>
                        <div className={styles.label}>Time</div>
                        {["Anytime", "Last 30 days", "Last 60 days"].map((label) => (
                            <label className={styles.option} key={label}>
                                <input
                                    type="radio"
                                    name="time"
                                    value={label}
                                    className={styles.radio}
                                    checked={selectedTime === label}
                                    onChange={() => setSelectedTime(label)}
                                />
                                {label}
                            </label>
                        ))}
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.section}>
                        <div className={styles.label}>Status</div>
                        {[
                            "Order Placed",
                            "Stitching Starts",
                            "Embroidery Started",
                            "Order Shipping",
                            "Order Delivered",
                        ].map((label) => (
                            <label className={styles.option} key={label}>
                                <input
                                    type="radio"
                                    name="status"
                                    value={label}
                                    className={styles.radio}
                                    checked={selectedStatus === label}
                                    onChange={() => setSelectedStatus(label)}
                                />
                                {label}
                            </label>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.clearBtn} onClick={clearFilters}>
                            Clear Filter
                        </button>
                        <button
                            className={styles.applyBtn}
                            onClick={() => setFilterModal(false)}
                        >
                            Apply Filter
                        </button>
                    </div>
                </Modal>
            )}

            <div className={styles.ordersWrapper}>
                <div className={styles.orderContainer}>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "16px",
                        }}
                    >
                        <div className={styles.header}>All Orders</div>
                        <div
                            onClick={() => setFilterModal(true)}
                            className={styles.filter}
                        >
                            <CiFilter /> Filter
                        </div>
                    </div>
                </div>

                <div className={styles.cardsContainer}>
                    {orderData.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Orders;
