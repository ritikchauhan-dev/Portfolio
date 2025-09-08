import React, { useRef } from 'react'

const CONTACTS = [
    {
        label: "Email",
        value: "ritikchauhan.dev@gmail.com",
        href: "mailto:ritikchauhan.dev@gmail.com",
        icon: (
            <svg className="w-11 h-11 sm:w-15 sm:h-15 mr-2 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M22 7.5L12 13 2 7.5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/ritik-chauhan-dev",
        href: "https://linkedin.com/in/ritik-chauhan-dev",
        icon: (
            <svg className="w-11 h-11 sm:w-14 sm:h-14 mr-2 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        value: "github.com/ritikchauhan-dev",
        href: "https://github.com/ritikchauhan-dev",
        icon: (
            <svg className="w-11 h-11 sm:w-14 sm:h-14 mr-2 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
        ),
    },
]

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const messageRef = useRef<HTMLDivElement>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTimeout(() => {
            if (messageRef.current) {
                messageRef.current.classList.remove("hidden")
                setTimeout(() => {
                    messageRef.current && messageRef.current.classList.add("hidden")
                }, 1000)
            }
            formRef.current?.reset()
        }, 500)
    }

    return (
        <div id='contact' className="w-full box-border min-h-screen flex flex-col py-10 text-center bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#0ea5e9_100%)] text-white gap-8">
            <h1 className="text-[10vw] sm:text-5xl xl:text-7xl leading-tight  font-bold text-black">{`Let's Work Together`}</h1>
            <p className="text-[5vw] md:text-[3vw] xl:text-[1.9vw] leading-tight font-bold pb-10 text-gray-300 ">
                {` Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.`}
            </p>
            <div className="flex flex-col  justify-center  gap-10">
                <div className="flex  gap-16 items-center mb-10 justify-center flex-wrap">
                    {CONTACTS.map((contact) => (
                        <div key={contact.label} className="flex items-center gap-2">
                            {contact.icon}
                            <div className="flex flex-col items-start">
                                <h3 className="font-semibold text-3xl sm:text-2xl">{contact.label}</h3>
                                <a
                                    href={contact.href}
                                    target={contact.label !== "Email" ? "_blank" : undefined}
                                    rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                                    className="text-cyan-200 no-underline text-[5vw] sm:text-xl break-all"
                                >
                                    {contact.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto md:w-2/3 w-full">
                    <form
                        id="contact-form"
                        className="space-y-6"
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                id='name'
                                type="text"
                                autoComplete='name'
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                                required
                            />
                            <input
                                id='email'
                                type="email"
                                autoComplete='email'
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                                required
                            />
                        </div>
                        <input
                            id='subject'
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                            required
                        />
                        <textarea
                            id='messag'
                            rows={5}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-cyan-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/25"
                        >
                            Send Message
                        </button>
                    </form>
                    <div id="form-message" ref={messageRef} className="mt-4 text-center hidden">
                        <p className="text-white/90 ">{`✨ Thank you for your message! I'll get back to you soon.`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
