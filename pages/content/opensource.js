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


function OpenSource() {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          "6489559f6c9337bce433",
          "648a9f2ecb3f6f8e61b4"
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
            Open Source <span className="text-yellow-400">Programs</span>
          </h1>
          <p className="text-lg text-white">
          Open source has revolutionized the software industry by providing a platform for individuals from around the globe to contribute, share knowledge, and create impactful projects together. Open source programs are initiatives that invite developers, designers, and enthusiasts to contribute to the development of open source software projects. These programs foster a collaborative environment where individuals can engage in coding, documentation, testing, and other activities to improve and enhance the functionality of open source projects.
          </p>
        </div>
        <Image src={ambassador} alt="swag" height={400} width={400} />
      </div>
      <div className="container mx-auto p-4 mt-10 flex flex-wrap items-center justify-center gap-3">
      {isDataLoaded ? (
          data.map((item) => (
            <div key={item.$id}>
              <ItemCard
                name={item.name}
                about={item.about}
                link_url={item.url}
              />
            </div>
          ))
        ) : (
          <Lottie style={{ width: "50%" }} animationData={loader} loop={true} />
        )}
      </div>
    </div>
  )
}

export default OpenSource