import React from 'react'

const ProgressBar = (props) => {
  return (
    <>
     <div className="col-md-12 my-2" >
        <p className="fw-bold m-0 ">
            {props.title} 
            <span className="float-end text-secondary" style={{fontSize:"12px"}}>{props.task}</span>
        </p>
        <div className="progress" role="progressbar" aria-label="Basic example"  aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                              <div className="progress-bar bg-warning bg-opacity-50  " style={{width:props.prog}}></div>
                            </div>
        </div> 
    </>
  )
}

export default ProgressBar
