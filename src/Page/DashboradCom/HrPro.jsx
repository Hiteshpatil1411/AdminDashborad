import React from 'react'
import HrBCard from './HrBCard'

const HrPro = () => {
    const Card=[
        {
        profile:"intp1.jpg",
        name:"Luke Short",
        lable:"@Short",
        per:"80%"
        
    },
    {
        profile:"intp2.jpg",
        name:"John Hard",
        lable:"@rdacre",
        per:"70%"
        
    },
    {
        profile:"intp3.jpg",
        name:"Paul Rees",
        lable:"@Rees",
        per:"77%"

    },
    {
        profile:"intp4.jpg",
        name:"Rachel Parr",
        lable:"@Parr",
        per:"88%"

    },
    {
        profile:"intp5.jpg",
        name:"Eric Reid",
        lable:"@Eric",
        per:"90%"
        
    },
    {
        profile:"intp1.jpg",
        name:"Jan Ince",
        lable:"@Ince",
        per:"98%"
        
    }
    
    ]
  return (
    <>
        <div className="col-md-12 ms-3  p-0">
            <div className="border rounded-2   p-2" style={{backgroundColor:"rgb(241,200,219)"}}>
                <p className="fs-6 mx-2 my-2 fw-bold">Top Preformace</p>
                <p className="fd-6 mx-2 my-4">You have 140 <span className='fw-bold'>influencers</span> in your company.</p>
                <div className="d-flex my-2">
                <div className="w-25  text-center">
                    <p className="my-0 fs-3  fw-bold">350</p>
                    <p className="my-0 fs-6">New Task</p>
                </div>
                <div className="w-25 text-center">
                    <p className="my-0 fs-3  fw-bold">130</p>
                    <p className="my-0 fs-6">Complete Task</p>
                </div>
                </div>
                {/* cards */}
                <div className="row p-2">
                    {
                        Card.map((val,index)=>{
                            return(
                                <>
                                    <HrBCard
                                        key={index}
                                            name={val.name}
                                            profile={val.profile}
                                            lable={val.lable}
                                            per={val.per}
                                    />
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div> 
    </>
  )
}

export default HrPro
