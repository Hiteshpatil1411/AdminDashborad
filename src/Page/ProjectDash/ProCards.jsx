import React from 'react'

const ProCards = (props) => {
  return (
    <>
     <div className="col-md-3 px-3 ">
        <div className="row d-flex   rounded-2  p-3 align-items-center" style={{backgroundColor:"rgb(76,53,117)"}}>
                            <div className="col-md-3">
                            <div className={` overflow-hidden text-center text-light py-1`}   >
                                <i class={`bi ${props.logo} fs-3`}></i>
                                 
                            </div>
                            </div> 
                            <div className="col mx-6 text-light">
                                <p className="fs-6 m-0 ">{props.heading}</p>
                                <p className=" m-0" style={{fontSize:"15px"}}>{props.val}</p>
                            </div>

                    </div> 
        </div> 
    </>
  )
}

export default ProCards
