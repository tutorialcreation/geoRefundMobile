import React, { useState } from "react";
import Pay from "./payEmployee";

export default function ListEmployees(){
    const [employees,setEmployees] = useState();
    return(
        <table>
            <thead>
                <tr>
                    <th>identity</th>
                    <th>name</th>
                    <th>latitude</th>
                    <th>longitude</th>
                    <th>email</th>
                    <th>compliance status</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0xd2341kgl1g51346jg26145135lkg5</td>
                    <td>Martin Luther</td>
                    <td>2.1314</td>
                    <td>34.1241</td>
                    <td>tutorialcreation81@gmail.com</td>
                    <td>false</td>
                    <td>
                        <getEmployee/>
                        

                    </td>
                </tr>
            </tbody>
        </table>
    )
}