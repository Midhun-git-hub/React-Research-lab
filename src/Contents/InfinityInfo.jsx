import React from 'react'

const InfinityInfo = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-24 flex justify-center relative">

      <div className="max-w-3xl text-center">
        
        {/* Heading */}
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          The Minds Behind the Chaos
        </h2>

        {/* Subtext */}
        <p className="text-zinc-400 mt-6 leading-relaxed text-[clamp(0.95rem,1.5vw,1.1rem)]">
          This collection isn’t about heroes. It’s about those who challenged the world itself —
          individuals driven by vision, ambition, and the will to reshape reality on their own terms.
        </p>

        <p className="text-zinc-400 mt-4 leading-relaxed text-[clamp(0.95rem,1.5vw,1.1rem)]">
          Each character here represents a different philosophy of power —
          control, chaos, order, or absolute freedom. Together, they form a study
          of what happens when limits are removed.
        </p>

      </div>

      {/* 🔥 Divider */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      </div>

    </section>
  )
}

export default InfinityInfo