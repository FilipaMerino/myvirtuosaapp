"use client";

import React, { useState } from "react";
import {
  useTestimonials,
  useDeleteTestimonial,
} from "@/app/hooks/testimonials";
import Spinner from "../Spinner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsTrash3Fill } from "react-icons/bs";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/lib/firebase";
import CreateTestimonial from "./CreateTestimonial";
import Image from "next/image";

const Testimonials = () => {
  const [user, loading, error] = useAuthState(auth);
  const { deleteTestimonial, isLoading: deleteTestimonialLoading } =
    useDeleteTestimonial();
  const { testimonials, isLoading: testimonialsIsLoading } = useTestimonials();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (testimonialsIsLoading) return <Spinner />;

  const handleDeleteClick = (id) => {
    deleteTestimonial(id);
  };
  const handlePrevious = () => {
    if (currentSlide === 0) {
      setCurrentSlide(testimonials.length - 1); // Go to the last slide
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide === testimonials.length - 1) {
      setCurrentSlide(0); // Go to the first slide
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[30rem] p-10 lg:mx-20">
      {/* Testimonials Header */}
      <div className="flex-none lg:w-2/5 lg:mr-20 flex flex-col items-center lg:items-start my-10 p-5 lg:my-0 lx:p-0">
        <h1 className="text-3xl lg:text-5xl mb-3">Testimonials</h1>
        <hr className="horizontalLineWebDev my-5 hidden lg:block"></hr>
        <p className=" mb-3 text-center lg:text-start">
          Our customers are at the heart of everything we do. Their satisfaction
          isn&rsquo;t just a goal, it&rsquo;s our measure of success.
          Here&rsquo;s what some of our valued customers have to say about their
          experiences with us.
        </p>
        {user && <CreateTestimonial />}
      </div>

      {/* Carousel */}
      <div className="flex-none md:w-[55%] flex flex-col ">
        <div className="carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item relative w-full flex flex-col items-center ${
                index === currentSlide ? "visible" : "hidden"
              }`}>
              <div className="card  p-10 ">
                {/* <Image
                  src={testimonial.img}
                  alt="testimonial"
                  width={200}
                  height={200}
                /> */}

                <div className="card-body flex flex-col items-center w-[25rem]">
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p className="text-xs">{testimonial.companyName}</p>
                  <p className="text-center">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>





              <div className="button-container">
                <button
                  onClick={handlePrevious}
                  className="btn btn-circle bg-[#f2f2f2] text-[#333333] hover:bg-[#e0e0e0] border-none w-[20px] md:w-[50px] absolute top-1/2   left-0">
                  ❮
                </button>

                <button
                  onClick={handleNext}
                  className="btn btn-circle bg-[#f2f2f2] text-[#333333] hover:bg-[#e0e0e0] border-none w-[20px] md:w-[50px] absolute top-1/2   right-0">
                  ❯
                </button>
              </div>
              {user && (
                <button
                  className="mt-10"
                  onClick={() => handleDeleteClick(testimonial.id)}>
                  <BsTrash3Fill className="hover:text-[#fb653e] text-xs" />
                </button>
              )}
            </div>

            /* <div className="flex justify-center">

                      <img src={testimonial.img} alt="testimonial" className="w-24 lg:w-32" />
                  </div> */
            /*
                  <div className="flex flex-col items-center">
                      DATA
                      <h4 className="text-xl md:text-2xl font-semibold mb-1">
                      {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm italic mb-5">
                      {testimonial.companyName}
                      </p>

                      <div className="flex">
                      <button
                          onClick={handlePrevious}
                          className="btn btn-circle  bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none w-[20px] md:w-[50px]">
                          ❮
                      </button>

                      <div>
                          <p className="text-sm italic mx-10 lg:mx-20 text-center">
                          {testimonial.testimonial}
                          </p>
                      </div>

                      <button
                          onClick={handleNext}
                          className="btn btn-circle bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none w-[20px] md:w-[50px]">
                          ❯
                      </button>
                      </div>

                      {user && (
                      <button
                          className="mt-10"
                          onClick={() => handleDeleteClick(testimonial.id)}>
                          <BsTrash3Fill className="hover:text-[#fb653e] text-xs" />
                      </button>
                      )}
                  </div> */

            /* </div> */
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
