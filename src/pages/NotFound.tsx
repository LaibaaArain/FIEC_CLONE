import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page not found</p>
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
