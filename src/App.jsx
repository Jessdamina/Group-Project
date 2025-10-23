import React from 'react'
import Profilemenu from './Components/Left-Menu/Profilemenu'
import { useEffect, useState } from 'react';
// import MobileDetect from 'mobile-detect';
import Icons from './Components/Left-Menu/Icons'
import Hero from './Components/Left-Menu/Hero'
import MyServices from './Components/Left-Menu/MyServices'
import Priceplan from './Components/Left-Menu/Priceplan'
import Recommendations from './Components/Left-Menu/Recommendations'
import Education from './Components/Left-Menu/Education';
import Portfolio from './Components/Left-Menu/Portfolio';
import Blog from './Components/Left-Menu/Blog';
import Footer from './Components/Left-Menu/Footer';

function App() {
  const [isDesktop, setIsDesktop] = useState(true);
        
    const checkWindowSize = ()=> {
      let windowwidth;
        if (typeof window !== 'undefined') {
          windowwidth = window.innerWidth
        }
        if(windowwidth >= 1024){
          setIsDesktop(false)
        }
        }
        
        useEffect(()=>{
          checkWindowSize()
        }, [isDesktop])
    
        useEffect(() => {
          if (typeof window !== 'undefined') {
            window.addEventListener('resize', checkWindowSize);
          return () => {
            window.removeEventListener('resize', checkWindowSize);
          };
        }
  }, []);

  return (
    <div className='bg-[rgb(240,240,246)] dark:bg-[#2B2B2B]'>
      <Hero />
      <MyServices />
      <Priceplan />
      <Recommendations />
      <Education />
      <Portfolio />
      <Blog />
      <Footer />
      <Icons />
      <Profilemenu />

    </div>
  )
}
export default App
