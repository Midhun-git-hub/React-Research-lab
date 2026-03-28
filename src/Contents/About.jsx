import React from "react";

const About = () => {
    return (
        <>
            {/* EXPERIMENT ZONE */}
            <div className="flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-zinc-900">
                <div className="text-center max-w-xl">
                    <h2 className="text-2xl font-bold mb-4">
                        React Lab Experiments
                    </h2>
                    <p className="text-zinc-400">
                        Different UI libraries have been taken as test subjects...
                    </p>
                </div>
            </div>

            {/* CHAOS ZONE */}
            <div className="flex items-center justify-center px-6 py-20 bg-zinc-950">
                <div className="text-center">
                    <div className="text-base font-bold tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded animate-chaos">
                        unstable builds 🚧
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;