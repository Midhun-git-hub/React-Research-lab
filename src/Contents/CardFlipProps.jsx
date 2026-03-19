import React from 'react'
import CardFlip from '../components/mvpblocks/card-flip';

const CardFlipProps = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <CardFlip
        title="Build MVPs Fast"
        subtitle="Launch your idea in record time"
        description="Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library."
        features={[
          "Copy & Paste Ready",
          "Developer-First", 
          "MVP Optimized",
          "Zero Setup Required"
        ]}
      />
    </div>
  )
}

export default CardFlipProps