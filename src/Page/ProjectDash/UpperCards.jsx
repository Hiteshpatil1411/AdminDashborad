import React from 'react'

const UpperCards = (props) => {
  return (
    <>
     
        
            
          <div className="col-md-4  ">
                <div className="row d-flex border border-light bg-light rounded-2 me-1 p-3 align-items-center">
                            <div className="col-md-3">
                            <div className={` ${props.bgcolor}  rounded-3 overflow-hidden text-center py-1`}   style={{width:"50px",height:"50px"}}>
                                <i class={`bi ${props.logo} fs-3`}></i>
                                 
                            </div>
                            </div> 
                            <div className="col-md-6 mx-6">
                                <p className="fs-6  text-secondary  m-0 ">{props.heading}</p>
                                <p className="fs-6 fw-bold m-0">{props.val}</p>
                            </div>
                            <div className="col-md-3 my-auto">
                                <i class={`bi bi-caret-right-fill fs-3 p-2 `}></i>
                            </div>
                    </div>                
                </div>         
    </>
  )
}

export default UpperCards
