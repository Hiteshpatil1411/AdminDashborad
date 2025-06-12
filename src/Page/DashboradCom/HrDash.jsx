import React from 'react'
import HrLeft from './HrLeft'
import HrRight from './HrRight'
import HrPro from './HrPro'


const HrDash = () => {
    
  return (
   <>
    <div className="row pb-0">
        {/* center section */}
            <HrLeft />
        {/* right section */}
            <HrRight/>
        {/* Bottom section */}
        <HrPro/>
    </div>
   </>
  )
}

export default HrDash
