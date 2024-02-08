// import React from 'react'

import MainSection from "./components/MainSection"
import Par from "./components/Par"
import SideSocial from "./components/SideSocial"

function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen text-white">
      <Par/>
      <div>
        <SideSocial/>
        <MainSection/>
      </div>
    </div>
  )
}

export default App
