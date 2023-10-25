import Barchart from "./Barchart";
import React from "react";
import Piechart from "./Piechart";
import Transactions from "./Transactions";


const Dashboard=({data})=>{
    
    var rev=0;
    var ex=0;
    data.transaction_month.forEach((month)=>{
        rev+=month.revenue
        ex+=month.investment
    })
    
    return(
        <div className="dashboard">
            <span className="page-info">
                <h1>Dashboard</h1>
                <hr/>
                <p>This is your dashboard where you can see al your earnings, expenditure and the cutomers you have.
                    You can also see the transactions you have made. To manage the transactions you can go to the transactions page 
                    .
                </p>
            </span>
            <span className="content-container">
                <div className="card-container">
                    <div className="text-card">
                        <h1>{data.transaction_month.length}</h1>
                        <p>Transaction months</p>
                    </div>
                    <div className="text-card">
                        <h1>{data.customers.length}</h1>
                        <p>Customers</p>
                    </div>
                    <div className="text-card">
                        <h1>{rev}</h1>
                        <p>Revenue <br/> in rupees</p>
                    </div>
                    <div className="text-card">
                        <h1>{ex}</h1>
                        <p>Expenditure <br />in rupees</p>
                    </div>
                </div>
                <div className="stats">
                    <div className="chart-con">
                        <h1>Revenue/Investment chart : </h1>
                        <Barchart data={data}/>
                    </div>
                    
                    <div className="chart-con">
                        <h1>Types of customers : </h1>
                        <Piechart data={data}/>
                    </div>
                    
                </div>
                <div className="customer-dash" id="customer">
                    <h1 className="cust-head">Customer list</h1>
                    <div className="customer-card-head">
                        <h3>NAME:</h3>
                        <h3>EMAIL:</h3>
                        <h3>TYPE:</h3>
                    </div>
                    
                        {
                            data.customers.map((d)=>{
                                return(
                                    <div className="customer-card">
                                        <h3>{d.name}</h3>
                                        <p>{d.email}</p>
                                        <p>{d.kind}</p>
                                    </div>
                                )
                            })
                        }
                    
                    
                </div>
                <Transactions data={data}/>
                
            </span>
            
        </div>
    )
}
export default Dashboard