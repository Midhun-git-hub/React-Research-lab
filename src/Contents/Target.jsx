import React, { useRef } from 'react'
import TargetCursor from './../components/TargetCursor';
import hitman1 from '/images/hitman1.jpg';
import hitman2 from '/images/hitman2.jpg';
import hitman3 from '/images/hitman3.jpg';
import hitman4 from '/images/hitman4.jpg';
import hitman5 from '/images/hitman5.jpg';
import hitman6 from '/images/hitman6.jpg';

const Target = () => {
    const containerRef = useRef(null);

    const items = [
        { id: "Agent 47", img: hitman1, type: "square" },
        { id: "Sakamoto", img: hitman2, type: "portrait" },
        { id: "Deadshot", img: hitman3, type: "portrait" },
        { id: "God Ussop", img: hitman4, type: "portrait" },
        { id: "Soge King", img: hitman5, type: "portrait" },
        { id: "Hawk Eye", img: hitman6, type: "square" },
    ];

    return (
        <section ref={containerRef} className="px-6 py-10">
            <div>
                <TargetCursor
                    containerRef={containerRef}
                    spinDuration={2.4}
                    hideDefaultCursor
                    parallaxOn
                    hoverDuration={0.2}
                />

                <h1 className="text-2xl font-semibold text-center">
                    Some random targets to practice your aim on
                </h1>

                <div className="mt-3 text-center text-zinc-400 text-sm max-w-xl mx-auto">
                    This is still a work in progress, so it might behave weirdly sometimes. But the cursor is fully functional, so feel free to test your aim on these targets!. <br />
                    (P.S: The cursor works best on PC rather than mobile, so if you're on mobile, try to hover over the targets slowly for a better experience.)
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 auto-rows-[180px]">

                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`
                                cursor-target
                                relative
                                h-full
                                overflow-hidden
                                rounded-2xl
                                group
                                border border-white/10
                                hover:border-white/30
                                transition-all duration-300
                                ${item.type === "portrait" ? "row-span-2" : ""}
                            `}
                        >
                            {/* IMAGE */}
                            <img
                                src={item.img}
                                alt={`Hitman ${item.id}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                            {/* TEXT REVEAL */}
                            <div className="absolute bottom-4 left-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-white text-sm tracking-wide">
                                    {item.id}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Target;