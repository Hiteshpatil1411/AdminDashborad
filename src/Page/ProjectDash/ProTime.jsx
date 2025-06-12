import React from 'react'
import { NavLink } from 'react-router-dom'

const ProTime = () => {
  return (
    <>
    <div className="timeCard p-3 bg-light  rounded-2" style={{height:"100%"}}>
    <div className="row">
        <div className="col-md-12">
            <p className="fw-bold m-0">Project TimeLine
                <span className="float-end">
                    <button type="button" className="btn btn-outline-light py-1 px-2 m-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      </button>
                      <ul class="dropdown-menu">
                        <li><NavLink className="dropdown-item bg-light text-dark" href="#">Last 7 Days </NavLink></li>
                        <li><NavLink className="dropdown-item bg-light text-dark" href="#">Last 30 Days</NavLink></li>
                        <li><NavLink className="dropdown-item bg-light text-dark" href="#">Last 60 Days</NavLink></li>
                        </ul>
                </span>
            </p>
        </div> 
        <div className="col-12 my-3">
            <div className="proimg">
                <img src="assets/Prot.png" alt="" className='img-fluid' />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProTime
