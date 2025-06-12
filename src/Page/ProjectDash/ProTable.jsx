import React from 'react'
import ProRow from './ProRow'

const ProTable = () => {
  const rowdata=[
    {
      titel:"Box Of Crayons",
      sdata:"23-12-2012",
      dl:"1 month",
      img:"intp2.jpg",
      lName:"Peter",
      prog:"75%",
      bgcolor:"bg-warning",
      stage:"Medium"
    },
    {
      titel:"Fast Cad",
      sdata:"14-04-2025",
      dl:"2 Month",
      img:"intp3.jpg",
      lName:"benjimin",
      prog:"80%",
      bgcolor:"bg-warning",
      stage:"Medium"
    },
    {
      titel:"Java Dalia ",
      sdata:"06-11-2024",
      dl:"5 month",
      img:"intp4.jpg",
      lName:"Leo",
      prog:"45%",
      bgcolor:"bg-danger",
      stage:"high"
    },
    {
      titel:"Box Of Crayons",
      sdata:"23-12-2012",
      dl:"1 month",
      img:"intp2.jpg",
      lName:"Peter",
      prog:"75%",
      bgcolor:"bg-warning",
      stage:"Medium"
    },
    {
      titel:"Fast Cad",
      sdata:"14-04-2025",
      dl:"2 Month",
      img:"intp3.jpg",
      lName:"benjimin",
      prog:"80%",
      bgcolor:"bg-warning",
      stage:"Medium"
    },
    {
      titel:"Java Dalia ",
      sdata:"06-11-2024",
      dl:"5 month",
      img:"intp4.jpg",
      lName:"Leo",
      prog:"45%",
      bgcolor:"bg-danger",
      stage:"high"
    }
  ]
  return (
    <>
     <table class="table table-hover my-3 mb-5  p-2 table-light">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Data start</th>
      <th scope="col">DeadLine</th>
      <th scope="col">Leader</th>
      <th scope="col">Completion</th>
      <th scope="col">Stage</th>
    </tr>
  </thead>
  <tbody>
    {
      rowdata.map((val,index)=>{
        return(
          <>
            <ProRow
            key={index}
            titel={val.titel}
            sdata={val.sdata}
            dl={val.dl}
            img={val.img}
            lName={val.lName}
            prog={val.prog}
            bgcolor={val.bgcolor}
            stage={val.stage}           
            />
          </>
        )
      })
    }
  </tbody>
</table> 
    </>
  )
}

export default ProTable
