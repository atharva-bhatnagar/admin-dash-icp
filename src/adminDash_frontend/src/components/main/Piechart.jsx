import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const Piechart = ({data}) => {
    var n=0
    var o=0
    var r=0
    data.customers.forEach((c)=>{
        if(c.kind==='new'){
            n+=1
        }else if(c.kind==='old'){
            o+=1
        }else{
            r+=1
        }
    })

  return (
    <div className='pie-chart'>
        <Doughnut
        data={
            {
                datasets:[{
                    data:[n,r,o],
                }],
                labels:['new','regular','old']
            }
            
        }
        
        />
    </div>
  )
}
export default Piechart
