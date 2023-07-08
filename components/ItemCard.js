import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function ItemCard({ name, about, link_url }) {
  return (
    <div
      className="w-[20em] md:w-[45em] lg:w-[80em] h-32 md:h-20 lg:h-20 overflow-hidden 
    flex flex-col md:flex-row lg:flex-row items-start justify-between hover:cursor-pointer 
    rounded-lg p-3 bg-white shadow-xl hover:shadow-2xl hover:scale-110 duration-700"
    >
      <h1 className="text-sm md:text-lg lg:text-lg xl:text-lg font-bold text-left md:w-[26em] lg:w-[26em] capitalize text-green-700">
        {name}
      </h1>
      <p className="text-xs md:text-sm lg:text-md xl:text-[18px] font-normal text-left md:w-[60em] lg:w-[60em]  line-clamp-3 lg:line-clamp-none">
        {about}
      </p>
      <Link
        href={link_url}
        className="flex flex-row gap-2 items-center text-green-600 hover:text-green-800 font-semibold"
      >
        <p className="text-sm md:text-md lg:text-lg xl:text-xl font-normal text-center max-w-5xl">
          Visit
        </p>
        <span>
          <BsArrowRight />
        </span>
      </Link>
    </div>
  );
}

export default ItemCard;
