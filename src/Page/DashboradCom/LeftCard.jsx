import React from 'react'

const LeftCard = (props) => {
  return (
    <>
        <div className="col-md-12 mt-2">
                    <div className="row">
                        
                        <div className="col-md-12 border border-secondary-subtle my-1 p-3 rounded-2">
                            <div className="row">
                            <div className="col-md-3">
                            <div className="bg-success bg-opacity-25  rounded-circle overflow-hidden text-center py-1  " style={{width:"50px",height:"50px"}}>
                                <i class={`bi ${props.logo} fs-3`}></i>
                                 
                            </div>
                            </div> 
                            <div className="col-md-6 mx-6">
                                <p className="fs-4 fw-bold m-0 ">{props.val}</p>
                                <p className="fs-6 text-secondary m-0">{props.label}</p>
                            </div>
                            <div className="col-md-3 my-auto">
                                <i class={`bi ${props.graph} fs-3 p-2 text-body-tertiary`}></i>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
    </>
      )
}

export default LeftCard
