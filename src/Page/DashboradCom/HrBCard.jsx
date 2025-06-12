import React from 'react'

const HrBCard = (props) => {
  return (
    <>
     <div className="col-md-4 my-3 ">
        <div className="card" style={{height:"200px"}}>
            <div className="col p-2">
                <div className="bg-ligth border border-2 my-2 mx-auto rounded-circle overflow-hidden " style={{width:"50px", height:"50px"}}>
               
               <img src={`assets/${props.profile}`} className='  img-fluid  ' alt="" />
           </div>
           <div className="col text-center">
            <p className=" m-0 fs-6 fw-bold">{props.name}</p>
            <p className=" mt-1 m-0 text-secondary fs-6 ">{props.lable}</p>
            <p className="   px-2 fs-1 fw-bold  " style={{color:"rgb(76,53,117)"}}>{props.per}</p>
            

           </div>
                </div>    
        </div>    
    </div> 
    </>
  )
}

export default HrBCard
