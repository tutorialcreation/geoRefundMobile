import { useState } from "react";

export default function Home(){
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("todo")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <select>
                    <option>Admin</option>
                    <option>Employee</option>
                </select>
            </form>
        </div>
    )
}