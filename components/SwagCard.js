import Image from "next/image";
import Link from "next/link";
import React from "react";

function SwagCard({ thumbnail, name, about, url }) {
  return (
    <div className="w-[20em] h-[26em] md:w-[25em] md:h-[30em] lg:w-[25em] lg:h-[30em] hover:cursor-pointer rounded-lg p-1 lg:p-4 md:p-4 bg-white shadow-xl hover:shadow-2xl duration-200">
      <div className="flex flex-col  items-center justify-center p-4 gap-6">
        <Image
          src={thumbnail}
          alt="swag"
          className="hover:scale-110 duration-700 w-full h-38 md:h-full lg:h-full rounded-xl"
          width={400}
          height={300}
        />
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl  text-black text-center">{name}</p>
          <p className="text-gray-500 text-md text-center line-clamp-2">
            {about}
          </p>
        </div>
        <Link
          href={url}
          className="bg-green-700 p-1 w-[7em] h-10 rounded-lg flex items-center justify-center hover:cursor-pointer"
        >
          <p className="text-white">Click here</p>
        </Link>
      </div>
    </div>
  );
}

export default SwagCard;
