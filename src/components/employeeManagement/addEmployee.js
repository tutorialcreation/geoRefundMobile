import React,{ useState } from "react";
import { ethers } from "ethers";
import { startPayments } from "./paymentFuction";

export default function AddEmployee(){
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setError();
        await startPayments({
            setError,
            setTxs,
            identity:data.get("address"),
            latitude:data.get("latitude"),
            longitude:data.get("longitude"),
            name:data.get("names"),
            email:data.get("email")
        });
        console.log("reached here and did nothing")
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>address:</label>
            <input
                type="text"
                name="address"
                placeholder="enter employee address"
            /><br/>
            <label>latitude:</label>
            <input
                type="number"
                name="latitude"
                placeholder="enter latitude"
            /><br/>
            <label>longitude:</label>
            <input
                type="number"
                name="longitude"
                placeholder="enter longitude"
            /><br/>
            <label>name:</label>
            <input
                type="text"
                name="names"
                placeholder="enter employee name"
            /><br/>
            <label>email:</label>
            <input
                type="email"
                name="email"
                placeholder="enter employee email"
            /><br/>
            <button
                type="submit"
            >
                add
            </button>
        </form>
    )
}