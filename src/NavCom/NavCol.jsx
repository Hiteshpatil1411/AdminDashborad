import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavCol.css';

const NavCol = () => {
  return (
    <div
      className="px-2 py-3 mx-2 my-2  sidebar rounded-4"
      style={{
       maxWidth:'250px',
       minWidth:"80px",
        height: '100vh',
        backgroundColor: 'rgb(76,53,117)',
        
      }}
    >
      <div className="navbar flex-column flex-md-row align-items-md-start ">
        <NavLink
          className="navbar-brand text-light fs-3 d-flex align-items-center mb-4"
          to="/"
        >
          <i className="bi bi-clipboard-check-fill fs-2" />
          <span className="d-none d-md-inline ms-2">My-Task</span>
        </NavLink>

        <ul className="nav flex-column">
          {/* Dashboard */}
          <li className="nav-item mb-3">
            <NavLink
              className="nav-link btn text-light fs-5 d-flex align-items-center"
              to="/"
            >
              <i className="bi bi-house-door-fill me-2" />
              <span className="d-none d-md-inline">Dashboard</span>
            </NavLink>
          </li>

          {/* Project Dashboard */}
          <li className="nav-item mb-3">
            <NavLink
              className="nav-link btn text-light fs-5 d-flex align-items-center"
              to="/projectDash"
            >
              <i className="bi bi-speedometer2 me-2" />
              <span className="d-none d-md-inline">Project Dash</span>
            </NavLink>
          </li>

          {/* Projects */}
          <li className="nav-item mb-3">
            <NavLink
              className="nav-link btn text-light fs-5 d-flex align-items-center"
              to="/project"
            >
              <i className="bi bi-briefcase-fill me-2" />
              <span className="d-none d-md-inline">Projects</span>
            </NavLink>
          </li>

          {/* Tasks */}
          <li className="nav-item mb-3">
            <NavLink
              className="nav-link btn text-light fs-5 d-flex align-items-center"
              to="/task"
            >
              <i className="bi bi-list-check me-2" />
              <span className="d-none d-md-inline">Tasks</span>
            </NavLink>
          </li>

          {/* Timesheet */}
          <li className="nav-item mb-3">
            <NavLink
              className="nav-link btn text-light fs-5 d-flex align-items-center"
              to="/timetable"
            >
              <i className="bi bi-clock-fill me-2" />
              <span className="d-none d-md-inline">Timesheet</span>
            </NavLink>
          </li>

          {/* Leader */}
          <li className="nav-item mb-3">
            <NavLink
              className="nav-link btn text-light fs-5 d-flex align-items-center"
              to="/leader"
            >
              <i className="bi bi-person-badge-fill me-2" />
              <span className="d-none d-md-inline">Leader</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavCol;
