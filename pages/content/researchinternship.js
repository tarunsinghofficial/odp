import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ambassador from "../../assets/ambassador.png";
import ItemCard from '../../components/ItemCard';

import Lottie from "lottie-react";
import loader from '../../assets/animations/loader.json';
// BaaS
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(process.env.NEXT_ENDPOINT_APPWRITE) // Your API Endpoint
  .setProject(process.env.NEXT_PROJECT_APPWRITE) // Your project ID
;


function ResearchInternship() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await databases.listDocuments(
          "6489559f6c9337bce433",
          "648aad36763e893cfcdc"
        );
        const fetchedData = response.documents;
        setData1(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await databases.listDocuments(
          "6489559f6c9337bce433",
          "648aae4664e0b2c8bb6f"
        );
        const fetchedData = response.documents;
        setData2(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    Promise.all([fetchData1(), fetchData2()]).then(() => {
      setIsDataLoaded(true);
    });
  }, []);

  return (
    <div className="mt-[73px] bg-green-300">
      <div className="flex flex-col md:flex-row lg:flex-row p-4 bg-green-900 items-center justify-center gap-1 md:gap-60 lg:gap-72">
        <div className="flex flex-col p-4 gap-4 items-center my-12 max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl lg:text-7xl text-white font-bold">
            Research Internship <span className="text-yellow-400">Programs</span>
          </h1>
          <p className="text-lg text-white">
            Research Internship Programs provide aspiring researchers with the chance to work closely with leading experts in their respective fields and actively participate in ongoing research projects. These programs typically span a fixed duration, allowing interns to gain hands-on experience, conduct experiments, analyze data, and contribute to scientific advancements.
          </p>
        </div>
        <Image src={ambassador} alt="swag" height={400} width={400} />
      </div>
      <div className="container mx-auto p-4 mt-10 flex flex-wrap items-center justify-center gap-3">
        {isDataLoaded ? (
          <>
            {data1.map((item) => (
              <div key={item.$id}>
                <ItemCard
                  name={item.name}
                  about={item.about}
                  link_url={item.url}
                />
              </div>
            ))}

            
            {data2.map((item) => (
              <div key={item.$id}>
                <ItemCard
                  name={item.name}
                  about={item.about}
                  link_url={item.url}
                />
              </div>
            ))}
          </>
        ) : (
          <Lottie style={{ width: "50%" }} animationData={loader} loop={true} />
        )}
      </div>
    </div>
  );
}

export default ResearchInternship;
