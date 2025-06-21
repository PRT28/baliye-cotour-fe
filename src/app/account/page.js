'use client'

import Address from "@/components/Address/Address";
import Measurement from "@/components/Measurement/Measurement";
import React, {useState} from "react";

export default function Page() {

    const [opt, setOpt] = useState(1);

    return (
        <div>
            <div>My Account</div>
            <div>
                <div>Profile</div>
                <div>
                    <div onClick={() => setOpt(0)}>Personal Details</div>
                    <div onClick={() => setOpt(1)}>Saved Measurements</div>
                    <div onClick={() => setOpt(2)}>Saved Addresses</div>
                </div>
                <div>Order Details</div>
                <div onClick={() => setOpt(3)}>All Orders</div>
            </div>
            <div>
                {opt === 1 && <Measurement />}
                {opt === 2 && <Address />}
            </div>
        </div>
    );
}