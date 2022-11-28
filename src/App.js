import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Career from './pages/Career'
import Pricing from './pages/Pricing/Pricing'

const App = () => {
  return (
    <div>
      <Header></Header>
{/*       <Pricing></Pricing>
 */}   
      <Career></Career>   
      <Footer></Footer>
    </div>
  )
}

export default App