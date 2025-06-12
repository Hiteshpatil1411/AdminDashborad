import React from 'react'

const TMem = (props) => {
  return (
    <>
    <div className="col-md-12 my-1 py-1 ">
        <div className="row d-flex ">
            <div className="col-md-3">
                <div className="bg-ligth border border-2 mx-auto rounded-circle overflow-hidden " style={{width:"50px", height:"50px"}}>
               <img src={`assets/${props.profile}`} className='  img-fluid  ' alt="" />
           </div>
            </div>
            <div className="col-md-9 px-0 ">
               <p className=" fw-bold m-0 w-5">{props.name}</p>
           <p className=" text-secondary m-0 w-5">{props.pos} </p>
            </div>
            <hr className='m-0' />
        </div>
        </div> 
      
    </>
  )
}

export default TMem
