"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-t text-white from-blue-600 to-fuchsia-700 p-16 rounded-md shadow-lg">
      <motion.div
        className="text-center w-full md:w-3/4 lg:w-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold  mb-4">
          About Us - Coder Kid
        </h1>
        <p className="text-lg  mb-6">
          Welcome to <span className="font-bold">Coder Kid</span>! We are 
          dedicated to empowering young minds through technology and education. 
          Our mission is to provide a fun, interactive, and engaging platform 
          where learners can test and improve their skills in <strong>IT</strong>, 
          <strong>Math</strong>, <strong>IQ</strong>, and <strong>English</strong>.
        </p>
      </motion.div>
      <motion.div
        className="w-full flex items-center justify-between flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img
          src="/shakhriyor/logo.jpg" // Replace with your logo path
          alt="Coder Kid Logo"
          className="  mb-6 rounded-full w-56 h-w-56"
        />
        <p className="text-gray-200 text-md md:text-lg">
          "At Coder Kid, we believe in unlocking the potential of every learner. 
          Whether you're mastering a new skill or refining what you already know, 
          we're here to support your journey."
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Join the Coder Kid family and take the first step toward a brighter future!
        </p>
      </motion.div>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
