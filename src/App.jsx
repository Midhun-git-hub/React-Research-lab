import React from 'react'
import CardFlipProps from './Contents/CardFlipProps.jsx';
import Intro from './Contents/Intro.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1a1a2e,#000)] text-white">
      <Intro/>
      <CardFlipProps/>
    </div>
  )
}

export default App