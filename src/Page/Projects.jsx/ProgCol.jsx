import React from 'react'

const ProgCol = (props) => {
  return (
    <>
     <div className="col-md-12 my-2">
        <div className={`card row bg-light border-bottom ${props.brColor} rounded-2 p-3 fw-light`}>
            <p className="col p-0 my-2"><span className="badge p-2 bg-success text-dark bg-opacity-50">
                {props.headtitle}
                </span></p>
            <p className="text-wrap p-0" style={{fontSize:"15px"}}>{props.body}</p>
            <div className="col-md-12 d-flex " style={{fontSize:"15px"}}>
                <div className="col-md-6 d-flex">
                <div className="mx-1">
                    <i class={`bi ${props.attach[1]}`}></i>
                    <span>{props.attach[0]}</span>
                </div>
                <div className="mx-1">
                    <i class={`bi ${props.month[1]}`}></i>
                    <span>{props.month[0]}</span></div>
                <div className="mx-1">
                    <i class={`bi ${props.msg[1]}`}></i>
                    <span>{props.msg[0]}</span>
                </div>
                </div>
                <div className="col-md-6 text-end">
                    <span className="badge p-2 bg-primary text-dark bg-opacity-50">
                {props.projdomain}
                </span>
                </div>
            </div>

        </div>
        </div> 
    </>
  )
}

export default ProgCol
