import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";  //eslint-disable-line
import Lightning from "./../components/Lightning";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendMessage = (e) => {
        e.preventDefault();
        setStatus("loading");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                    setTimeout(() => setStatus(null), 3000);
                },
                () => {
                    setStatus("error");
                    setTimeout(() => setStatus(null), 3000);
                },
            );
    };

    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="relative w-full max-w-xl">
                {/* 💎 CARD */}
                <div
                    className="
                    relative
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    overflow-hidden
                    p-8 md:p-10
                    "
                >
                    {/* ⚡ LIGHTNING INSIDE CARD */}
                    <div className="absolute inset-0 z-0 opacity-30 blur-md pointer-events-none">
                        <Lightning hue={250} speed={0.3} intensity={0.7} size={2.5} />
                    </div>

                    {/* 🔥 CONTENT */}
                    {/* 🔥 CONTENT */}
                    <div className="relative z-10 text-center">
                        {/* 🧠 LABEL */}
                        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-3">
                            Contact
                        </p>

                        {/* 💎 MAIN HEADING */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Let’s build something cool
                        </h2>

                        {/* 😎 SUBTEXT */}
                        <p className="text-zinc-400 mb-8 text-sm md:text-base">
                            not a formal thing — just drop ideas, feedback, or random thoughts
                            👀
                        </p>

                        {/* FORM */}
                        <form
                            ref={form}
                            onSubmit={sendMessage}
                            className="space-y-6 text-left"
                        >
                            {/* NAME */}
                            <div>
                                <label className="text-xs text-zinc-500 mb-2 block">
                                    what should i call you?
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="could be your name… or something mysterious 👀"
                                    className="
                                    w-full
                                    bg-black/40
                                    border border-white/10
                                    rounded-lg
                                    px-4 py-3
                                    transition
                                    focus:outline-none
                                    focus:border-purple-400
                                    focus:ring-2 focus:ring-purple-500/30
                                    "
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="text-xs text-zinc-500 mb-2 block">
                                    what’s on your mind?
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="idea, feedback, random thought… anything goes"
                                    className="
                                    w-full
                                    bg-black/40
                                    border border-white/10
                                    rounded-lg
                                    px-4 py-3
                                    resize-none
                                    transition
                                    focus:outline-none
                                    focus:border-purple-400
                                    focus:ring-2 focus:ring-purple-500/30
                                    " 
                                />
                            </div>

                            {/* BUTTON */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="
                                w-full
                                py-3
                                rounded-lg
                                bg-gradient-to-r from-purple-500 to-indigo-600
                                font-semibold
                                tracking-wide
                                hover:shadow-lg hover:shadow-purple-500/30
                                transition
                              "
                            >
                                send it 🚀
                            </motion.button>

                            {/* STATUS */}
                            <AnimatePresence>
                                {status && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-sm text-zinc-400 text-center mt-2"
                                    >
                                        {status === "loading" && "sending... ⚡"}
                                        {status === "success" && "got it. appreciate it 🙌"}
                                        {status === "error" && "something broke 💀 try again?"}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
