import React from 'react'

const FMidCard = () => {
  return (
    <>
     <div className="card  p-3 border border-light  bg-light rounded-2" style={{height:"100%"}} >
        <div className="row">
            <div className="col-md-6">
                <p className="fs-4 m-0 fw-bold">Dylan Hunter</p>
                <p className="fs-6 m-0 text-start">
                    Welcome back Dylan Hunter.Integer molestie, arcu non porta sollicitudin, arcu felis aliquam urna, placerat maximus lorem urna commodo sem. Pellentesque venenatis leo quam, sed mattis sapien lobortis ut.placerat maximus lorem urna commodo sem
                    </p>
                <button type="button" className='btn my-3 btn-danger p-3 py-2'> Free Inquire</button>
            </div>
            <div className="col-md-6 text-center d-flex align-items-center">
                <img src="assets/midC.svg" alt=""  style={{width:"90%"}}/>
            </div>
        </div>
        </div> 
    </>
  )
}

export default FMidCard
