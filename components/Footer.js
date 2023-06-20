import Image from "next/image";
import React from "react";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className=" w-full">
      <footer class="p-4 bg-green-900 shadow md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src={logo}
              alt="footer"
              class=" mr-3"
              height={80}
              width={80}
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              OneDevPlace
            </span>
          </a>
          <p class="flex items-center mb-6 text-sm text-white sm:mb-0 ">
            Made with ❤️ by Tarun Singh
          </p>
        </div>
        <hr class="my-6 border-white sm:mx-auto lg:my-8" />
        <span class="block text-sm text-white text-center ">
          © 2023{" "}
          <a href="https://onedevplace.netlify.com" class="hover:underline">
            OneDevPlace
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
