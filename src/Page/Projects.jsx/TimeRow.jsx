import React from 'react'

const TimeRow = (props) => {
    let op1=["Box Of Crayons","Fast Cad","Java Dalia","Practice of Prefect","Rineshone","Social Geek mode","BoB"] ;
  return (
    <>
     <tr className='form'>
      <td>
        <select className="form-select " style={{width:"200px"}} aria-label="Default select example">
        <option selected>{op1[0]}</option>
              {
                op1.map((val)=>{
                    return(
                        <>
                        <option value={val}>{val}</option>
                        </>
                    )
                })
              }
        </select>      
        </td>
      <td>
        <input type="text" value="08.00" className='form-control w-75'/>
      </td>
      <td><input type="text" value="08.00" className='form-control w-75'/></td>
      <td><input type="text" value="08.00" className='form-control w-75'/></td>
      <td><input type="text" value="08.00" className='form-control w-75'/></td>
      <td><input type="text" value="08.00" className='form-control w-75'/></td>
      <td><input type="text" value="08.00" className='form-control w-75'/></td>
      
    </tr>  
    </>
  )
}

export default TimeRow
