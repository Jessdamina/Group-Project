import React from 'react'
import LeftMenu from './Components/Left-Menu/Left-menu'
import Icons from './Components/Left-Menu/Icons'
import Hero from './Components/Left-Menu/Hero'
import MyServices from './Components/Left-Menu/MyServices'
import Priceplan from './Components/Left-Menu/Priceplan'
import Recommendations from './Components/Left-Menu/Recommendations'

function App() {
  return (
    <>
      <LeftMenu />
      <Icons />
      <Hero />
      <MyServices />
      <Priceplan />
      <Recommendations />
    </>
  )
}
export default App
