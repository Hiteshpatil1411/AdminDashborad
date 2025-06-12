import React, { useState } from 'react'
import ProjCards from './ProjCards'

const ProjectList = () => {
   let cardinfo=[
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["35 Days Left","bg-danger"],
            
            prog:"75%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["35 Days Left","bg-danger"],
            
            prog:"25%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["Approval","bg-warning"],
            
            prog:"0%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["35 Days Left","bg-danger"],
            
            prog:"45%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["Approval","bg-warning"],
            
            prog:"0%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["Complete","bg-success"],
            
            prog:"100%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["Approval","bg-warning"],
            
            prog:"0%"
        },
        {
            headlogo:"bi-brush",
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["4","bi-hourglass-split"],
            member:["5","bi-people-fill"],
            msg:["10","bi-chat-left-dots"],
            projStatus:["Complete","bg-success"],
            
            prog:"100%"
        }

    ]
    // let viewstatus={
    //     all=true,

    // }
    const [showCard, setCardData] = useState(cardinfo);
    let viewAll=()=>{
       const show=cardinfo;
        setCardData(show)
        
    document.getElementById("vAll").classList.add("active")
    document.getElementById("vStart").classList.remove("active")
    document.getElementById("vApp").classList.remove("active")
    document.getElementById("vComp").classList.remove("active")
    

    }
    let viewS=()=>{
        const show = cardinfo.filter(
      (card) => card.projStatus[0] !== "Complete" && card.projStatus[0] !== "Approval"
    );
    setCardData(show)
    document.getElementById("vAll").classList.remove("active")
    document.getElementById("vStart").classList.add("active")
    document.getElementById("vApp").classList.remove("active")
    document.getElementById("vComp").classList.remove("active")
    

    }
    let viewComp=()=>{
         const show = cardinfo.filter(
      (card) => card.projStatus[0] === "Complete" 
    );
    setCardData(show)
    
    document.getElementById("vAll").classList.remove("active")
    document.getElementById("vStart").classList.remove("active")
    document.getElementById("vApp").classList.remove("active")
    document.getElementById("vComp").classList.add("active")
    
    }
    let viewApprove=()=>{
         const show = cardinfo.filter(
      (card) => card.projStatus[0] === "Approval"
    );
    setCardData(show)
    
    document.getElementById("vAll").classList.remove("active")
    document.getElementById("vStart").classList.remove("active")
    document.getElementById("vApp").classList.add("active")
    document.getElementById("vComp").classList.remove("active")
    

    }

  return (
    <>
     <div className="pro p-0 m-0 my-5">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 ">
                        <p className="fs-3 fw-bold m-0 p-1 ">Projects</p>
                    </div>
                    <div className="col-md-6 ">
                            <button className="btn py-2 px-3 mx-2 text-light" style={{backgroundColor:"rgb(76,53,117)"}}>+ Create Project</button>
                            <div class="btn-group px-2" role="group" aria-label="Basic outlined example">
                              <button type="button" class="btn btn-outline-primary active" id='vAll' onClick={()=>viewAll()}>All</button>
                              <button type="button" class="btn btn-outline-primary" id='vStart' onClick={()=>viewS()}>Started</button>
                              <button type="button" class="btn btn-outline-primary" id='vApp' onClick={()=>viewApprove()}>Approval</button>
                              <button type="button" class="btn btn-outline-primary" id='vComp' onClick={()=>viewComp()}>Completed</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-md-12">
                <div className="row">
                    {/* Project Cards */}
                    {/* Condition All */}
                    {
                     showCard.map((val,index)=>{
                            return(
                                <>
                                    <ProjCards
                                    key={index}
                                        headlogo={val.headlogo}
                                        headtitle={val.headtitle}
                                        projdomain={val.projdomain}
                                        projStatus={val.projStatus}
                                        prog={val.prog}                                      
                                        attach={val.attach}
                                        member={val.member}
                                        month={val.month}
                                        msg={val.msg}
                                    />
                                </>
                            )
                        })
                    }
                    {/* {
                       !view.all && cardinfo.projStatus[0]=="Complete"?cardinfo.map((val,index)=>{
                            return(
                                <>
                                    <ProjCards
                                    key={index}
                                        headlogo={val.headlogo}
                                        headtitle={val.headtitle}
                                        projdomain={val.projdomain}
                                        projStatus={val.projStatus}
                                        prog={val.prog}                                      
                                        attach={val.attach}
                                        member={val.member}
                                        month={val.month}
                                        msg={val.msg}
                                    />
                                </>
                            )
                        }):null
                    } */}
                    
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default ProjectList
