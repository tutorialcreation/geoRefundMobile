import { useState } from "react";
import { ethers } from "ethers";

export default function addEmployee(){
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("todo")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="address"
                placeholder="enter employee address"
            />
            <input
                type="number"
                name="latitude"
                placeholder="enter latitude"
            />
            <input
                type="number"
                name="longitude"
                placeholder="enter longitude"
            />
            <input
                type="text"
                name="name"
                placeholder="enter employee name"
            />
            <input
                type="email"
                name="email"
                placeholder="enter employee email"
            />
            <button
                type="submit"
            >
                add
            </button>
        </form>
    )
}