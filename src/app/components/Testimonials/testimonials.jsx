"use client";
import React, { useState } from "react";
import testimonials from "../../data/testimonials.json";
// TODO responsive
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 2;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length
        ? 0
        : prevIndex + testimonialsPerPage
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerPage < 0
        ? testimonials.length - testimonialsPerPage
        : prevIndex - testimonialsPerPage
    );
  };

  return (
    <section className="my-16 px-4">
      <h2 className="w-auto sm:w-3/4 md:w-1/2 ml-auto pt-2 pb-2 pl-5 pr-5 rounded-md mr-auto text-2xl sm:text-3xl md:text-4xl bg-pink-700 font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Ba'zi o'quvchilarimizning fikrlari
      </h2>
      <div className="relative">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 transition-all duration-500 ease-in-out">
          {testimonials
            .slice(currentIndex, currentIndex + testimonialsPerPage)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-2/3 md:w-1/3 px-4 flex-shrink-0"
              >
                <div className="bg-gradient-to-r dark:from-blue-800 dark:via-indigo-900 dark:to-blue-950 from-blue-700 via-indigo-800 to-blue-900 p-6 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
                  
                  <h3 className="font-semibold text-lg sm:text-xl text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-white italic text-sm sm:text-base my-2 bg-">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg transition duration-300 hover:bg-green-600 active:bg-green-900 focus:outline-none"
          onClick={prevTestimonial}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg transition duration-300 hover:bg-green-600 active:bg-green-900 focus:outline-none"
          onClick={nextTestimonial}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
