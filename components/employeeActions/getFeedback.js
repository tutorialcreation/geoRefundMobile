import { useState } from "react";

export default function getFeedback(){
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("todo")
    }
    return(
        <form onSubmit={handleSubmit}>
            <button
                type="submit"
            >
                fetch feedback
            </button>
        </form>
    )
}