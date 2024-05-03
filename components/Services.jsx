import React from "react";
import NavLink from "next/link";
import ReactTyped from "react-typed";

const Services = () => {
  return (
    <>
      <section class="text-gray-600 body-fon bg-green-400">
        <div class="container px-5 py-24 mx-auto ">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              <ReactTyped strings={["Our services"]} typeSpeed={100} loop />
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              We connect you with the doctors all around the world. Signup in
              our website and get access to Thoudsands of doctors available all
              over the world.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center bg-red-300 rounded-3xl m-2">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
             Specialized Doctors
                </h2>
                <p class="leading-relaxed text-base">
                  
             Discover specialized care with our expert team in Psychology, Neurology, Ophthalmology, Cardiology, and Dermatology. 
             From mental health to skin concerns, our skilled professionals prioritize your well-being.
              Benefit from personalized services addressing your unique healthcare needs.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
               
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  > */}
                    {/* <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center bg-green-300 rounded-3xl m-2">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                 Expert Guidance through Video Interactions
                </h2>
                <p class="leading-relaxed text-base">
               Ease into virtual healthcare! Our platform offers hassle-free video consultations for mental health, neurology, eye, heart, and skin issues. 
               Prioritizing your well-being, we bring expert advice to your space through seamless video interactions.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
          
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >

                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center bg-orange-300 rounded-3xl m-2">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Unique Chatbot
                </h2>
                <p class="leading-relaxed text-base">
              Experience the power of precision in our {"application's"} chat feature! 
              Enjoy swift responses with minimal delay and optimal latency, ensuring you receive direct and to-the-point answers. 
              Our chat capability guarantees a seamless and efficient interaction for a more engaging experience.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  {/* Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
                </a>
              </div>
            </div>
          </div>
          <NavLink href="signin">
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Signup now
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Services;