import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Blog = ({ blogs }) => {
  const calculateReadTime = (content) => {
    if (!content) {
      return 0;
    }
    const wordsPerMinute = 200; // Adjust this value as needed
    const words = content.split(" ");
    const readTimeMinutes = Math.ceil(words.length / wordsPerMinute);
    return readTimeMinutes;
  };

  const truncateContent = (content, wordLimit) => {
    if (!content) {
      return "";
    }
    const words = content.trim().split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };

  return (
    <div className="mt-[73px]">
      <div className="flex flex-col md:flex-row lg:flex-row p-4 bg-green-900 items-center justify-center gap-1 md:gap-60 lg:gap-72">
        <div className="flex flex-col p-4 gap-4 items-center my-12 max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl lg:text-7xl text-white font-bold">
            OneDevPlace <span className="text-yellow-400">Blogs</span>
          </h1>
          <p className="text-lg text-white">Latest posts</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <div className="cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden transition duration-300">
                  <div className="">
                    {blog.featuredImage && (
                      <Image
                        src={blog.featuredImage}
                        alt="Featured Image"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center space-x-1 mt-5">
                    <p>
                      {blog.date}, {calculateReadTime(blog.content)} min read
                    </p>
                  </div>
                  <h2 className="text-2xl blog-home-title mb-2 mt-2">{blog.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/posts"
    );

    const fetchedBlogs = response.data.map((blog) => {
      return {
        id: blog.id,
        title: blog.title.rendered,
        description: blog.excerpt.rendered,
        date: new Date(blog.date).toLocaleDateString(),
        author: blog.author,
        slug: blog.slug,
        featured_media: blog.featured_media,
        content: blog.content.rendered,
      };
    });

    const featuredImagePromises = fetchedBlogs.map(async (blog) => {
      if (blog.featured_media) {
        const featuredImageResponse = await axios.get(
          `https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/media/${blog.featured_media}`
        );
        blog.featuredImage = featuredImageResponse.data.source_url;
      }
      return blog;
    });

    const blogsWithFeaturedImage = await Promise.all(featuredImagePromises);

    return {
      props: {
        blogs: blogsWithFeaturedImage,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default Blog;
