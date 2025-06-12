import React from 'react'
import LRow from './LRow'

const Leaders = () => {
let leaders=[
    {
        img:"intp1.jpg",
        lname:"Peter John",
        email:"peterjohn@gmail.com",
        ttask:"3",
        adate:"12/03/2024",
        project:"Box Of Crayons"

    },
    {
        img:"intp2.jpg",
        lname:"Robert Anderson",
        email:"rpbert@gmail.com",
        ttask:"4",
        adate:"15/06/2024",
        project:"Fast Cad"

    },
    {
        img:"intp5.jpg",
        lname:"Ryan Randle",
        email:"ryanjohn@gmail.com",
        ttask:"5",
        adate:"15/08/2024",
        project:"Java Dalia"

    },
    {
        img:"intp4.jpg",
        lname:"Sally John",
        email:"sallyjohn@gmail.com",
        ttask:"5",
        adate:"11/03/2024",
        project:"Practice of Prefect"

    },
    {
        img:"intp2.jpg",
        lname:"Victor John",
        email:"victor@gmail.com",
        ttask:"9",
        adate:"19/03/2024",
        project:"Rineshone"

    }
]
    return (
    <>
     <div className="pro p-0 m-0 my-5">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 ">
                        <p className="fs-3 fw-bold m-0 p-1 ">Project Timesheet</p>
                    </div>
                    <div className="col-md-6 text-end">
                            <button className="btn py-2 px-3 mx-2 text-light" style={{backgroundColor:"rgb(76,53,117)"}}> Sheet Sent</button>
                    </div>
                </div>
            </div>
            <hr /> 
            <div className="col-md-12">
  
                     <table class="table table-hover my-3 mb-5  p-2 table-light">
                  <thead>
                    <tr>
                      <th scope="col">Leader Name</th>                      
                      <th scope="col">Project</th>
                      <th scope="col">Total Task</th>
                      <th scope="col">Email</th>
                      <th scope="col">Project Assigned</th>
                      <th scope="col">Assigned Staff</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                        leaders.map((val,index)=>{
                            return(
                                <LRow
                                    img={val.img}
                                    lname={val.lname}
                                    email={val.email}
                                    adate={val.adate}
                                    project={val.project}
                                    ttask={val.ttask}

                                    />
                            )
                        })
                    }
                  </tbody>
                </table>
            </div>
            <div className="col-md-12 d-flex justify-content-between ">
            <div>
                <p>
                    Showing 1 to 7 of 7 entries   </p>
            </div>
            <div>
                <div class="container-fluid ">
                    <div className="btn-group rounded-2" role="group" aria-label="Basic mixed styles example" style={{border:"1px solid rgb(76,53,117)"}}>
                      <button type="button" className="btn btn-primary-hover " style={{color:"rgb(76,53,117)"}}>Previous</button>
                      <button type="button" className="btn " style={{backgroundColor:"rgb(76,53,117)"}}> </button>
                      <button type="button" className="btn " style={{color:"rgb(76,53,117)"}}>Next</button>
                    </div>
                  </div>
            </div>
        </div>
     </div> 
     </div> 
    </>
  )
}

export default Leaders
