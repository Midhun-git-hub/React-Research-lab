import React, { useRef } from 'react'
import TargetCursor from './../components/TargetCursor';

const Target = () => {
    const containerRef = useRef(null);
    return (
        <section ref={containerRef}>
            <div>
                <TargetCursor
                    containerRef={containerRef}
                    spinDuration={2.4}
                    hideDefaultCursor
                    parallaxOn
                    hoverDuration={0.2}
                />

                <h1>Hover over the elements below</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">

                    <div className="cursor-target bg-zinc-900 rounded-xl h-48 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all">
                        <p className="text-gray-500 text-sm">Image 1</p>
                    </div>

                    <div className="cursor-target bg-zinc-900 rounded-xl h-48 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all">
                        <p className="text-gray-500 text-sm">Image 2</p>
                    </div>

                    <div className="cursor-target bg-zinc-900 rounded-xl h-48 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all">
                        <p className="text-gray-500 text-sm">Image 3</p>
                    </div>

                    <div className="cursor-target bg-zinc-900 rounded-xl h-48 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all">
                        <p className="text-gray-500 text-sm">Image 4</p>
                    </div>

                    <div className="cursor-target bg-zinc-900 rounded-xl h-48 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all">
                        <p className="text-gray-500 text-sm">Image 5</p>
                    </div>

                    <div className="cursor-target bg-zinc-900 rounded-xl h-48 flex items-center justify-center border border-white/10 hover:border-white/30 transition-all">
                        <p className="text-gray-500 text-sm">Image 6</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Target