import React from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

// course comps
import CourseContainer from "./courses/CourseContainer";
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = () => {
  //console.log(pathname);
  return (
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li>
            <NavLink to="./html">HTML</NavLink>
          </li>
          <li>
            <NavLink to="./css">CSS</NavLink>
          </li>
          <li>
            <NavLink to="./javascript">JavaScript</NavLink>
          </li>
        </ul>
      </div>

      {/* Write routes here... */}
      <Routes>
        {/* on initial load, load html route */}
        <Route exact path="/" element={<Navigate replace to="html" />} />
        <Route path="html" element={<CourseContainer data={HTMLCourses}/>} />
        <Route path="css" element={<CourseContainer data={CSSCourses}/>} />
        <Route path="javascript" element={<CourseContainer data={JSCourses}/>} />
      </Routes>
    </div>
  );
};

export default Courses;
