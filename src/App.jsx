import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BlogArchive from "./pages/BlogArchive";
import Navbar from "./components/Navbar";
import BlogPost from "./pages/BlogPost";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      {/* <CustomCursor /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogArchive />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
