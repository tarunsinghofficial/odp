import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import DOMPurify from "dompurify";

import Image from "next/image";
import parse from "html-react-parser";

const BlogPost = ({ blogPost }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (blogPost) {
      setLoading(false);
    }
  }, [blogPost]);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Sanitize the HTML content using DOMPurify
  const sanitizedContent = DOMPurify.sanitize(blogPost.content);

  // Calculate the estimated read time
  const wordsPerMinute = 200; // Adjust this value based on the desired reading speed
  const wordCount = sanitizedContent.split(" ").length;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className="mt-[73px] font-nunito">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold text-left tracking-wide container mx-auto max-w-3xl mb-4 my-10">
          {blogPost.title}
        </h1>
        <div className="container mx-auto flex flex-col items-center ">
          <div className="flex flex-row justify-between items-center container mx-auto max-w-3xl py-2 text-left">
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-500">
                Published on {blogPost.date} by{" "}
                <span className="font-bold">{blogPost.author}</span>
              </p>
              <span className="text-xl"> · </span>
              <p className="text-sm text-gray-500 mt-1">
                {readTimeMinutes} min {readTimeMinutes > 1 && "s"} read
              </p>
            </div>
            <div className="rounded-full">
              <Image
                width={40}
                height={40}
                className="rounded-full"
                src="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg"
                alt="author"
              />
            </div>
          </div>
          <hr className="bg-green-700 h-0.5 container mx-auto max-w-3xl my-6" />
          {blogPost.featuredImage && (
            <div className="w-full max-w-3xl mt-5">
              <Image
                src={blogPost.featuredImage}
                alt="Featured Image"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
          )}
          <div className="w-full max-w-3xl mt-5">
            <div className="prose prose-lg post-content">
              {parse(sanitizedContent)}
            </div>
          </div>
          {blogPost.tags.length > 0 && (
            <div className="container px-3 w-screen md:max-w-3xl lg:max-w-3xl items-start mt-8">
              {Array.isArray(blogPost.tags) && blogPost.tags.length > 0 && (
                <div className="flex flex-wrap space-x-2">
                  {blogPost.tags.map((tag) => (
                    <p
                      key={tag}
                      className="text-white bg-green-500 w-auto flex items-center justify-center h-10 p-4 rounded-full mt-2"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
          <hr className="bg-green-700 h-0.5 container mx-auto max-w-3xl my-6" />
          <div className="container mx-auto max-w-3xl my-10 flex items-center justify-start">
            <div className="flex flex-col">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg"
                alt="author"
              />
              <h1 className="text-3xl text-green-700 pt-3">
                Written by <span className="font-bold">{blogPost.author}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;

    const response = await axios.get(
      `https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/posts?slug=${slug}`
    );

    if (response.data.length > 0) {
      const blog = response.data[0];
      const fetchedBlogPost = {
        title: blog.title.rendered,
        content: blog.content.rendered,
        date: new Date(blog.date).toLocaleDateString(),
        author: null, // Placeholder for author data
        tags: [], // Placeholder for tags
        featuredImage: null, // Placeholder for featured image
      };

      // Fetch author data
      const authorResponse = await axios.get(
        `https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/users/${blog.author}`
      );
      fetchedBlogPost.author = authorResponse.data.name;

      // Fetch tags data
      const tagsResponse = await axios.get(
        `https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/tags?include=${blog.tags.join(",")}`
      );
      fetchedBlogPost.tags = tagsResponse.data.map((tag) => tag.name);

      // Fetch featured image data
      if (blog.featured_media) {
        const featuredImageResponse = await axios.get(
          `https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/media/${blog.featured_media}`
        );
        fetchedBlogPost.featuredImage = featuredImageResponse.data.source_url;
      }

      return {
        props: {
          blogPost: fetchedBlogPost,
        },
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      blogPost: null,
    },
  };
}

export default BlogPost;
