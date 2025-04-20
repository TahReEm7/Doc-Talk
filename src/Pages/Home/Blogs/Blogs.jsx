import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import Blog from './Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Blogs.json')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <PacmanLoader color="#3681d7" size={25} />
        </div>
      ) : (
        blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
      )}
    </div>
  );
};

export default Blogs;
