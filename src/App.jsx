import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Gate from './components/Gate';
import CatBg from './components/CatBg';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the Gate component
    const hasSeenGate = localStorage.getItem('hasSeenGate');
    if (hasSeenGate) {
      setShowFirstComponent(false);
      setShowSecondComponent(true);
    } else {
      setShowFirstComponent(true);
    }
    setIsLoaded(true);
  }, []);
 
  const handleFirstComponentDelete = () => {
    localStorage.setItem('hasSeenGate', 'true');
    setShowFirstComponent(false);
    setShowSecondComponent(true);
  };

  const [nyanStateFromNavbar, setNyanStateFromNavbar] = useState();

  const handleNyanStateFromNavbar = nyanState => {
    setNyanStateFromNavbar(nyanState);
  }

    // Render nothing until the state is loaded
    if (!isLoaded) {
      return null;
    }
  

  return (
   <div>
     {showFirstComponent && (<Gate onDelete={handleFirstComponentDelete}/>)}
     {showSecondComponent && <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover
          bg-no-repeat bg-center'>
            <Navbar nyanStateToParent={handleNyanStateFromNavbar}/>
            <Hero lightUpName={nyanStateFromNavbar}/>
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
