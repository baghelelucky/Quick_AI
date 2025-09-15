import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AI_Tools from '../components/AI_Tools'
import Testimonial from '../components/Testimonial'


const Home = () => {
  return (
    <> 
      <Navbar/>
      <Hero /> 
      <AI_Tools/>
       
      <Testimonial/>
      <Outlet /> 
    </>
  )
}

export default Home
