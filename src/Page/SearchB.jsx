import React from 'react'

const SearchB = () => {
  return (
    <>
        <div className="row">
            <div className="col-md-12 my-2">
                <div className="row">
                    {/* Search Bar */}
                <div className="col-md-6">
                    <div className="input-group w-75" >
                      <i className="input-group-text bi bi-search" id="basic-addon1"/>
                      <input type="text" className="form-control text-info-emphasis text-opacity-25 fs-5" placeholder="Search" aria-label="Search"/>
                    </div>
                </div>
                {/* Members */}
                    <div className="col-md-3  ">
                        <img src="assets/ussera.png" className="align-center" alt="" style={{width:"100%"}}/>
                    </div>
                    {/* Admin */}
                    <div className="col-md-3 ps-4 justify-content-center d-flex flex-row align-items-center">
                        <i className="bi bi-bell-fill fs-5"/>
                        <div className=" d-flex flex-column align-items-center mx-3">
                            <p className=' fw-bold m-0 ' style={{fontSize:"15px"}}>Hitesh patil </p>
                            <p className=' m-0 p-0' style={{fontSize:"10px"}}>Admin Profil</p>
                        </div>
                        <div className="bg-ligth border border-2 rounded-circle overflow-hidden " style={{width:"45px", height:"45px"}}>
                            <img src="assets/adminpic.png" className=' p-1 img-fluid  ' alt="" />

                        </div>
                        <i class="bi bi-gear   mx-2 fs-5"></i>
                    </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default SearchB
