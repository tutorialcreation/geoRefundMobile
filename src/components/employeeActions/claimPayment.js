import React,{ useState } from "react";

export default function ClaimPayment(){
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("todo")
    }
    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">
                claim
            </button>
        </form>
    )
}