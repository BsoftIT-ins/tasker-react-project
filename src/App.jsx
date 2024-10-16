

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroSection from './components/hero/HeroSection'
import Taskboard from './components/task/Taskboard'
function App() {
  
  return (
    <>
    <Header />
    <div className='flex flex-col justify-center items-center'>
    <HeroSection />
    <Taskboard />
    </div>

   
    <Footer />
    </>
  )
}

export default App
