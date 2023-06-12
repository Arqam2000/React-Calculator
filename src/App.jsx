// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState } from 'react'
import { Buttons } from "./components/Buttons"
import { Display } from "./components/Display"
import "./components/style.css"

function App() {

  return (
    <>
      <div className="main">
        <div className="calculator">
          <Display />
        </div>
      </div>
    </>
  )
}

export default App
