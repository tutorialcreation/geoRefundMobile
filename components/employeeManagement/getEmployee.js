import { useState } from "react";
import checkCompliance from "./checkCompliance";
import getEmployee from "./getEmployee";


export default function getEmployee(){
    return (
        <div>
           <p>latitude:</p> 
           <p>longitude:</p> 
           <p>name:</p> 
           <p>email:</p> 
           <p>compliance status:</p> 
           <Pay/>
           <checkCompliance/>
        </div>
    )
}