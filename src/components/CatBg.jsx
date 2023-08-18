import React, { useCallback, useEffect } from 'react'
import particlesConfig from './config/ParticlesConfig'
import Particles from 'react-tsparticles'
import { loadSlim } from "tsparticles-slim";

const CatBg = ({nyanStateFromParent}) => {

    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log();
    }, []);

  return (

     <div>
        {nyanStateFromParent ? <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
    /> : ""}
     </div>
  )
}

export default CatBg