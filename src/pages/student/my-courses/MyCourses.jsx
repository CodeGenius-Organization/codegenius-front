import React, { useState, useEffect } from "react";

import "./MyCourses.css";

import Filter from "../../../shared/components/filter/Filter";
import CardLesson from "../components/card-lesson/CardLesson";
import MyCoursesTopBar from "./components/my-courses-top-bar/MyCoursesTopBar";
import Loading from "../../../shared/components/loading/Loading";

import {
  _mockAllCourses,
  _mockFavoriteCourses,
  _mockFinishedCourses,
  _mockRunningCourses,
} from "../../../_mocks/coursesMock";

const tabCoursesMapping = {
  Todos: _mockAllCourses,
  Favoritos: _mockFavoriteCourses,
  "Em andamento": _mockRunningCourses,
  Concluído: _mockFinishedCourses,
};

function MyCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [selectedFilter, setSelectedFilter] = useState("none");

  useEffect(() => {
    setLoading(true);
    tabCoursesMapping[selectedCategory]().then((courses) => {
      setLoading(false);
      setCourses(courses);
    });
  }, [selectedCategory]);

  const listCourses = () => {
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

    return filterd.map((course) => <CardLesson course={course} />);
  };

  return (
    <>
      <div className="main_section">
        <MyCoursesTopBar
          currentCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
        <Filter
          onChangeFilter={setSelectedFilter}
          currentCategory={selectedFilter}
          onChangeSearch={setSearch}
        />
        {loading ? (
          <div className="loading-container">
            <Loading backgroundColor={"#121526"} />
          </div>
        ) : (
          <div className="course_list">{listCourses()}</div>
        )}
      </div>
    </>
  );
}

export default MyCourses;
