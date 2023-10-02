"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ValueCard from "../components/about/ValueCard";
import Testimonials from "../components/testimonials/Testimonials"
import subscribe from "../../public/images/subscribe.jpeg";
import team from "../../public/images/team.jpeg";
import filipa from "../../public/images/filipa.jpeg";
import LouisaPic from "../../public/images/LouisaPic.jpeg";
import samantha from "../../public/images/samantha.png";


import CarouselTestimonial from "../components/testimonials/CarouselTestimonial";
import UncontrolledExample from "../components/testimonials/CarouselTestimonial";
import ImageCarousel from "../components/testimonials/CarouselTestimonial";

const AboutPage = () => {
  const values = [
    {
      title: "Honesty",
      content:
        "We believe that trust is the foundation of a successful partnership. Without honesty there is no trust which is why honesty is our #1 value. We strive to earn and maintain the confidence of our clients and are dedicated to providing accurate, objective, and unbiased advice to our clients.",
    },
    {
      title: "Integrity",
      content:
        "We are committed to doing all things in an ethical, sustainable, and respectful manner. We ensure that our actions are always guided by a strong moral compass. Our decisions are guided by our principles and we stand up for what is right and ethical.",
    },
    {
      title: "Respect",
      content:
        "We treat all clients and team members with dignity, fairness and respect. We provide an inclusive environment that values diversity and promotes equal opportunity.",
    },

    {
      title: "Humility",
      content:
        "We treat all clients and team members with dignity, fairness and respect. We provide an inclusive environment that values diversity and promotes equal opportunity.",
    },
    {
      title: "Collaboration",
      content: "We believe that collaboration is the key to unlocking creativity and success. We are committed to creating a culture of teamwork, open communication, and mutual support." ,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((currentSlide - 1 + values.length) % values.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % values.length);
  };

  return (
    <div className="">
      {/* THIS IS THE TITLE AND TEXT OF ABOUT SESSION */}

      <div className="flex items-center lg:h-[30rem] p-10">
        <div className="hidden lg:block  flex-col justify-center items-start lg:w-[20rem] lg:ml-20">



          <Link href="#aboutUs">
          <p className="font-semibold	lg:mb-1">About Us.</p>
          </Link>

          <Link href="#values">
            <p className="font-semibold	lg:mb-1">Our Values.</p>
          </Link>


          <Link href="#team">
          <p className="font-semibold	">Team.</p>
          </Link>

        </div>

        <div className=" p-10 lg:h-[20rem] flex flex-col justify-center mx-5 lg:mx-20 lg:p-5" id="aboutUs">
          <div className="flex mb-2 lg:mb-10">
            <h1 className="text-3xl lg:text-5xl">About</h1>
            <h1 className="text-3xl lg:text-5xl text-[#fb653e] ml-3">Us.</h1>
          </div>

          <hr className="horizontalLineCard block  lg:hidden my-5"></hr>

          <p className="mb-5">
            At Admin Virtuosa, our mission is to serve as a{" "}
            <strong>support system</strong> for small business owners and
            entrepreneurs to fulfill their objectives while advocating for a{" "}
            <strong>balanced</strong> approach to work and life. We are proud to
            offer exceptional personalized services to help prevent burnout and
            enhance the mental health and well-being of our clients.
          </p>

          <p>
            Through understanding and collaboration, we work to create custom
            business plans for our clients that take into consideration their
            individual needs and goals. By combining our passion to serve with
            our problem-solving skills, we help to build a process that ensures
            our clients reach their personal and professional goals. We strive
            to create a genuine partnership built on trust, respect and a shared
            vision for growth and opportunity.
          </p>
        </div>
      </div>

      {/* THIS IS THE BANNER FROM THE ABOUT SESSION */}

      <div className="flex flex-col items-center justify-center h-[30rem] bg-[#f2f2ef5e]">
        <div className="flex justify-center mb-5">
          <hr className="horizontalLineCard"></hr>
        </div>

        <div className="flex flex-col   text-[#333333] text-center mx-4 p-5 lg:mx-[10rem]">
          <h1 className="text-lg lg:text-3xl mb-3 lg:mb-5 italic">
          &quot;Success is the ability to live your life the way you want to live
            it, doing what you most enjoy, surrounded by people who you admire
            and respect.&quot;
          </h1>
          <p className="text-sm lg:text-lg">Brian Tracy</p>
        </div>
      </div>

      {/* HERE IS THE VALUES */}

      <div className="flex flex-col lg:flex-row lg:h-[30rem] md:mx-20 justify-around p-10" id="values">
        <div className="flex items-center justify-center lg:mt-10">
          <h1 className="text-3xl lg:text-5xl">Our</h1>
          <h1 className="text-3xl lg:text-5xl ml-2 text-[#fb653e]">Values.</h1>
        </div>

        <div className="flex justify-center mb-10 mt-5">
          <hr className="horizontalLineCard block  lg:hidden"></hr>
        </div>
        <div className="carousel w-[100%] lg:w-[60%] flex">
          <div className="carousel-item relative w-full">
            <ValueCard
              title={values[currentSlide].title}
              content={values[currentSlide].content}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
              <button
                onClick={handlePrevious}
                className="btn btn-circle bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none w-[20px] md:w-[50px]">
                ❮
              </button>
              <button
                onClick={handleNext}
                className="btn btn-circle bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none w-[20px] md:w-[50px]">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* {/* THIS IS THE TEAM SESSION */}

      <div className="bg-[#f2f2ef5e] flex items-center my-auto p-5" id="team">
        <div className="relative  flex-col items-start w-[35%] justify-center lg:h-[40rem] mx-5 lg:mx-20 hidden lg:flex lg:mb-20">
          <div className="relative z-10 bottom-3 left-40 transform -translate-y-16 group overflow-hidden">
            <Image src={subscribe} className="w-64 rounded-md drop-shadow-lg z-0" alt="team" />
          </div>

          <div className="absolute top-80 z-10 group overflow-hidden">
            <Image className="w-64 rounded-md drop-shadow-md z-0" src={team} alt="team" />
          </div>
        </div>

        <div className="lg:mr-20 lg:w-[50%] lg:p-5 w-full overflow-hidden p-10">
          <div className="flex justify-center lg:justify-start items-start lg:mb-5">
            <h1 className="text-3xl lg:text-5xl">Our</h1>
            <h1 className="text-3xl lg:text-5xl text-[#fb653e] lg:ml-3 ml-2">
              Team.
            </h1>
          </div>

          <div className=" text-center lg:text-start mt-3 lg:mt-0  p-2flex flex-col items-center lg:items-start lg:p-0">
            <p className="">
              We are a group of dedicated professionals, each with unique skills
              and experiences. Together, we work to deliver top-notch services
              that make a real difference. Our shared passion for helping
              businesses grow is what unites us. We&apos;re here to support you and
              your vision.
            </p>
          </div>

          <div className="my-10 flex justify-around lg:justify-start lg:mx-10">



            <div className="avatar  flex flex-col items-center ">
              <div className="w-24 lg:w-32 rounded mb-3 ">
                <Link href="./about/louisa">
                  <Image
                    src={LouisaPic}
                    className="transform hover:scale-105 transition-transform border mb-2"
                    alt="team"/>
                  {/* The semi-transparent overlay */}

                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-center font-semibold">Louisa Thiessen</p>
                <p className="text-xs text-center">Founder & OBM</p>
              </div>
            </div>

            <div className="avatar  ml-5 flex flex-col items-center">
              <div className="w-24 lg:w-32 rounded mb-3">
                <Link href="./about/filipa">
                  <Image
                    src={filipa}
                    className="transform hover:scale-105 transition-transform"
                  alt="team"/>
                  {/* The semi-transparent overlay */}
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-center font-semibold">Filipa Merino</p>
                <p className="text-xs text-center">Web Developer</p>
              </div>
            </div>

            <div className="avatar  ml-5 flex flex-col items-center">
              <div className="w-24 lg:w-32 rounded mb-3">
                <Link href="./about/samantha">
                  <Image
                    src={samantha}
                    className="transform hover:scale-105 transition-transform"
                  alt="team"/>
                  {/* The semi-transparent overlay */}
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-center font-semibold">Samantha Hovar</p>
                <p className="text-xs text-center">Virtual Assistant</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TESTIMONIALS SESSION */}

      <div>
        <Testimonials/>

        {/* <ImageCarousel/> */}
      </div>
    </div>
  );
};

export default AboutPage;
