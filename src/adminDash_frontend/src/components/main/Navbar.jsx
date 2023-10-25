import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar=({name,setLogin})=>{
    const nav=useNavigate()
    return(
        <div className="nav-container">
            <nav className="nav">
                <h1 className="hello-admin">Hello {name}!!!</h1>
                <span className="link-container">
                    <h3 className="nav-link" onClick={()=>nav('/')}>Dashboard</h3>
                    <a href="#transaction"><h3 className="nav-link" >Transactions</h3></a>
                    <a href="#customer"><h3 className="nav-link" >Customers</h3></a>
                </span>
                <button className="logout" onClick={()=>setLogin(false)}>Logout</button>
            </nav>
            
        </div>
    )
}
export default Navbar