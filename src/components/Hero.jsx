import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import './Hero.css'

const Hero = ({ lightUpName }) => {

  const [checkedStatus, setCheckedStatus] = useState({
    checkboxS: lightUpName,
    checkboxU: lightUpName,
    checkboxB: lightUpName,
    checkboxA: lightUpName,
    checkboxR: lightUpName,
    checkboxN: lightUpName,
    checkboxAA: lightUpName,
  });


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='nameContainer'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am</h1>
          <ul className='ulList'>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxS}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxS:!checkboxS})}
             />
              <div className='letters'>S</div>
            </li>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxU}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxU:!checkboxU})}/>
              <div className='letters'>U</div>
            </li>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxB}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxB:!checkboxB})}/>
              <div className='letters'>B</div>
            </li>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxA}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxA:!checkboxA})}/>
              <div className='letters'>A</div>
            </li>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxR}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxR:!checkboxR})}/>
              <div className='letters'>R</div>
            </li>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxN}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxN:!checkboxN})}/>
              <div className='letters'>N</div>
            </li>
            <li className='liList'>
              <input type="checkbox"
                checked={lightUpName ? lightUpName : checkedStatus.checkboxAA}
                onChange={() => setCheckedStatus({...checkedStatus, checkboxAA:!checkboxAA})}/>
              <div className='letters'>A</div>
            </li>
          </ul>
          <div className= "wrapper">
            <div className='static-txt'>I'm a </div>
            <ul className='dynamic-txts'>
              <li> <span>Student</span></li>
              <li> <span>Software Developer</span></li>
              <li> <span>Gamer</span></li>              
            </ul>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero