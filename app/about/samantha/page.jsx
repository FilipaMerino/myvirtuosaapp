"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import quotes1 from "../../../public/images/quotes1.svg";
import quotes2 from "../../../public/images/quotes2.svg";
import degree from "../../../public/images/degree.svg";
import experience from "../../../public/images/experience.svg";
import samantha from "../../../public/images/samantha.png"


const images = [samantha];

const Samantha = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="lg:h-[30rem] flex flex-col lg:flex lg:flex-row lg:items-center lg:mx-20">
        {/* Louisa */}
        <div className="flex justify-center my-10">
          <div className="w-80 rounded-box drop-shadow-lg">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay
              interval={10000}
              infiniteLoop
              dynamicHeight
              selectedItem={currentSlide}
              onSwipeMove>
              {images.map((image, index) => (
                <div key={index}>
                  <Image src={image} className="rounded-md" alt="Louisa" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 lg:items-start lg:ml-10">
          <h1 className="text-3xl lg:text-5xl lg:mb-2">Samantha Hovar</h1>
          <p className="text-sm">Virtual Assistant</p>
          <hr className="horizontalLineTeam "></hr>

          <p className="text-md mx-10 lg:mx-0 mt-2 lg:my-2 text-justify">
            Sam is a seasoned freelance virtual assistant with a strong
            background in operations management. She specializes in providing
            efficient administrative support, optimizing workflows, and
            delivering top-notch results. With a passion for helping businesses
            thrive, Sam is dedicated to streamlining tasks and enabling their
            clients to focus on what matters most. Sam is a mom of two kids and
            one crazy dog. In her free time she is either reading a book,
            playing a game, or working on a craft project.
          </p>
        </div>

        {/* <hr className="verticalLineTeam ml-10 hidden lg:block"></hr> */}

        {/* <div className="p-10 flex flex-col items-center justify-center ">
          <div className="flex lg:flex-col justify-center items-center lg:mb-5">
            <Image
              src={degree}
              className="w-[20%] lg:w-[30%] mr-5 mb-3"
              alt="degree"
            />
            <p className="text-sm text-center">
              Degree in Business Administration
            </p>
          </div>
          <div className="flex lg:flex-col justify-center items-center mb-5">
            <Image
              src={experience}
              className="w-[20%] lg:w-[30%] mr-5 mb-3"
              alt="experience"
            />
            <p className="text-sm text-center">Over 15 Years of Experience</p>
          </div>
        </div> */}
      </div>

      <div className="bg-white lg:relative ">
        <div className="lg:mx-20 lg:h-[20rem]  flex items-center  ">
          <div className="absolute top-10 left-40 hidden lg:block">
            <Image src={quotes1} className="w-32" alt="quotes" />
          </div>
          <h1 className="text-xl lg:text-3xl mb-3 lg:mb-5 italic text-center mx-10 lg:mx-64">
            &quot;I&apos;m passionate about supporting leaders to focus on their
            vision while knowing their administrative needs are taken care of.
            &quot;
          </h1>
          <div className="absolute bottom-10 right-40 hidden lg:block">
            <Image src={quotes2} className="w-32" alt="quotes" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Samantha;
