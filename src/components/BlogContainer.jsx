import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllBlogs } from "../util/blogLoader";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAllBlogs();
      setBlogs(data);
    };
    loadData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {blogs.map((blog) => (
        <button
          key={blog.id}
          onClick={() => navigate(`/blogs/${blog.id}`)}
          className="w-full border-2 border-black p-6 bg-white shadow-hard hover:translate-x-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-left flex flex-col group"
        >
          {/* Top Label Bar */}
          <div className="flex justify-between items-start mb-6">
            <div className="border-2 border-black px-3 py-1 bg-white">
              <span className="text-xs font-black uppercase font-mono">
                Markdown
              </span>
            </div>
            <span className="font-mono font-bold text-lg">_OPEN</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-black uppercase mb-3 tracking-tighter decoration-4">
            {blog.title || blog.id.replace(/-/g, " ")}
          </h2>

          {/* Summary / Log Text */}
          <p className="text-md font-medium text-gray-600 italic leading-snug line-clamp-3">
            Initializing read protocol for {blog.id}.md... Tracking system logs
            and documentation.
          </p>

          {/* Bottom Accent */}
          <div className="mt-8 pt-4 border-t-2 border-black w-full flex justify-end">
            <span className="text-[10px] font-mono font-bold text-gray-400">
              LOG_ID: {blog.id.substring(0, 8)}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default BlogContainer;
