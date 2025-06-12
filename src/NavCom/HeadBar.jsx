import React from 'react'

const HeadBar = () => {
  return (
    <>
        <div className="row">
            <div className="col-md-12 fixed-top bg-dark mb-4 ">
                <div className="row">
                    <div className="col-md-6  mt-2 p-2 d-flex justify-content-start align-item-center text-light">
                        <img src="assets/logo1.svg" className=' mx-3' alt="logo" style={{height:"20px"}} />
                    </div>
                    <div className="col-md-6 p-2 d-flex justify-content-end align-item center">
                        <button className="btn btn-success mx-3" type='button'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div style={{height:"80px"}}></div>
           
        </div>
        
    </>
  )
}

export default HeadBar
