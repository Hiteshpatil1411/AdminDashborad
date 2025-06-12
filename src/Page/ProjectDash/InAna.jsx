import React from 'react'

const InAna = () => {
  return (
    <>
     <div className="card p-3 border  rounded-2 border-light bg-light">
        <div className="row">
            <div className="col-12">
                <p className="m-0 fw-bold">Income Analytics</p>
            </div>
            <div className="col-12 d-flex justify-content-end">
                <div className=" m-1">
                    <p className="fs-6 fw-bold text-center m-0">$3230</p>
                    <p className="text-secondary-emphasis text-center m-0" style={{fontSize:"12px "}}>Income</p>
                </div>
                <div className=" m-1">
                    <p className="fs-6 fw-bold text-center m-0">$1230</p>
                    <p className="text-secondary-emphasis text-center m-0" style={{fontSize:"12px "}}>Expense</p>
                </div>
                
            </div>
            <div className="col-12 p-4">
                <img src="assets/incomeG.png " className="img-fluid" alt="" />
            </div>
        </div>
        </div> 
    </>
  )
}

export default InAna
