import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventSection from '../components/EventSection'
const Event = () => {
  return (
     <div className="min-h-screen">
      <Navbar />
      <main>
      <EventSection/>
      </main>
      <Footer />
    </div>
  )
}

export default Event
