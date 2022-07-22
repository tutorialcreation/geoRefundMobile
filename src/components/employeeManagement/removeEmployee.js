import React,{useState} from "react";

export default function RemoveEmployee(){
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