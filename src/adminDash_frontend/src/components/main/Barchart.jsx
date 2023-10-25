import React from 'react'

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Barchart=({data})=>{ 
    var months=[]
    var investments=[]
    var revenues=[]
    data.transaction_month.forEach((m)=>
      {  months.push(m.mon);
        investments.push(m.investment)
        revenues.push(m.revenue)}
    )

    
 return (
    <div className='bar-chart'>
        <Bar data={{
            labels:months,
            datasets:[
                {
                    label:'revenue: ',
                    data:revenues,
                },
                {
                    label:'investment: ',
                    data:investments,
                }
            ],
            
        }}
        options={
            {
                maintainAspectRatio:false,
            }
        }
        height={2000}
        width={3000}/>
    </div>
  )
}
export default Barchart