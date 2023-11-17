import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ambassador from "../../assets/ambassador.png";
import ItemCard from '../../components/ItemCard';

import Lottie from "lottie-react";
import loader from '../../assets/animations/loader.json'
//BaaS
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(process.env.NEXT_ENDPOINT_APPWRITE) // Your API Endpoint
  .setProject(process.env.NEXT_PROJECT_APPWRITE) // Your project ID
;


function Scholarship() {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          "6489559f6c9337bce433",
          "648aabd374604fdb880e"
        );
        const fetchedData = response.documents;
        setData(fetchedData);
        setIsDataLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[73px] bg-green-300" >
      <div className="flex flex-col md:flex-row lg:flex-row p-4 bg-green-900 items-center justify-center gap-1 md:gap-60 lg:gap-72">
        <div className="flex flex-col p-4 gap-4 items-center my-12 max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl lg:text-7xl text-white font-bold">
            Scholarship<span className="text-yellow-400">Programs</span>
          </h1>
          <p className="text-lg text-white">
          Scholarships are prestigious awards granted to deserving individuals based on academic merit, achievements, leadership qualities, or financial need. They serve as a catalyst for educational excellence, empowering students to pursue their dreams and achieve their full potential. Scholarships not only provide financial support but also open doors to a wide range of opportunities, networking, and personal growth.
          </p>
        </div>
        <Image src={ambassador} alt="swag" height={400} width={400} />
      </div>
      <div className="container mx-auto p-4 mt-10 flex flex-wrap items-center justify-center gap-3">
      {isDataLoaded ? (
          /* data.map((item) => (
            <div key={item.$id}>
              <ItemCard
                name={item.name}
                about={item.about}
                link_url={item.url}
              />
            </div>
          )) */
          <div className="p-8 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-semibold mb-4">Under Development</h1>
            <p className="text-gray-600 mb-8">
              We are working on bringing you exciting new updates. Please check back later!
            </p>
            <p className="text-sm text-gray-500">
              Thanks for your co-operation!
            </p>
          </div>
        ) : (
          <Lottie style={{ width: "50%" }} animationData={loader} loop={true} />
        )}
      </div>
    </div>
  )
}

export default Scholarship