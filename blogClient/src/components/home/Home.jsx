import React from 'react'
import Navbar from '../navbar/Navbar';
import BlogHome  from '../blogSection/BlogHome'
import Footer  from '../footer/Footer';
import  HomePoster from '../homePoster/HomePoster';
const Home = () => {
  return (
    <div >
    
      <Navbar/>
      <HomePoster />
      <BlogHome/>
      <Footer/>
    </div>
  )
}

export default Home
