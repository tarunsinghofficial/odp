import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Client, Databases, ID } from "appwrite";

import contact from "../assets/contact.svg";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_ENDPOINT_APPWRITE) // Your API Endpoint
  .setProject(process.env.NEXT_PROJECT_APPWRITE); // Your project ID

const databases = new Databases(client);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await databases.createDocument(
        "6489559f6c9337bce433", // d
        "64abb825796c87593a8a", // c
        ID.unique(),
        {
          name,
          email,
          message,
        }
      );

      if (response.$id) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto">
      {!isSubmitted ? (
        <>
          <h1 className="text-2xl pt-5 md:text-4xl lg:text-5xl font-bold text-center">
            Love to hear from you, <br /> Get in touch 👋
          </h1>
          <div className="min-h-screen flex flex-col-reverse md:flex-row lg:flex-row py-10 gap-x-64 gap-y-8 justify-center items-center">
            <div className="w-80 md:w-96 lg:w-96 p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="flex items-center">
                    <FaUser className="mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="flex items-start">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <Image src={contact} width={400} height={400} className="w-80 md:w-[400px] lg:w-[500px]" alt="contact" />
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen text-center flex items-center">
          <h1 className="text-green-500 text-3xl md:text-5xl lg:text-6xl">
            Thank you for your message! We will get back to you soon.
          </h1>
        </div>
      )}
    </div>
  );
}
