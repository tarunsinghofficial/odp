import Image from "next/image";
import React, { useEffect, useState } from "react";
import swag from "../../assets/swags.png";
import SwagCard from "../../components/SwagCard";

import Lottie from "lottie-react";
import loader from '../../assets/animations/loader.json';

//BaaS
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(process.env.NEXT_ENDPOINT_APPWRITE) // Your API Endpoint
  .setProject(process.env.NEXT_PROJECT_APPWRITE) // Your project ID
;


function Swags() {

  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments('6489559f6c9337bce433', '648aa12baff8bf11cbf2');
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
            Swags for <span className="text-green-500">Developers</span>
          </h1>
          <p className="text-lg text-white">
            As a developer, we always want to get some cool Swags, Right! So, I
            created this to get the most swags available for you. All of them
            are crowdsourced and verified by the community. Many of them ship
            worldwide! 🚀
          </p>
        </div>
        <Image src={swag} alt="swag" height={400} width={300} />
      </div>
      <div className="container mx-auto p-4 mt-10 flex flex-wrap items-center justify-center gap-20">
      {isDataLoaded ? (
          /* data.map((item) => (
            <div key={item.$id}>
              <SwagCard
                name={item.name}
                about={item.about}
                url={item.url}
                thumbnail={item.logo_url}
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
          <Lottie style={{ width: '50%' }} animationData={loader} loop={true} />
        )}
      </div>
    </div>
  );
}

export default Swags;
