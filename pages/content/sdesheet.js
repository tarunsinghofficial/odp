import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ambassador from "../../assets/ambassador.png";
import ItemCard from '../../components/ItemCard';
import Lottie from "lottie-react";
import loader from '../../assets/animations/loader.json'

function SdeSheet() {


  return (
    <div className="mt-[73px] bg-green-300" >
      <div className="flex flex-col md:flex-row lg:flex-row p-4 bg-green-900 items-center justify-center gap-1 md:gap-60 lg:gap-72">
        <div className="flex flex-col p-4 gap-4 items-center my-12 max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl lg:text-7xl text-white font-bold">
            Popular SDE <span className="text-yellow-400">Sheets</span>
          </h1>
          <p className="text-lg text-white">
            The SDE Sheet is a comprehensive resource designed to help aspiring Software Development Engineers (SDEs) excel in technical interviews. It serves as a roadmap to navigate through the vast and ever-evolving landscape of programming concepts, data structures, algorithms, and system design principles. Whether you are preparing for job interviews or seeking to strengthen your coding skills, the SDE Sheet is your go-to guide.
          </p>
        </div>
        <Image src={ambassador} alt="swag" height={400} width={400} />
      </div>
      <div className="container mx-auto p-4 mt-10 flex flex-wrap items-center justify-center gap-3">
        
      </div>
    </div>
  )
}

export default SdeSheet