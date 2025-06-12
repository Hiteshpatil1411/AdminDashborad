import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavCol.css'

const NavCol = () => {
  return (
    <>
        <div className="row px-4">
            <div className="col-md-3 px-2 py-3 mx-3 fixed-top  rounded-4" style={{maxWidth:"250px", height:"520px", top:"80px",backgroundColor:"rgb(76,53,117)"}}>
                <div className="navbar  align-items-start my-3" style={{height:"90%"}}>
                 <NavLink className="navbar-brand  mx-4 fw-bold text-dark fs-3 d-flex align-items-center" to="/"><i className="bi bi-clipboard-check-fill text-light fs-1 " ><span className='fs-4 fw-bold '> My-Task</span></i></NavLink>
                 
                 <ul className="nav flex-column w-100 float-start">
                      <li className="nav-item ">
                        {/* Nav Heading 1 */}
                        <NavLink className="nav-link px-1 "      aria-current="page" to="/" >
                        <button class="btn text-light hover-danger fs-5  px-2 m-0 w-100 float-start " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="true" aria-controls="multiCollapseExample1"><i class="bi bi-house-door-fill  float-start" /> <span className='float-start ms-1'>  Dashborad  </span> <i class="bi bi-caret-down-fill  float-end"/></button>

                        </NavLink>
                        {/* Nav1 Items */}

                        <div className="flex-colum align-items-start">
                            <div class="col">
                                <div class="collapse " id="multiCollapseExample1">
                                  <NavLink className="nav-link px-1 active" aria-current="page" to="/" >
                        <button class="btn text-light hover-danger   px-2 m-0 w-100 float-start " type="button"> <span className='float-start ms-4 '>  Hr Dashborad  </span> </button>

                        </NavLink>
                          <NavLink className="nav-link px-1 active" aria-current="page" to="/projectDash" >
                        <button class="btn text-light hover-danger   px-2 m-0 w-100 float-start " type="button"> <span className='float-start ms-4 '>  Project Dashborad  </span> </button>

                        </NavLink>
                                </div>
                              </div>
                        </div>
                      </li>
                      {/* NavHeading2 */}
                      <li className="nav-item">
                        <NavLink className="nav-link px-1  active  " aria-current="page" to="/project" >
                        <button class="btn text-light hover-danger fs-5  px-2 m-0 w-100 float-start " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"><i class="bi bi-briefcase-fill  float-start" /> <span className='float-start ms-1'>  Projects  </span> <i class="bi bi-caret-down-fill  float-end"/></button>

                        </NavLink>
                        {/* Nav2 Items */}

                        <div className="flex-colum align-items-start">
                            <div class="col">
                                <div class="collapse " id="multiCollapseExample2">
                                      <NavLink className="nav-link px-1 active" aria-current="page" to="/project" >
                                    <button class="btn text-light hover-danger   px-2 m-0 w-100 float-start " type="button"> <span className='float-start ms-4 '>  Project   </span> </button>
            
                                    </NavLink>
                                    <NavLink className="nav-link px-1 active" aria-current="page" to="/task" >
                                    <button class="btn text-light hover-danger   px-2 m-0 w-100 float-start " type="button"> <span className='float-start ms-4 '>  Task   </span> </button>
            
                                    </NavLink>
                                    <NavLink className="nav-link px-1 active" aria-current="page" to="/timetable" >
                                    <button class="btn text-light hover-danger   px-2 m-0 w-100 float-start " type="button"> <span className='float-start ms-4 '>  Timesheet   </span> </button>
            
                                    </NavLink>
                                  <NavLink className="nav-link px-1 active" aria-current="page" to="/leader" >
                                    <button class="btn text-light hover-danger   px-2 m-0 w-100 float-start " type="button"> <span className='float-start ms-4 '>  Leader  </span> </button>
            
                                    </NavLink>
                                </div>
                              </div>
                        </div>
                      </li>
                      
                    </ul>
                    </div>
            </div>
        </div>
    </>
  )
}

export default NavCol
