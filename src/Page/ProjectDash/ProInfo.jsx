import React from 'react'
import { NavLink } from 'react-router-dom'
import ProTable from './ProTable'

const ProInfo = () => {
  return (
    <>
    <div className="ProTable p-3 bg-light rounded-2 border border-dakr">
     <div className="row">
        <div className="col-md-12">
            <p className="fs-6 fw-bold">Project Information</p>
        </div>
        <div className="col-md-12 d-flex justify-content-between ">
            <div>
                <p>
                    Show <button class="btn btn-secondary bg-opacity-25 py-1 mx-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        10
                      </button>
                      <ul class="dropdown-menu">
                        <li><NavLink class="dropdown-item" to="/projectDash">10</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/projectDash">50</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/projectDash">100</NavLink></li>
                      </ul>
                      entries
                </p>
            </div>
            <div>
                <div class="container-fluid ">
                    <form class="d-flex  p-0" role="search">
                            <label for="src" class="col-form-label">Search:</label>
                      <input class="form-control mx-2 bg-body-tertiary me-2" id='src' type="search" placeholder="Search" aria-label="Search"/>

                    </form>
                  </div>
            </div>
        </div>
        <div className="col-md-12 ">
            <ProTable/>
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

export default ProInfo
