import React,{ useState } from "react";

export default function CheckCompliance(){
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("todo")
    }
    return(
        <form onSubmit={handleSubmit}>
            <button
                type="submit"
            >
                verify
            </button>
        </form>
    )
}