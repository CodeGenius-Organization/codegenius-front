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
  const [selectFilter, setSelectFilter] = useState("none");

  useEffect(() => {
    setLoading(true);
    tabCoursesMapping[selectedCategory]().then((courses) => {
      setLoading(false);
      setCourses(courses);
    });
  }, [selectedCategory]);

  const handleFilter = (filter) => {
    setSelectFilter(filter);
  };

  const handleSearchFilter = (filter) => {
    setSearch(filter);
  };

  const listCourses = () => {
    let filterd = [...courses];

    if (search)
      filterd = filterd.filter((course) =>
        course?.title?.toLowerCase().includes(search)
      );

    if (selectFilter) {
      if (selectFilter === "asc")
        filterd = filterd.sort((a, b) => a.title.localeCompare(b.title));
      if (selectFilter === "desc")
        filterd = filterd
          .sort((a, b) => a.title.localeCompare(b.title))
          .reverse();
    }

    return filterd.map((course) => <CardLesson course={course} />);
  };

  return (
    <>
      <div className="main-section-course">
        <MyCoursesTopBar
          currentCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
        <Filter
          onChangeFilter={handleFilter}
          currentCategory={selectFilter}
          onChangeSearch={handleSearchFilter}
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
