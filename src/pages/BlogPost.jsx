import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchAllBlogs } from "../util/blogLoader";
import WindowCard from "../components/WindowCard";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchAllBlogs().then((allBlogs) => {
      const found = allBlogs.find((b) => b.id === id);
      setBlog(found);
    });
  }, [id]);

  if (!blog)
    return <div className="p-20 font-mono">LOADING_SYSTEM_FILES...</div>;

  return (
    // Main container with the dotted background throughout
    <main className="min-h-screen bg-dotted-spacing-6 bg-dotted-zinc-300 p-8 md:p-16 lg:p-24 relative">
      {/* Back Navigation */}
      <div className="bg-white p-4 border-black border-2">
        <Link
          to="/blogs"
          className="font-mono font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-none shadow-hard inline-block mb-12"
        >
          [←] RETURN_TO_ARCHIVE
        </Link>
        {/* Full-width Header with the solid bottom border */}
        <header className="mb-16 border-b-8 border-black pb-8 w-full">
          <h1 className="text-6xl md:text-8xl font-black  uppercase leading-none tracking-tighter">
            {blog.title}
          </h1>
          <p className="mt-4 font-mono font-bold text-gray-400">
            FILE_ID: {blog.id}.md | SEMESTER_06
          </p>
        </header>
        {/* Markdown Content - Reverting to your preferred styling */}
        <article
          className="prose prose-slate max-w-none
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
            prose-p:text-lg prose-p:leading-relaxed
            prose-pre:bg-black prose-pre:text-white prose-pre:border-4 prose-pre:border-black prose-pre:shadow-hard"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom Table Styling: Solid borders and bold headers
              table: ({ children }) => (
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-4 border-black border-collapse shadow-hard">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-black text-white uppercase font-black border-b-4 border-black">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="border-2 border-black p-4 text-left font-mono text-sm">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border-2 border-black p-4 font-medium">
                  {children}
                </td>
              ),
              // Checklist / Tasklist styling
              li: ({ children, checked }) => {
                if (checked !== null) {
                  return (
                    <li className="list-none flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        readOnly
                        className="w-5 h-5 border-2 border-black accent-black"
                      />
                      <span
                        className={
                          checked ? "line-through text-gray-400" : "font-bold"
                        }
                      >
                        {children}
                      </span>
                    </li>
                  );
                }
                return (
                  <li className="mb-2 pl-2 border-l-4 border-black">
                    {children}
                  </li>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </article>
        {/* System Footer */}
        <footer className="mt-24 pt-8 border-t-4 border-black font-mono font-black uppercase flex justify-between">
          <span>End_of_File</span>
          <span>Sammie_OS v1.0.26</span>
        </footer>
      </div>
    </main>
  );
};

export default BlogPost;
