import React from 'react'
import cat from '../assets/cat.gif' 
import { Html } from '@react-three/drei'

const CanvasLoader = () => {

  const imgStyle= {
    
  }

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          opacity: 0
        }}
      >Loadingggggggggggggggggggggggggggggggggggg
      </p>
      {/* <img src={cat} alt='preloader' style={imgStyle}/> */}
    </Html>
  )
}

export default CanvasLoader

