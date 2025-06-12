import React from 'react'
import InterR from './InterR'

const HrInter = () => {
    const InterTime=[
    {
        profile:"intp1.jpg",
        name:"Natalie Gibson",
        pos:"Ui/UX Designe",
        time:"1.30 - 3.00"
        
    },
    {
        profile:"intp2.jpg",
        name:"Peter Piperg",
        pos:"Web Design",
        time:"3.00-4.00"
        
    },
    {
        profile:"intp3.jpg",
        name:"Robert Young",
        pos:"PHP Develope",
        time:"2.00 - 4.00"

    },
    {
        profile:"intp4.jpg",
        name:"Victoria Vbell",
        pos:"IOS Developer",
        time:"5.30 - 6.30"

    },
    {
        profile:"intp2.jpg",
        name:"Peter Piperg",
        pos:"Web Design",
        time:"3.00-4.00"
        
    },
    {
        profile:"intp1.jpg",
        name:"Natalie Gibson",
        pos:"Ui/UX Designe",
        time:"1.30 - 3.00"
        
    },
    {
        profile:"intp4.jpg",
        name:"Victoria Vbell",
        pos:"IOS Developer",
        time:"5.30 - 6.30"

    }
]
  return (
    <>
        <div className="border border-secondary-subtle overflow-y-auto  p-2  rounded-2" style={{maxHeight:"548px"}}>
                            <p className="fw-bold fs-6 py-3 px-3">Upcomming Interviews</p>
                            <table className="table table-sm table-hover table-light align-middle " style={{fontSize:"14px"}}>
                              <tbody>
                                  {
                                        InterTime.map((val,index)=>{
                                            return(
                                            <InterR
                                            key={index}
                                            name={val.name}
                                            profile={val.profile}
                                            pos={val.pos}
                                            time={val.time}
                                            />
                                            )
                                        })
                                    }
                              </tbody>
                            </table>

                        </div>
    </>    
)
}

export default HrInter
