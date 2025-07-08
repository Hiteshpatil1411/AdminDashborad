import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import HeadBar from './NavCom/HeadBar'
import NavCol from './NavCom/NavCol'

import Chatbox from './NavCom/Chatbox'
import SearchB from './Page/SearchB'
import HrDash from './Page/DashboradCom/HrDash'
import ProDash from './Page/ProjectDash/ProDash'
import ProjectList from './Page/Projects.jsx/ProjectList'
import Task from './Page/Projects.jsx/Task'
import TimeTable from './Page/Projects.jsx/TimeTable'
import Leaders from './Page/Projects.jsx/Leaders'
const App = () => {
  return (
    <>
    
      <Router>
          <div className="container-fluid">
          <div className="row">
            <div className="col-2 col-md-3 " >
        <NavCol/>
        {/* <Chatbox/> */}
        </div>
        <div className="col-10 col-md-9">

          <div className='row'>
                
            
            
              <SearchB/>

        <Routes>
          <Route path='/' element={<HrDash/>}></Route>
          <Route path='/projectDash' element={<ProDash/>}></Route>
          {/* <Route path='/' element={<h1>hiiiii</h1>}></Route>
          <Route path='/projectDash' element={<h1>hellooo</h1>}></Route> */}
          <Route path='/project' element={<ProjectList/>}></Route>
          <Route path='/task' element={<Task/>}></Route>
          <Route path='/timetable' element={<TimeTable/>}></Route>
          <Route path='/leader' element={<Leaders/>}></Route>
        </Routes>
        </div>
        </div>
        </div>
            
            </div>  
      </Router>
      
    
    </>
  )
}

export default App
