import React from 'react'
import First from "../components/First"
import Latestcollection from '../components/Latestcollection'
import Ourpolicy from "../components/Ourpolicy"
import Newsletterbox from "../components/Newsletterbox"
// import  Footer from "../components/Footer"

const Home = () => {
  return (
    <div className='bg-white'>
      <First />
    <Latestcollection />
    <Ourpolicy />
    <Newsletterbox />
     {/* <Footer/> */}
    </div>
  )
}

export default Home
