import BlogContainer from "../components/BlogContainer";

const BlogArchive = () => {
  

  return (
    <div className="min-h-screen p-8 md:p-12 bg-dotted-spacing-6 bg-dotted-zinc-300 relative">
      <header className="mb-12 border-b-4 border-black pb-4 inline-block">
        <h1 className="text-5xl md:text-6xl font-black uppercase">
          System_Archive
        </h1>
      </header>

      <BlogContainer />
    </div>
  );
};

export default BlogArchive;
