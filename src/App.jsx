import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Gate from './components/Gate';
import CatBg from './components/CatBg';


function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleFirstComponentDelete = () => {
    setShowFirstComponent(false);
    setShowSecondComponent(true);
  };

  const [nyanStateFromNavbar, setNyanStateFromNavbar] = useState();

  const handleNyanStateFromNavbar = nyanState => {
    setNyanStateFromNavbar(nyanState);
  }

  return (
   <div>
     {showFirstComponent && (<Gate onDelete={handleFirstComponentDelete}/>)}
     {showSecondComponent && <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover
          bg-no-repeat bg-center'>
            <Navbar nyanStateToParent={handleNyanStateFromNavbar}/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas/>
          </div>
          <div>
            <CatBg nyanStateFromParent={nyanStateFromNavbar}/>

          </div>
        </div>
     </BrowserRouter>}

     
   </div>
  )
}

export default App
