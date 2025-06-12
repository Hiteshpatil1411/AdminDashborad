import React from 'react'

const Activity = () => {
  return (
    <>
     <div className="col-md-12 my-2 py-1 ">
        <div className="row d-flex ">
            <div className="col-md-3">
                <div className="bg-info bf-opacity-50 text-center rounded-circle py-1 m-2" style={{width:"35px",height:"35px"}}>
                    RH
                </div>
            </div>
            <div className="col-md-9 px-0 ">
                <p className='m-0'>Rechard Add New Task</p>
                <span className=" text-secondary p-0" style={{fontSize:"12px"}}>20min ago</span>
            </div>
            <hr className='m-0' />
        </div>
        </div> 
    </>
  )
}

export default Activity
