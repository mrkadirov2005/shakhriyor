"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import coursesData from "./ctg.json";
import subCourses from "./courses.json";
import { Button } from "@mui/material";
import General_test from "../test_scopes/global";

const CourseComponent = () => {
  const [searchOption, setSearchOption] = useState();
  const [searchId, setSearchId] = useState();
  const [courses, setCourses] = useState(coursesData.kurslar);
  const [course, setCourse] = useState();
 const [currentTest,setCurrentTest]=useState()
  const filterCourses = (e) => {
    const selectedCourses = coursesData.kurslar.filter(
      (item) => item.nomi === e.target.value
    );
    setCourses(e.target.value === " " ? coursesData.kurslar : selectedCourses);
  };

  const handleSelectCourse = (course) => {
    setSearchOption(course);
    const id = course.id;
    const filteredData = subCourses[id];
    setSearchId(Object.values(filteredData));
  };

  const handleLeaveRequest = () => {
    document.querySelector("#form_container").classList.toggle("hidden");
    setSearchOption("");
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="flex flex-col w-full items-center justify-start bg-gradient-to-br from-blue-950 to-purple-900 min-h-screen p-5"
    >
      <motion.h1 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-5"
      >
        Testlar
      </motion.h1>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-black mb-5"
      >
        <select
          onChange={(e) => filterCourses(e)}
          className="w-60 p-2 border border-gray-300 bg-fuchsia-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value=" ">--testni tanlang--</option>
          {coursesData.kurslar.map((course, index) => (
            <option
              className="m-2 rounded-md bg-orange-700"
              key={course.nomi}
              value={course.nomi}
            >
              {course.nomi}
            </option>
          ))}
        </select>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            onClick={() => handleSelectCourse(course)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 rounded-lg p-5 bg-gradient-to-br from-fuchsia-700 to-blue-800 text-white bg-red-700 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{course.nomi}</h2>
            <p className=" mb-1">
              <strong>Ta'rif:</strong> {course.tarif}
            </p>
            <p className=" mb-1">
              <strong>Darajalar:</strong> {course.darajalar.join(", ")}
            </p>
            <p className=" mb-1">
              <strong>Davomiyligi:</strong> {course.davomiyligi}
            </p>
            <p className="">
              <strong>Xususiyatlar:</strong> {course.xususiyatlar.join(", ")}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="z-50"
      >
        {searchOption ? (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ duration: 0.5 }}
            className="bg-white pt-7 rounded-sm pl-4 pr-4 z-50 overflow-y-auto right-0 top-0 w-full max-w-md h-screen fixed"
          >
            <Button
              variant="contained"
              color="warning"
              onClick={() => setSearchOption("")}
            >
              X
            </Button>
            <h2 className="text-2xl text-gray-900 font-semibold mb-3">
              {searchOption.tarif}
            </h2>
            <p className="text-lg font-medium mb-2 text-orange-800">
              {searchOption.darajalar.join(", ")}
            </p>
            <p className="mb-3 text-sm text-gray-700">
              {searchOption.xususiyatlar.join(", ")}
            </p>
            <p className="text-gray-600 mb-3">
              <strong>Kurs davomiyligi:</strong> {searchOption.davomiyligi}
            </p>
            {searchId ? (
              <div className="courses text-black grid grid-cols-2 gap-4">
                {searchId.map((item,index) => (
                  <Button
                    onClick={() => {setCourse(item),setCurrentTest(`${searchOption.id}/${item.level}`)}}
                    className="w-full"
                    color="secondary"
                    variant="contained"
                    key={index}
                  >
                    {item.level}
                  </Button>
                ))}
              </div>
            ) : (
              "not provided"
            )}
            <div className="course_data_part">
              {course ? (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  className="bg-white pt-7 rounded-sm pl-4 pr-4"
                >
                  <h2 className="text-2xl text-gray-900 font-semibold mb-3">
                    {course.level.toUpperCase()}
                  </h2>
                  <p className="text-lg font-medium mb-2 text-orange-800">
                    {course.target}
                  </p>
                  <p className="mb-3 text-sm text-gray-700">
                    {course.description}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Test davomiyligi:</strong> 10 daqiqa
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Test topshirish narxi:</strong> 10 ming so'm
                  </p>
                  {course.certificate
                    .split("/")
                    .map((item) => (
                      <p key={item} className="font-semibold rounded-md text-white bg-orange-700 p-2 m-2">
                        {item}
                      </p>
                    ))}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleLeaveRequest()}
                    
                  >
                    Aloqaga Chiqish
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleLeaveRequest()}
                    
                  >
                    Testni boshlash
                  </Button>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    {currentTest?<General_test toggler={setCurrentTest} target={{currentTest,setCurrentTest}}/>:""}  
    </motion.section>
  );
};

export default CourseComponent;
