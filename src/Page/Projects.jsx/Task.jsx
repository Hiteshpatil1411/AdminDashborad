import React from 'react'
import ProgressBar from './ProgressBar'
import Activity from './Activity'

import ProgCol from './ProgCol'
import TMem from './TMem'

const Task = () => {
   let tProg=[
    {
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },
    {
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },
    {
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },
    {
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },
    {
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },
    {
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },{
        title:"UI/UX Design",
        task:"02/07",
        prog:(2/7*100) + "%"
    },

]

    const tMember=[
    {
        profile:"intp1.jpg",
        name:"Natalie Gibson",
        pos:"Ui/UX Designe",
         },
    {
        profile:"intp2.jpg",
        name:"Peter Piperg",
        pos:"Web Design",
          
    },
    {
        profile:"intp3.jpg",
        name:"Robert Young",
        pos:"PHP Develope",
     

    }
]
   let inProg=[
        {
            
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["12 feb","bi-flag-fill   "],
            
            msg:["10","bi-chat-left-dots"],
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eligendi adipisci, neque numquam facere ut."
        },
        {
            
            headtitle:"Website Desing",
            projdomain:"Practice to Perfect",
            attach:["5","bi-paperclip"],
            month:["15 feb","bi-flag-fill   "],
            
            msg:["07","bi-chat-left-dots"],
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eligendi adipisci, neque numquam facere ut."
        },
        {
            
            headtitle:"Quality Assurance",
            projdomain:"Box Of Crayon",
            attach:["4","bi-paperclip"],
            month:["12 feb","bi-flag-fill   "],
            
            msg:["10","bi-chat-left-dots"],
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eligendi adipisci, neque numquam facere ut."
        },
        {
            
            headtitle:"Social Geek Made",
            projdomain:"UI/UX Design",
            attach:["4","bi-paperclip"],
            month:["12 feb","bi-flag-fill   "],
            
            msg:["10","bi-chat-left-dots"],
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eligendi adipisci, neque numquam facere ut."
        },
    ]
  return (
    <>
    
     <div className="pro p-0 m-0 my-5">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 ">
                        <p className="fs-3 fw-bold m-0 p-1 ">Task Management</p>
                    </div>
                    <div className="col-md-6 text-end">
                            <button className="btn py-2 px-3 mx-2 text-light" style={{backgroundColor:"rgb(76,53,117)"}}>+ Create Project</button>
                    </div>
                </div>
            </div>
            <hr /> 

            <div className="col-md-12">
                <div className="row "style={{height:"300px"}} >
                    <div className="col-md-4">
                        <div className="bg-light rounded p-3" style={{height:"100%"}} >
                            <p className="col fw-bold">Task Progress</p>
                            <hr />
                            <div className="overflow-auto m-0" style={{maxHeight:"200px"}} >
                                {
                                    tProg.map((val,index)=>{
                                        return(
                                            <>
                                                <ProgressBar
                                                    title={val.title}
                                                    task={val.task}
                                                    prog={val.prog}

                                                    />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        

                    </div>
                    <div className="col-md-4">
                        <div className="bg-light rounded p-3" style={{height:"100%"}} >
                            <p className="col fw-bold">Recent Activity</p>
                            <hr />
                            <div className="overflow-auto overflow-x-hidden m-0" style={{maxHeight:"200px"}} >
                                {
                                    tProg.map((val,index)=>{
                                        return(
                                            <>
                                                <Activity    
                                                    title={val.title}
                                                    task={val.task}
                                                    prog={val.prog}

                                                    />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-light rounded p-3" style={{height:"100%"}} >
                            <p className="col fw-bold">Allocated Task Members</p>
                            <hr />
                            <div className="overflow-auto overflow-x-hidden m-0" style={{maxHeight:"200px"}} >
                                {
                                    tMember.map((val,index)=>{
                                        return(
                                            <>
                                            <TMem    
                                                    profile={val.profile}
                                                    pos={val.pos}
                                                    name={val.name}

                                                    />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 my-3">
                <div className="row">
                    <div className="col-md-4 fw-bold">
                        <p>In Progress</p>
                        <div className="row mx-1">
                           {
                            inProg.map((val,index)=>{
                                return(
                                    <>
                                        <ProgCol
                                        key={index}
                                        headtitle={val.headtitle}
                                        body={val.body}
                                        projdomain={val.projdomain}
                                        attach={val.attach}
                                        month={val.month}
                                        msg={val.msg}
                                        brColor="border-warning"
                                        />
                                    </>
                                )
                            })
                           } 
                        </div>
                    </div>
                    <div className="col-md-4 fw-bold">
                        <p>Needs Review</p>
                        <div className="row">
                            {
                            inProg.map((val,index)=>{
                                if(index<3){
                                return(
                                    <>
                                        <ProgCol
                                        key={index}
                                        headtitle={val.headtitle}
                                        body={val.body}
                                        projdomain={val.projdomain}
                                        attach={val.attach}
                                        month={val.month}
                                        msg={val.msg}
                                        brColor="border-danger-subtle"
                                        />
                                    </>
                                )}
                                return null;
                            })
                           }

                        </div>
                    </div>
                    <div className="col-md-4 fw-bold">
                        <p>Complete</p>
                        <div className="row mx-1">
                            {
                            inProg.map((val,index)=>{
                                return(
                                    <>
                                        <ProgCol
                                        key={index}
                                        headtitle={val.headtitle}
                                        body={val.body}
                                        projdomain={val.projdomain}
                                        attach={val.attach}
                                        month={val.month}
                                        msg={val.msg}
                                        brColor="border-success"
                                        />
                                    </>
                                )
                            })
                           }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div> 
    </>
  )
}

export default Task
