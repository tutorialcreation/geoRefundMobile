import { useState } from "react";

export default function checkCompliance(){
    const handleSubmit = async(e)=>{
        e.preventDefault
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