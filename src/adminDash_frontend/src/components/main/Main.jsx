import React from "react";
import Navbar from "./Navbar";
import './main.css'
import Dashboard from "./Dashboard";
import Transactions from './Transactions'


const Main=({data,setLogin})=>{
    return(
        <div className="main">
            <Navbar name={data.name} setLogin={setLogin}/>
            
            <Dashboard data={data}/>
            
        </div>
    )
}
export default Main