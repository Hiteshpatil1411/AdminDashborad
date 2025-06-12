import React from 'react'

const ProRow = (props) => {
  return (
    <>
     <tr>
      <td>{props.titel}</td>
      <td>{props.sdata}</td>
      <td>{props.dl}</td>
      <td>
        <td className='w-25 ' >
           <div className="bg-ligth border border-2 mx-auto rounded-circle overflow-hidden " style={{width:"30px", height:"30px"}}>
               <img src={`assets/${props.img}`} className='  img-fluid  ' alt="" />
           </div>
         </td>
         <td>
           <p className=" fw-bold m-0 w-5">{props.lName}</p>
         </td>
      </td>
      <td>
        <div className="progress my-1 " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar " style={{width: `${props.prog}`,backgroundColor:"rgb(76,53,117)"}} >{props.prog}</div>
        </div>
      </td>
      <td>
        <span className={`badge text-light ${props.bgcolor}`} >{props.stage}</span>
      </td>

    </tr> 
    </>
  )
}

export default ProRow
