import Image from "next/image";
import followerAvatar from "../assets/followers-avatar.jpg";
import student from "../assets/student.jpg";
import stud from "../assets/stud.jpg";
import job from "../assets/job.jpg";
import developer from "../assets/developer.jpg";
import Link from "next/link";

import gfg from "../assets/work/gfglogo.png";
import guvi from "../assets/work/guvi.png";
import tp from "../assets/work/tplogo.jpg";
import cm from "../assets/work/cmlogo.jpeg";
import founder from "../assets/founder.jpeg";

import dynamic from "next/dynamic";
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768; // Adjust the breakpoint as needed

export default function MainComponent() {
  return (
    <div>
      <main>
        <div
          className="mt-[50px] py-[10px] px-[10px] md:py-[30px] md:px-[50px] lg:py-[10px] lg:px-[100px]"
          id="bg-hero"
        >
          <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-12 xl:gap-12 lg:py-16 lg:flex lg:flex-row">
            <div class="mr-auto place-self-center">
              <h1 className="text-green-600 max-w-2xl mb-4 text-center md:text-left lg:text-left text-[50px] tracking-tight leading-none md:text-6xl xl:text-8xl">
                Welcome to{" "}
                <span className="text-green-800 font-bold">OneDevPlace</span>
              </h1>
              

              <div class="max-w-2xl my-8 lg:mb-8 text-2xl flex flex-wrap text-gray-600">
                Find all programs for<span className="flex flex-wrap gap-4 text-center md:text-none lg:text-none items-center py-4 mb-2">
                <span className="py-2 px-4 rounded-md bg-[#E9F9EE] text-[#299764] ">
                  <p className="text-2xl"> Students,</p>
                </span>
                <span className="py-2 px-4 rounded-md bg-[#EDF6FF] text-[#0081F1] ">
                  <p className="text-2xl">Developers</p>
                </span>
                <span className="py-2 px-4 rounded-md bg-[#FFF1E7] text-[#ED5F00]">
                  <p className="text-2xl">Womens </p>
                </span>
                <p className="text-2xl">& more opportunities at one place 🚀</p>
              </span> 
              </div>
              <div className="flex justify-center md:justify-start lg:justify-start">
                <a
                  href="#explore"
                  class="w-full md:w-1/2 lg:w-1/2 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
                >
                  <span className="text-white text-2xl">Explore</span>
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="lg:mt-0 lg:flex max-w-3xl lg:w-[35em] xl:w-[50em]">
              <Image
                src={student}
                alt="hero"
                className="mt-10 md:mt-10 lg:mt-0"
                id="animate-topdown"
                priority={true}
              />
            </div>
          </div>
        </div>
        {/* Our offerings */}
        <div className="py-12 px-5 text-center bg-green-900">
          <h1 className="text-2xl lg:text-5xl md:text-3xl text-white text-center font-bold py-8">
            Our Offerings
          </h1>
        </div>
        <div className="py-12 px-5 text-center" id="explore">
          
          <div className="flex container flex-col mx-auto xl:gap-[8em] lg:gap-[8em] md:gap-[6em] gap-[2em]">
            <div className="flex flex-col md:flex-row lg:flex-row mx-auto items-center gap-12">
              <div className="bg-[#E9F9EE] shadow-xl p-4 rounded-md max-w-lg items-center justify-center flex flex-col gap-4">
                <h2 className="text-3xl text-[#299764]  font-bold">
                  Student Opportunities
                </h2>
                <p className="text-[15px] md:text-lg lg:text-lg">
                  There is no substitute for hands-on experience, but for most
                  students, real-world tools can be cost prohibitive. Here you
                  can find all Student programs like, Student Ambassadors
                  programs, Hackathons, Coding Competitions, etc.
                </p>
              </div>
              <Image src={stud} alt="hero-1" width={350} height={350} priority={true} />
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row items-center mx-auto gap-12">
              <Image src={developer} alt="hero-1" width={450} height={450} />
              <div className="bg-[#EDF6FF]  shadow-xl p-4 rounded-md max-w-lg items-center justify-center flex flex-col gap-4">
                <h2 className="text-3xl text-[#0081F1] font-bold">
                  Developer Opportunities
                </h2>
                <p className="text-[15px] md:text-lg lg:text-lg">
                  Are you a Developer? or want to start a career in Development,
                  then this is the right place. You can find all Developer
                  opportunities like, Coding Sites, Coding Competitions,
                  Developer jobs, etc and obviously all the available student
                  opportunities also.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center mx-auto gap-12">
              <div className="bg-[#FFF1E7]  shadow-xl p-4 rounded-md max-w-lg items-center justify-center flex flex-col gap-4">
                <h2 className="text-3xl text-[#ED5F00] font-bold">Internships & more</h2>
                <p className="text-[15px] md:text-lg lg:text-lg">
                  OneDevPlace can help you find good Internships Websites,
                  Internships/Externships for students and developers. This site
                  consists of a list of good Internships, Research Internships,
                  Externships opportunities.
                </p>
              </div>
              <Image src={job} alt="hero-1" width={250} height={250} />
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r  from-green-600 to-[#fff]"></div>
        {/* From the founder section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-24 text-center">
          👋 From The <span className="text-green-800">Founder</span>
        </h2>
        <div className="py-12 px-5">
          <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-12">
            <div className="lg:w-1/4">
              <Image
                src={founder}
                alt="Founder Image"
                width={600}
                height={800}
                className="rounded-lg"
                priority={true}
              />
            </div>
            <div className="lg:w-1/2 lg:mt-10">
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
                Tarun Singh
              </h2>
              <p className="text-[15px] md:text-lg lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas eros euismod, venenatis nunc at, malesuada massa.
                Integer non arcu eget turpis mattis tristique. Sed ac
                consectetur dui. Fusce id velit a nunc laoreet sagittis. Donec
                porttitor, nisi ac fringilla convallis, turpis dui aliquam
                ipsum, sed rutrum justo lorem sit amet nisi. Praesent eu finibus
                lectus. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Donec pharetra mi a eros
                interdum, at posuere velit tincidunt. In vitae tellus odio.
                Suspendisse potenti. Nulla facilisi. Phasellus consectetur orci
                a felis accumsan, id sollicitudin tellus tempus.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-5">
                <p className="text-md md:text-lg lg:text-lg text-green-800">
                  Ex Technical Writer-{" "}
                </p>
                <Image
                  src={gfg}
                  alt="Work Experience Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                  priority={true}
                />
                <Image
                  src={guvi}
                  alt="Work Experience Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                  priority={true}
                />
                <Image
                  src={tp}
                  alt="Work Experience Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                  priority={true}
                />
                <Image
                  src={cm}
                  alt="Work Experience Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* follower section */}
        <hr className="text-green-800 w-2/3 mx-auto" />
        <div className="flex flex-col md:flex-row lg:flex-row p-12 justify-center mx-auto gap-1 md:gap-12 lg:gap-12">
          {/* follower image */}
          {!isSmallScreen && (
            <DynamicImage
              src={followerAvatar}
              alt="avatar"
              height={100}
              width={130}
              className="md:w-[12em] md:h-[22em] lg:w-[12em] lg:h-[22em]"
              priority={true}
            />
          )}
          <div className="flex flex-col p-2 items-center gap-5">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-green-900">
              <b>Join our community</b>
            </h1>
            <p className="text-md md:text-lg lg:text-xl text-green-800">
              So, why wait more! Join our biggest community of students ,
              developers, writers, and more.
            </p>
            <div className="flex flex-row lg:flex-row md:flex-row p-2 items-center justify center gap-5">
              <Link
                href="https://www.linkedin.com/company/onedevplace/"
                className="flex flex-row bg-green-200 border border-green-500 drop-shadow-xl w-[4em] h-[4em] lg:w-[6em] lg:h-[6em] hover:cursor-pointer hover:scale-125 transition-transform duration-300 ease-in rounded-2xl items-center justify-center p-3"
              >
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#0076b2"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </Link>
              <Link
                href=""
                className="flex flex-row bg-green-200 border border-green-500 drop-shadow-xl w-[4em] h-[4em] lg:w-[6em] lg:h-[6em] hover:cursor-pointer hover:scale-125 transition-transform duration-300 ease-in rounded-2xl items-center justify-center p-3"
              >
                <svg viewBox="0 0 128 128">
                  <rect
                    fill="#3d5a98"
                    x="4.83"
                    y="4.83"
                    width="118.35"
                    height="118.35"
                    rx="6.53"
                    ry="6.53"
                  ></rect>
                  <path
                    fill="#fff"
                    d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://twitter.com/OneDevPlace"
                className="flex flex-row bg-green-200 border border-green-500 drop-shadow-xl w-[4em] h-[4em] lg:w-[6em] lg:h-[6em] hover:cursor-pointer hover:scale-125 transition-transform duration-300 ease-in rounded-2xl items-center justify-center p-3"
              >
                <svg viewBox="0 0 128 128">
                  <path
                    d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
                    fill="#1da1f2"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://github.com/tarunsinghofficial/"
                className="flex flex-row bg-green-200 border border-green-500 drop-shadow-xl w-[4em] h-[4em] lg:w-[6em] lg:h-[6em] hover:cursor-pointer hover:scale-125 transition-transform duration-300 ease-in rounded-2xl items-center justify-center p-3"
              >
                <svg viewBox="0 0 128 128">
                  <g fill="#181616">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
