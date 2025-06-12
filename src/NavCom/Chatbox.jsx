import React from 'react'

const Chatbox = () => {
  return (
   <>
   
    <div className="fixed-bottom  mb-4 p-2" style={{width:"60px",right:"10px",left:"97%"}}>
      <div className=" rounded-circle float-end mx-4 d-flex jutify-content-center align-items-center" style={{width:"60px", height:"60px",backgroundColor:"rgb(76,53,117)"}}>
        <i class="bi bi-chat-fill text-light fs-2 m-auto" ></i>
      </div>

    </div>
    
   </>
  )
}

export default Chatbox
