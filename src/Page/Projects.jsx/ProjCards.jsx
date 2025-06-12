import React from 'react'

const ProjCards = (props) => {
    // let cardin=[
    //     {
    //         attach:"4",
    //         alogo:"",
    //         month:"4",
    //         member:"5",
    //         mlogo:" bi-chat-left-dots",
    //         msg:"10"

    //     }
    // ]
  return (
    <>
     <div className="col-md-4 px-2 my-2">
            <div className="card bg-light rounded-2 mt-5 pb-2 ">
                    <div className="row px-3">
                        <div className="col-md-12">
                            <div className='' style={{width:"100%",height:"60px"}}>
                                <div className="position-absolute  top-0 start-50 translate-middle">
                            <div className="rounded-2  bg-secondary text-light fs-3 text-center  p-1 pt-2" style={{width:"60px",height:"60px",margin:"auto"}}><i className= {`bi ${props.headlogo} `}></i>
                            
                            </div>
                            <p className=' m-0 w-100' style={{fontSize:"13px"}} >{props.headtitle}</p>
                            </div>
                            </div>
                        </div>
                        <div className="co-md-12 my-2">
                            <div className="row">
                            <div className="col-md-6 fw-bold">{props.projdomain}</div>
                            <div className="col-md-6 text-end">
                                <i className="bi mx-1 bi-pencil-square text-success"></i>
                                <i className="bi mx-1 bi-trash3 text-danger"></i>
                                </div></div>

                            

                        </div>
                        <div className="col-md-12 ">
                            <img src="assets/cardmem.png" alt="" className="img-fluid" style={{height:"25px"}} />
                        </div>
                        <div className="col-md-12 my-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <i className={`bi ${props.attach[1]}`}></i> 
                                    <p className="d-inline">{props.attach[0]} Attach</p>   
                                </div>
                                <div className="col-md-6">
                                    <i className={`bi ${props.month[1]}`}></i> 
                                    <p className="d-inline">{props.month[0]} Month</p>   
                                </div>
                                <div className="col-md-6">
                                    <i className={`bi ${props.member[1]}`}></i> 
                                    <p className="d-inline">{props.member[0]} Member</p>   
                                </div>
                                <div className="col-md-6">
                                    <i className={`bi ${props.msg[1]}`}></i> 
                                    <p className="d-inline">{props.msg[0]}</p>   
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-md-12">
                            <div className="row my-2">
                            <p className="fs-6 col-md-8 m-0 fw-bold">Progres</p>
                            <span className= {`col-md-4 px-0 badge text-dark ${props.projStatus[1]} bg-opacity-25`}>
                                <i className="bi bi-clock mx-1"></i>
                                {props.projStatus[0]}</span>
                            </div>

                        </div>
                        <div className="col-md-12 my-1">
                            <div className="progress" role="progressbar" aria-label="Basic example"  aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                              <div className="progress-bar bg-danger " style={{width:props.prog}}></div>
                            </div>
                        </div>
                    </div>
            </div>

        </div> 
    </>
  )
}

export default ProjCards
