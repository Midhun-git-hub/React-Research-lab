import React from 'react'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './Contents/Navbar.jsx';
import CardFlipProps from './Contents/CardFlipProps.jsx';
import Intro from './Contents/Intro.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1a1a2e,#000)] text-white">
      <Navbar/>
      <Intro/>
      <CardFlipProps/>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App