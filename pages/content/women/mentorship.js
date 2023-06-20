import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ambassador from "../../../assets/ambassador.png";
import ItemCard from '../../../components/ItemCard';

import Lottie from "lottie-react";
import loader from '../../../assets/animations/loader.json'
//BaaS
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(process.env.NEXT_ENDPOINT_APPWRITE) // Your API Endpoint
  .setProject(process.env.NEXT_PROJECT_APPWRITE) // Your project ID
;


function Mentorship() {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          "6489559f6c9337bce433",
          "648aaa3917b5c7b0b2f7"
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
            Mentorship <span className="text-yellow-400">programs</span>
          </h1>
          <p className="text-lg text-white">
          Mentorship Programs for Women connect aspiring individuals with experienced mentors who serve as trusted guides, sharing their wisdom, expertise, and real-world insights. These programs create a nurturing environment where mentees can receive personalized guidance, expand their networks, and gain the confidence to pursue their dreams.🚀
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

export default Mentorship