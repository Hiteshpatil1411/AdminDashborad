import React from 'react'
import EmpAcard from './EmpAcard'

const HrLeft = () => {
    const empAva=[
        {
            title:"Attendance",
            logo:"bi-check2-square",
            val:"400"
        },
        {
            title:"Late Coming",
            logo:"bi-alarm",
            val:"17"
        },
        {
            title:"Absent",
            logo:"bi-ban",
            val:"06"
        },
        {
            title:"Leave Apply",
            logo:"bi-tsunami",
            val:"14"
        },
    ]
  return (
    <>
        <div className="col-md-8  flex-column d-flex my-2">
            <div className="row px-3">
            <div id="info" className=" col-md-12 border bg-light rounded-2 p-3 border-light ">
                <p className="fs-6 fw-bold m-2 w-100">Employees Info</p>
                <img src="assets/empg.svg" alt="" />

            </div>
                <div className="col-md-6 px-0 my-3">
                    <div className="bg-light broder border-light rounded-2 p-2">
                        <p className="fs-6 fw-bold m-2 w-100">Employees Availability</p>
                        <div className="row px-2">
                                {
                                    empAva.map((val,index)=>{
                                        return(
                                            <>
                                                <EmpAcard
                                                key={index}
                                                title={val.title}
                                                logo={val.logo}
                                                val={val.val}
                                                />
                                            </>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
                <div className="col-md-6  px-0 my-3 ">
                    <div className="bg-light broder border-light rounded-2 p-2 mx-3">
                        <p className="fs-6 fw-bold m-2 w-75 float-start">Total Employees</p>
                        <p className="fs-6 fw-bold m-2 float-end">450</p>
                        <div className="row px-2">
                                <div className="col-md-12 text-center">
                                    <img src="assets/tEmp.png" alt=""  style={{width:"235px"}}/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 px-0 mt-3">
                    <div className="bg-light broder border-light rounded-2 p-2">
                        <p className="fs-6 fw-bold m-2 w-100 float-start">Top Hiring Sources</p>
                        
                        <div className="row px-2">
                                <div className="col-md-12 text-center">
                                    <img src="assets/toph.png" alt=""  style={{width:"100%"}}/>
                                </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </>
  )
}

export default HrLeft
