import React from 'react'

const App = () => {
  return (
    <div><div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="border-2 border-orange-500 p-10 rounded-xl shadow-[0_0_50px_rgba(255,165,0,0.3)]">
        <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">
          REACT <span className="text-orange-500">LAB</span>
        </h1>
        <p className="text-gray-400 text-xl font-mono animate-pulse">
          Tailwinds connected... Status: Hunting 🦁
        </p>
      </div>
    </div></div>
  )
}

export default App