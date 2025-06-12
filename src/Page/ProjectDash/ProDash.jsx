import React from 'react'
import UpperCards from './UpperCards'
import FMidCard from './FMidCard'
import FMidc2 from './FMidc2'
import InAna from './InAna'
import ProTime from './ProTime'
import ProCards from './ProCards'
import ProInfo from './ProInfo'

const ProDash = () => {
  const cards=[
    {
      val:"300",
      heading:"Total Task",
      logo:"bi-journal-check",
      bgcolor:" text-warning-emphasis"
    },
    {
      val:"140",
      heading:"Complete Task",
      logo:"bi-list-check",
      bgcolor:"text-primary-emphasis"
    },
    {
      val:"160",
      heading:"Progress Task",
      logo:"bi-clipboard-data",
      bgcolor:"text-primary-emphasis"
    }
  ]
  const Procards=[
    {
      val:"300",
      heading:"Total Project",
      logo:"bi-file-earmark-text-fill",
      
    },
    {
      val:"240",
      heading:"Coming Projects",
      logo:"bi-mailbox-flag",
      
    },
    {
      val:"160",
      heading:"Progress Project",
      logo:"bi-hourglass-split",
      
    },
    {
      val:"140",
      heading:"Finished Project",
      logo:"bi-list-check",
      
    }
  ]
  return (
    <>
        <div className="row p-0 mt-4 py-3">
            <div className="col-md-12   ">
                <div className="row m-0">
                    {/* Top cards */}
                    {
                      cards.map((val,index)=>{
                        return(
                          <>
                            <UpperCards
                            key={index}
                            val={val.val}                    
                            logo={val.logo}
                            heading={val.heading}
                            bgcolor={val.bgcolor}
                            />
                          </>
                        )
                      })
                    }
                    
                </div>
            </div>
            <div className="col-md-12  my-3">
              <div className="row ">
                <div className="col-md-7  m-0 " > 
                  <FMidCard/>
                </div>
                <div className="col-md-5  "  style={{height:"100%"}}>
                  <FMidc2/>
                </div>
              </div>
            </div>
            {/* Section2 */}
            <div className="col-md-12  my-2">
              <div className="row ">
                <div className="col-md-4  m-0 " > 
                  <InAna/>
                </div>
                <div className="col-md-8  m-0"  >
                  <ProTime/>
                  
                </div>
              </div>
            </div>
            {/* Section3 */}
            <div className="col-md-12 my-2">
              <div className="row p-2">
                {/* Project cards */}
                    {
                      Procards.map((val,index)=>{
                        return(
                          <>
                            <ProCards
                            key={index}
                            val={val.val}                    
                            logo={val.logo}
                            heading={val.heading}
                            
                            />
                          </>
                        )
                      })
                    }
              </div>
            </div>
            <div className="col-md-12">
              <ProInfo/>
            </div>
            </div> 
    </>
  )
}

export default ProDash
