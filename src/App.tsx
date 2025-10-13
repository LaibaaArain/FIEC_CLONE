import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Event  from "./pages/Event";   
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/event" element={<Event />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
 </>
);

export default App;
