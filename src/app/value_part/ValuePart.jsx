"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";

export default function WelcomeSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500  w-full rounded-md py-10 px-6">
      <motion.div
        className="text-center w-full md:w-3/4 lg:w-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4770078592564960"
        crossOrigin="anonymous"
      ></Script>
        <h1 className="text-3xl md:text-4xl font-bold  mb-4">
          Welcome to Your Testing Journey!
        </h1>
        <p className="text-lg md:text-xl  mb-6">
          Unlock your potential by testing your skills in <strong>English</strong>, <strong>IT</strong>, <strong>Math</strong>, and <strong>IQ</strong>. Discover your strengths and areas for growth in just a few clicks.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-4 w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href={"/tests"} className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
          Start English Test
        </Link>
        <Link href={"/tests"} className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
          Start IT Test
        </Link>
        <Link href={"/tests"} className="px-6 py-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
          Start Math Test
        </Link>
        <Link href={"/tests"} className="px-6 py-3 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 transition">
          Start IQ Test
        </Link>
      </motion.div>
      <motion.div
        className="w-full mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-sm ">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        </p>
        <p className="text-sm text-gray-400">- Malcolm X</p>
      </motion.div>
    </div>
  );
}
