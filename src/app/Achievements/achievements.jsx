'use client';

import { useState, useEffect } from 'react';
import styles from './responsive.module.css'; // Import the responsive CSS

export default function ImageSlider() {
  const images = [
    "assets/images/doppi.jpg",
    "assets/images/congrats.jpg",
    "assets/images/medal.jpg",
    "assets/images/hippost.jpg",
    "assets/images/hall_hippo.jpg",
    "assets/images/lpa2.jpg",
    "assets/images/hippo1.jpg",
    "assets/images/hippo2.jpg",
    "assets/images/hippoflag.jpg",
    "assets/images/lpa_lesson.jpg",
    "assets/images/lpa_all.jpg",
    "assets/images/hippo_all.jpg",
    "/9.jpg",
  ];

  const [imageNumber, setImageNumber] = useState(0);
  const [displayImages, setDisplayImages] = useState([images[0], images[1]]);

  const filterImages = () => {
    const newIndex = imageNumber + 2;
    if (newIndex + 1 < images.length) {
      setDisplayImages([images[newIndex], images[newIndex + 1]]);
      setImageNumber(newIndex);
    }
  };

  const filterPrevious = () => {
    const newIndex = imageNumber - 2;
    if (newIndex >= 0) {
      setDisplayImages([images[newIndex], images[newIndex + 1]]);
      setImageNumber(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = imageNumber + 2;
      if (newIndex + 1 < images.length) {
        setDisplayImages([images[newIndex], images[newIndex + 1]]);
        setImageNumber(newIndex);
      } else {
        // Reset to the start when reaching the end
        setDisplayImages([images[0], images[1]]);
        setImageNumber(0);
      }
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [imageNumber]);

  return (
    <div className="bg-indigo-900 text-white py-8 w-full">
      <div className="text-center mb-4 relative z-10">
        <h2 className={`bg-green-700 text-4xl font-bold tracking-wide rounded-lg uppercase shadow-md max-w-4xl mx-auto ${styles.title}`}>
          Achievements
        </h2>
      </div>

      <div className={"relative w-full flex items-center justify-around " + styles.image_container}>
        {displayImages.map((item, index) => (
          <img
            key={index}
            className={`h-96 mx-2 ${styles.image}`}
            src={item}
            alt={`Slide ${index}`}
          />
        ))}

        <button
          className={`absolute top-1/2 left-4 text-3xl bg-green-600 p-2 rounded-full shadow hover:bg-green-700 disabled:opacity-50 ${styles.button}`}
          onClick={filterPrevious}
          disabled={imageNumber <= 0}
        >
          ⬅️
        </button>
        <button
          className={`absolute top-1/2 right-4 text-3xl bg-green-600 p-2 rounded-full shadow hover:bg-green-700 disabled:opacity-50 ${styles.button}`}
          onClick={filterImages}
          disabled={imageNumber + 2 >= images.length}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
