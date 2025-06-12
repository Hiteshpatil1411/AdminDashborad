import React from 'react'

const EmpAcard = (props) => {
  return (
    <>
                <div className="col-md-6 ">
                    <div className="pt-2 px-2 my-2 border border-secondary-subtle mx-2 rounded-2" style={{maxWidth:"200px", maxHeight:"200px"}}>
            <i class={`bi ${props.logo} fw-bold fs-4`}></i>
            <p className="fs-6  m-0">{props.title}</p>
            <p className="text-secondary " style={{fontSize:"15px"}}>{props.val}</p>
            </div>
        </div>
    </>
  )
}

export default EmpAcard
