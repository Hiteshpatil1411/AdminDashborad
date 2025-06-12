import React from 'react'
import LeftCard from './LeftCard'
import HrInter from './HrInter'

const HrRight = () => {
    const card=[
        {
            logo:"bi-clipboard2-check",
            val:"256",
            label:"Interview",
            graph:"bi-bar-chart-line-fill"
        },
        {
            logo:"bi-people",
            val:"150",
            label:"Hired",
            graph:"bi-graph-up"
        }
    ]

  return (
    <>
        <div className="col-md-4 ps-1 flex-column">
            <div className="row py-2">
                {/* Card 1 */}
                <div className="col-md-12 p-0">
                    <div className=" border d-flex rounded-2 p-3" style={{background:"rgb(76,53,117)"}}>
                            <div className="col">
                                <div className="bg-light  rounded-circle overflow-hidden text-center py-1  " style={{width:"50px",height:"50px"}}>
                            <i class="bi bi-clipboard2-check fs-3"></i>
                        </div>  
                        <p className="text-light mb-0 mt-3 fs-3 fw-bold">1453</p>
                        <p className="fs-6 py-1 text-light">Application</p>

                            </div>
                            <div className="col">
                                <img src="assets/l1.svg" className="" alt=" this img" style={{width:"150px", height:"100px"}}/>
                            </div>

                    </div>
                </div>
                {/* card2 */}
                
                {
                    card.map((val,index)=>{
                        return(
                            <LeftCard
                            key={index}
                            logo={val.logo}
                            label={val.label}
                            graph={val.graph}
                            val={val.val}
                            />
                        )
                    })
                }
                <div className="col-md-12 my-2  p-0 bg-light">
                    {/* Interview TimeTable */}
                    <HrInter/> 
                </div>
            </div>
                        
        </div>
    </>
  )
}

export default HrRight
