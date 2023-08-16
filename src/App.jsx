import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Gate from './components/Gate';


function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleFirstComponentDelete = () => {
    setShowFirstComponent(false);
    setShowSecondComponent(true);
  };

  return (
   <div>
     {showFirstComponent && (<Gate onDelete={handleFirstComponentDelete}/>)}
     {showSecondComponent && <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover
          bg-no-repeat bg-center'>
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
     </BrowserRouter>}

     
   </div>
  )
}

export default App
