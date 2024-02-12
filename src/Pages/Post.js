// Post.js
import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.outline} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.outline} />
        <meta property="og:image" content={post.img} />
        <meta property="og:url" content={`https://yourwebsite.com/posts/${post.id}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.outline} />
        <meta name="twitter:image" content={post.img} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644" crossOrigin="anonymous"></script>
      </Helmet>



      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#F8F9FD] mb-5">
        <img src={post.img} alt={post.title} className="mb-4 rounded-lg w-full h-[400px] shadow-md" />
        <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.outline}</p>
        <section className="container mx-auto mt-3">
          <p>Ad</p>
          {/* First Ad */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="2647559035"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          {/* Add more ads as needed */}
        </section>
        <h4 className="text-2xl font-bold mb-4">{post.h1}</h4>
        <p className="text-gray-700 mb-4">{post.para1}</p>
        <h4 className="text-2xl font-bold mb-4">{post.h2}</h4>
        <p className="text-gray-700 mb-4">{post.para2}</p>
        <h4 className="text-2xl font-bold mb-4">{post.h3}</h4>
        <p className="text-gray-700 mb-4">{post.para3}</p>
        <h4 className="text-2xl font-bold mb-4">{post.h4}</h4>
        <p className="text-gray-700 mb-4">{post.para4}</p>
        <h4 className="text-2xl font-bold mb-4">{post.bodyh}</h4>
        <h3 className="text-gray-700 mb-4">{post.body}</h3>
        <h4 className="text-2xl font-bold mb-4">Conclusion</h4>
        <p className="text-gray-700 mb-4">{post.conclusion}</p>
      </div>
    </div>
  );
};

export default Post;
