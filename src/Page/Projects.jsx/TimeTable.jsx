import React from 'react'
import TimeRow from './TimeRow'

const TimeTable = () => {
      
  
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
                      <th scope="col">Project Name</th>                      
                      <th scope="col">Mon</th>
                      <th scope="col">Tue</th>
                      <th scope="col">Wed</th>
                      <th scope="col">Thur</th>
                      <th scope="col">Fri</th>
                      <th scope="col">Sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
                    <TimeRow/>
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

export default TimeTable
