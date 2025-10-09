import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'

const Gallery = () => {
  return (
     <div className="min-h-screen">
      <Navbar />
      <main>
      <GallerySection/>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
