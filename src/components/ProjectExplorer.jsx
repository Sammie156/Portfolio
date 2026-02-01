import React, { useState } from "react";
import WindowCard from "./WindowCard";
import { AnimatePresence, motion } from "framer-motion";
import dummyImage from "../assets/dummy_prod.png";
import llmImage from "../assets/llm_tokenizer.png";

const ProjectExplorer = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectData = [
    {
      id: "llm-tokenizer",
      name: "tokenizer.c",
      type: "C / PYTHON",
      color: "bg-red-500",
      summary: "Scratch-built WordPiece tokenizer for LLM training.",
      details:
        "A low-level implementation of Byte Pair Encoding (BPE) in C with a Python wrapper. Optimized for O(n) tokenization speed.",
      image: llmImage,
      github: "https://github.com/Sammie156/LLM-Tokenizer",
    },
    {
      id: "dummy-products",
      name: "dummy.html",
      type: "HTML/JS/CSS",
      color: "bg-purple-500",
      summary:
        "A dummy E-Commerce site made using MERN Stack for learning purposes",
      details:
        "A minimal e-commerce site made using MERN Stack, with items stored in MongoDB and UI made using TailwindCSS and React. The entire project was built as a learning session in my summer internship at Atyantik Pvt. Ltd.",
      image: dummyImage,
      github: "https://github.com/Sammie156/DummyProducts"
    },
    {
        id: "coming-soon",
        name: "under.construction",
        type: "👀",
        color: "bg-yellow-500",
        summary: "More projects will be added here",
        details: "Nothing here yet"
    }
  ];

  return (
    <div className="w-full space-y-12">
      {/* 1. THE GRID (The Launchers) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setActiveProject(proj)}
            className={`w-full border-2 border-black p-6 bg-white shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-left flex flex-col group ${
              activeProject?.id === proj.id
                ? "ring-4 ring-black ring-offset-2"
                : ""
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono font-bold px-2 py-1 border-2 border-black bg-gray-100 uppercase">
                {proj.type}
              </span>
              <span className="font-mono font-bold text-lg">_OPEN</span>
            </div>

            <h3 className="font-black text-xl mb-2 uppercase tracking-tighter">
              {proj.name}
            </h3>
            <p className="text-sm font-medium text-gray-600 italic">
              {proj.summary}
            </p>
          </button>
        ))}
      </div>

      {/* 2. THE STAGE (Detailed Window View) */}
      <div className="relative min-h-[400px] border-black pt-12">
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={activeProject.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}

              className="-mt-16"
            >
              <WindowCard
                filename={activeProject.name}
                windowClass={activeProject.color}
                onClose={() => setActiveProject(null)}
                className="mx-auto w-full max-w-4xl shadow-hard"
              >
                <div className="flex flex-col md:flex-row bg-white">
                  {/* Image Section */}
                  <div className="md:w-1/2 border-r-2 border-black bg-gray-50 flex items-center justify-center p-4">
                    <div className="w-full aspect-video border-2 border-black bg-white shadow-hard overflow-hidden">
                      <img
                        src={activeProject.image}
                        alt="Project Preview"
                        className="w-full h-full object-cover contrast-125"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">
                        Project_Specs
                      </h2>
                      <p className="font-mono text-xs text-gray-400 mb-4">
                        [FETCH] URL: {activeProject.github}
                      </p>
                      <p className="text-md font-bold text-gray-800 leading-relaxed mb-6">
                        {activeProject.details}
                      </p>
                    </div>

                    {/* Single GitHub Action */}
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border-2 border-black py-4 text-center font-black uppercase hover:bg-black hover:text-white transition-all shadow-hard active:shadow-none active:translate-x-1 active:translate-y-1 bg-white text-black"
                    >
                      View_Source_On_GitHub
                    </a>
                  </div>
                </div>
              </WindowCard>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300">
              <p className="font-mono text-sm text-gray-900 uppercase tracking-widest animate-pulse">
                Click a Project to know more
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectExplorer;
