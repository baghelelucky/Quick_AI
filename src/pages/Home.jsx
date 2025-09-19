import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AI_Tools from '../components/AI_Tools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <> 
      <Navbar/>
      <Hero /> 
      <AI_Tools/> 
      <Testimonial/>
      <Plan/>
      <Footer/>
      <Outlet /> 
    </>
  )
}

export default Home
