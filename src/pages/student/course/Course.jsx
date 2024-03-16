import React, { useState, useEffect } from "react";
import api from "../../../Api";

import "./Course.css";

import CourseTopBar from "./components/course-top-bar/CourseTopBar";
import Filters from "../../../shared/components/filter/Filter";
import CardLesson from "../components/card-lesson/CardLesson";

function Course() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [search, setSearch] = useState();
  const [courses, setCourses] = useState([]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCourses([]);
  };

  function getAllCourses() {
    api
      .get(`course/courses/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCourses(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getByCategoryOrderSize() {
    // console.log(`course/courses/category/${selectedCategory}/${selectedFilter}/${courses.length}`)
    api
      .get(
        `course/courses/category/${selectedCategory}/${selectedFilter}/${courses.length}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setCourses(response.data);
          // console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const renderCards = () => {
    let filterd = [...courses];

    if (search)
      filterd = filterd.filter((course) =>
        course?.title?.toLowerCase().includes(search)
      );

    if (selectedFilter) {
      if (selectedFilter === "asc")
        filterd = filterd.sort((a, b) => a.title.localeCompare(b.title));
      if (selectedFilter === "desc")
        filterd = filterd
          .sort((a, b) => a.title.localeCompare(b.title))
          .reverse();
    }

    return filterd.map((course, index) => <CardLesson key={index} course={course} />);
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      getAllCourses();
    } else {
      getByCategoryOrderSize();
    }
  }, [selectedCategory, selectedFilter]);

  return (
    <>
      <div className="main-section-course">
        <CourseTopBar
          onChangeCategory={handleCategory}
          currentCategory={selectedCategory}
        />
        <Filters
          currentCategory={selectedCategory}
          onChangeFilter={setSelectedFilter}
          onChangeSearch={setSearch}
        />
        {courses.length === 0 ? (
          ""
        ) : (
          <>
            <div className="course-list">{renderCards()}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Course;
