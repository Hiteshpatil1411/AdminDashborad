import React from 'react'

const FMidc2 = () => {
  return (
    <>
    <div className="formcard me-3 rounded-2 p-3 bg-primary bg-opacity-25 border " style={{color:"rgb(76,53,117)"}}>

    <div className="row">
        <div className="col-md-12">
            <p className=' fs-6 m-0 fw-bold'>Create Project Credentials</p>
            <p className="fs-6 m-0 mb-2 ">Create a Project credentials now and never miss</p>
            <div className="form">
                <form>
                    <div className="col-12 my-3 ">
                        <input type="text" className="form-control   form-control-lg" placeholder='Enter Username'/>
                    </div>
                    <div className="col-12 my-3 ">
                        <input type="password" className="form-control  form-control-lg" placeholder='Enter Password' />
                    </div>
                    <div className="col-12 my-3 ">
                        <input type="password" className="form-control  form-control-lg" placeholder='Enter Password' />
                    </div>
                     <button type="submit" class="btn  my-2 text-light" style={{backgroundColor:"rgb(76,53,117)"}}>Create Credentials</button>
                    
                </form>
            </div>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default FMidc2
