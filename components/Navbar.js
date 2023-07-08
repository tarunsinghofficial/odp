import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from "./Dropdown";
import logo from '../assets/logo.png'
import Image from "next/image";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>OneDevPlace</title>
        <meta
          name="description"
          content="Find student programs, developers programs, coding events, swags, et. all at one place."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-none backdrop-blur-md shadow fixed top-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" className="flex flex-row items-center">
                <Image src={logo} alt="logo" width={40} height={40} />
                <h2 className="text-2xl text-green-800 font-bold">
                  OneDevPlace
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {navbarOpen ? (
                    <FaTimes className="w-6 h-6 text-green-900" />
                  ) : (
                    <FaBars className="w-6 h-6 text-green-900" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbarOpen ? "block" : "hidden"
              }`}
            >
              <ul className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ${navbarOpen ? "block" : "hidden"}`}>
                <li className="text-green-700">
                  <Dropdown
                    dropHeader="Students & Developers"
                    linkone="/content/studentambassador"
                    linktwo="/content/hackathon"
                    linkthird="/content/codingcomp"
                    linkfourth="/content/codingsites"
                    dropContentFirst="Student Ambassador Programs"
                    dropContentSecond="Hackathons"
                    dropContentThird="Coding Competitions"
                    dropContentFourth="Competitive Programming Sites"
                    className={`${navbarOpen ? "hidden md:block" : ""}`}
                  />
                </li>
                <li className="text-green-700">
                  <Dropdown
                    dropHeader="Womens"
                    linkone="/content/women/codingwomen"
                    linktwo="/content/women/mentorship"
                    linkthird="/content/women/womeninternship"
                    linkfourth="/content/women/womenscholarship"
                    dropContentFirst="Coding Competitions for Womens"
                    dropContentSecond="Mentorship Programs"
                    dropContentThird="Internships"
                    dropContentFourth="Scholarships"
                    className={`${navbarOpen ? "hidden md:block" : ""}`}
                  />
                </li>
                <li className="text-green-700">
                  <Link href="/content/opensource" className="font-bold text-sm">Open-Source</Link>
                </li>
                <li className="text-green-700">
                  <Link href="/content/internships" className="font-bold text-sm">Internships</Link>
                </li>
                <li className="text-green-700">
                  <Link href="/content/swags" className="font-bold text-sm">Swags</Link>
                </li>
                <li className="text-green-700">
                  <Link href="/blog" className="font-bold text-sm">Blog</Link>
                </li>
                <li className="text-green-700">
                  <Dropdown
                    dropHeader="More"
                    linkone="/content/scholarship"
                    linktwo="/content/researchinternship"
                    linkthird="/content/sdesheet"
                    linkfourth="/content/studyresources"
                    dropContentFirst="Scholarships"
                    dropContentSecond="Research Internships"
                    dropContentThird="SDE Sheets"
                    dropContentFourth="Study Resources"
                    className={`${navbarOpen ? "hidden md:block" : ""}`}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
