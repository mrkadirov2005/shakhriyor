import React from 'react';

export default function Value_facts_part() {
  return (
    <section 
      className="flex bg-opacity-30 flex-col w-full items-center justify-between p-10 bg-blue-800" 
    >
      <h1 className="w-full text-center text-4xl pb-16">
        <span className="text-white font-bold">TEMURBEK SCHOOL</span> 
        <span className="text-white"> haqida </span>
        <span className="text-yellow-400 font-bold">faktlar</span>
      </h1>
      <ul className="flex flex-wrap items-center justify-between w-full">
        <div className="w-full sm:w-1/2 md:w-1/6 bg-opacity-50 bg-purple-700 rounded-md flex flex-col items-center justify-center mb-8 sm:mb-4">
          <li className="w-4/5 bg-opacity-30 bg-gray-800 h-28 sm:h-24 text-3xl text-white rounded-lg flex items-center justify-center">
            B1+
          </li>
          <button className="w-1/4 sm:w-1/6 pt-5 pb-5 text-3xl sm:text-2xl text-white">150+</button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 bg-opacity-50 bg-purple-700 rounded-md flex flex-col items-center justify-center mb-8 sm:mb-4">
          <li className="w-4/5 bg-opacity-30 bg-gray-800 h-28 sm:h-24 text-3xl text-white rounded-lg flex items-center justify-center">
            B2+
          </li>
          <button className="w-1/4 sm:w-1/6 pt-5 pb-5 text-3xl sm:text-2xl text-white">100+</button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 bg-opacity-50 bg-purple-700 rounded-md flex flex-col items-center justify-center mb-8 sm:mb-4">
          <li className="w-4/5 bg-opacity-30 bg-gray-800 h-28 sm:h-24 text-3xl text-white rounded-lg flex items-center justify-center">
            C1
          </li>
          <button className="w-1/4 sm:w-1/6 pt-5 pb-5 text-3xl sm:text-2xl text-white">20+</button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 bg-opacity-50 bg-purple-700 rounded-md flex flex-col items-center justify-center mb-8 sm:mb-4">
          <li className="w-4/5 bg-opacity-30 bg-gray-800 h-28 sm:h-24 text-3xl text-white rounded-lg flex items-center justify-center">
            IELTS 6+
          </li>
          <button className="w-1/4 sm:w-1/6 pt-5 pb-5 text-3xl sm:text-2xl text-white">30+</button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 bg-opacity-50 bg-purple-700 rounded-md flex flex-col items-center justify-center mb-8 sm:mb-4">
          <li className="w-4/5 bg-opacity-30 bg-gray-800 h-28 sm:h-24 text-3xl text-white rounded-lg flex items-center justify-center">
            IELTS 7+
          </li>
          <button className="w-1/4 sm:w-1/6 pt-5 pb-5 text-3xl sm:text-2xl text-white">15+</button>
        </div>
      </ul>
    </section>
  );
}
