import React from "react";

const Transactions=({data})=>{
    return(
        
        <div className="customer-dash" id="transaction">
            
            <h1>Transaction Info</h1>
            <div className="customer-card-head">
                        <h3>MONTH:</h3>
                        <h3>REVENUE:</h3>
                        <h3>INVESTMENT:</h3>
            </div>
            {
                data.transaction_month.map((month)=>{
                    return(
                        <div className="customer-card">
                            <h3>{month.mon}</h3>
                            <p>Rs.{month.revenue}</p>
                            <p>Rs.{month.investment}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Transactions