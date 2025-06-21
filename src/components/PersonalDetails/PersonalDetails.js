"use client";
import { useState } from 'react';
import styles from './PersonalDetails.module.css';
import Button from '../Button/Button';

const PersonalDetails = () => {
    const [editDetails, setEditDetails] = useState(false);
    const [form, setForm] = useState({
        fullName: 'Jyotsana Gaur',
        countryCode: '+91',
        mobile: '8580547174',
        email: 'jyotsanagaur909@gmail.com',
        gender: 'Female',
        dob: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = "Name is required";
        if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = "Enter valid 10-digit mobile number";
        if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
        if (!form.gender) newErrors.gender = "Gender is required";
        if (!form.dob) newErrors.dob = "DOB is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!validate()) return;
        setEditDetails(false);
        // Submit logic here
    };

    const countries = [
        { code: '+91', label: '🇮🇳 India' },
        { code: '+1', label: '🇺🇸 USA' },
        { code: '+44', label: '🇬🇧 UK' },
    ];

    if (editDetails) {
        return (
            <div className={styles.container}>
                <h2 className={styles.heading}>Personal Details</h2>

                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

                <div className={styles.inputGroup}>
                    <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                        className={styles.dropdown}
                    >
                        {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.label} {c.code}
                            </option>
                        ))}
                    </select>
                    <input
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}

                <input
                    name="email"
                    placeholder="Email ID"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className={styles.input}
                >
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                </select>
                {errors.gender && <p className={styles.error}>{errors.gender}</p>}

                <input
                    type="text"
                    name="dob"
                    placeholder="Enter DOB (DD/MM/YYYY)"
                    value={form.dob}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.dob && <p className={styles.error}>{errors.dob}</p>}

                <div className={styles.buttonGroup}>
                    <Button onClick={() => setEditDetails(false)} type='secondary'>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} type='primary'>
                        Save Profile
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Personal Details</h2>

            <div className={styles.detailRow}>
                <div className={styles.list}>
                    <span className={styles.label}>Full Name</span>
                    <span className={styles.label}>Mobile Number</span>
                    <span className={styles.label}>Email ID</span>
                    <span className={styles.label}>Gender</span>
                    <span className={styles.label}>DOB</span>
                </div>
                <div className={styles.list}>
                    <span className={styles.value}>{form.fullName}</span>
                    <span className={styles.value}>{form.countryCode}- {form.mobile}</span>
                    <span className={styles.value}>{form.email}</span>
                    <span className={styles.value}>{form.gender}</span>
                    <span className={styles.value}>{form.dob ? form.dob : '- not added -'}</span>
                </div>
            </div>

            <Button onClick={() => setEditDetails(true)} type='secondary' styles={{maxWidth:"256px"}}>
                Edit Profile Details
            </Button>
        </div>
    );
};

export default PersonalDetails;
