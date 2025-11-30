
import Header from "./components/Header"
import Hero from "./components/Hero"
import Collection from "./components/Collection"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Lifestyle from "./components/Lifestyle"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import AOSInit from "./components/AOSInit"


function App() {


  return (
   <>
   <AOSInit />
   <Header />
   <Hero />
   <About/>
    <Collection />
    <Gallery />
    <Lifestyle />
    <Testimonials />
    <Footer />
   </>
    
      
  )
}

export default App
