// PostList.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PostList = ({ posts }) => {

  useEffect(() => {
    // Initialize AdSense script
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  
    // Push ads when the script is loaded
    script.onload = () => {
      const adsInsElements = document.querySelectorAll('.adsbygoogle');
  
      // Check if 'ins' elements don't have child nodes (ads) before pushing
      adsInsElements.forEach((element) => {
        if (element.childNodes.length === 0) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      });
    };
  }, []);
  return (
    <div>
      <Helmet>
        <title>Blog Posts</title>
        <meta name="description" content="Check out our latest blog posts." />
        {/* Add more meta tags as needed */}
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
              <Link to={`/posts/${post.id}`}>
                <img src={post.img} alt={post.title} className="w-full h-auto rounded-t-lg" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 line-clamp-3">
                  <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">{post.title}</Link>
                </h3>
                {/* You can add more content here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
