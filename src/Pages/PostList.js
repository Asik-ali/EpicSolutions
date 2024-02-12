// PostList.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
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
  );
};

export default PostList;
