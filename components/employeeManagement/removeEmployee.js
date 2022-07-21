import {useState} from "react";

export default function removeEmployee(){
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("todo")
    }
    return(
        <form onSubmit={handleSubmit}>
            <button
                type="submit"
            >
                remove
            </button>
        </form>
    )
}