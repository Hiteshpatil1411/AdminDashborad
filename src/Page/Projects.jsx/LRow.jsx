import React from 'react'

const LRow = (props) => {
  return (
    <>
     <tr >
      <td className='px-2 w-25'>
       <td >
           <div className="bg-ligth border border-2 mx-auto rounded-circle overflow-hidden " style={{width:"30px", height:"30px"}}>
               <img src={`assets/${props.img}`} className='  img-fluid  ' alt="" />
           </div>
         </td>
         <td>
           <p className=" fw-bold m-0 ">{props.lname}</p>
         </td>   
        </td>
      <td>
        {props.project}
      </td>
      <td>{props.ttask} Task</td>
      <td>{props.email}</td>
      <td>{props.adate}</td>
      <td><img src="assets/cardmem.png" alt="" className="img-fluid"  style={{width:"90px"}}/></td>
      
      
    </tr>   
    </>
  )
}

export default LRow
