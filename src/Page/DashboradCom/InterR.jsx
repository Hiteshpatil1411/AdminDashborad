import React from 'react'

const InterR = (props) => {
  return (
    <>
      <tr>
         <td className='w-25 ' >
           <div className="bg-ligth border border-2 mx-auto rounded-circle overflow-hidden " style={{width:"50px", height:"50px"}}>
               <img src={`assets/${props.profile}`} className='  img-fluid  ' alt="" />
           </div>
         </td>
         <td>
           <p className=" fw-bold m-0 w-5">{props.name}</p>
           <p className=" text-secondary m-0 w-5">{props.pos} </p>
         </td>
         <td>
           <i class="bi bi-clock " style={{fontSize:"12px"}}/>
           <p className="d-inline px-1">{props.time}</p>
         </td>
         
       </tr>
    </>
  )
}

export default InterR
