import { motion } from "framer-motion";

import {
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
} from "react-icons/fa6";

import {
    FiMail,
    FiMapPin,
} from "react-icons/fi";

import { GoArrowRight, GoArrowUp } from "react-icons/go";
import Logo from "../assets/Logo.png";

export default function Contact() {

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <>
            <section
                id="contact"
                className="w-full overflow-hidden px-5 pb-20 pt-20 md:px-10 md:pb-24 md:pt-24"
            >

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

                    {/* LEFT */}
                    <div className="flex min-w-0 flex-col">

                        {/* SECTION LABEL */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="flex items-center gap-3"
                        >

                            <div className="h-[1px] w-8 bg-pink-500"></div>

                            <p className="font-six text-[0.7rem] font-medium tracking-[0.2em] text-pink-500">
                                GET IN TOUCH
                            </p>

                        </motion.div>


                        {/* HEADING */}
                        <div className="mt-6 font-five text-[2.7rem] font-bold leading-[1] md:text-[3.4rem]">

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                Let’s Build What’s
                            </motion.p>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "easeOut",
                                }}
                                className="text-pink-500"
                            >
                                Next, Together.
                            </motion.p>

                        </div>


                        {/* DESCRIPTION */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                            className="mt-7 max-w-[520px] font-six text-sm leading-6 text-black/60 md:text-[0.9rem]"
                        >
                            Have a question, a collaboration idea, or just want to say hello?
                            We’d love to hear from you. Drop us a message and we’ll get
                            back to you as soon as possible.
                        </motion.p>


                        {/* CONTACT DETAILS */}
                        <div className="mt-10 flex flex-col gap-7">

                            {/* EMAIL */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: 0.4,
                                    ease: "easeOut",
                                }}
                                className="flex items-center gap-4"
                            >

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-lg text-pink-500">
                                    <FiMail />
                                </div>

                                <div className="font-six">
                                    <p className="text-xs font-semibold">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:hello@cryptostreet.africa"
                                        className="mt-1 block text-xs text-black/50 transition-colors duration-200 hover:text-pink-500"
                                    >
                                        hello@cryptostreet.africa
                                    </a>
                                </div>

                            </motion.div>


                            {/* LOCATION */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: 0.5,
                                    ease: "easeOut",
                                }}
                                className="flex items-center gap-4"
                            >

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-lg text-pink-500">
                                    <FiMapPin />
                                </div>

                                <div className="font-six">
                                    <p className="text-xs font-semibold">
                                        Location
                                    </p>

                                    <p className="mt-1 text-xs text-black/50">
                                        Lagos, Nigeria
                                    </p>
                                </div>

                            </motion.div>


                            {/* SOCIALS */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: 0.6,
                                    ease: "easeOut",
                                }}
                                className="flex items-start gap-4"
                            >

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-lg text-pink-500">
                                    <GoArrowRight className="-rotate-45" />
                                </div>

                                <div className="font-six">

                                    <p className="text-xs font-semibold">
                                        Follow Us
                                    </p>

                                    <div className="mt-3 flex items-center gap-5 text-lg">

                                        <motion.a
                                            href="#"
                                            whileHover={{ y: -2 }}
                                            className="transition-colors duration-200 hover:text-pink-500"
                                        >
                                            <FaXTwitter />
                                        </motion.a>

                                        <motion.a
                                            href="#"
                                            whileHover={{ y: -2 }}
                                            className="transition-colors duration-200 hover:text-pink-500"
                                        >
                                            <FaInstagram />
                                        </motion.a>

                                        <motion.a
                                            href="#"
                                            whileHover={{ y: -2 }}
                                            className="transition-colors duration-200 hover:text-pink-500"
                                        >
                                            <FaLinkedinIn />
                                        </motion.a>

                                        <motion.a
                                            href="#"
                                            whileHover={{ y: -2 }}
                                            className="transition-colors duration-200 hover:text-pink-500"
                                        >
                                            <FaTiktok />
                                        </motion.a>

                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </div>


                    {/* RIGHT / FORM */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.75,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="min-w-0 rounded-3xl bg-gray-50 p-5 md:p-8"
                    >

                        <p className="font-six text-[0.7rem] font-medium tracking-[0.2em] text-pink-500">
                            SEND US A MESSAGE
                        </p>

                        <p className="mt-3 font-five text-[1.8rem] font-bold md:text-[2rem]">
                            We’re all ears.
                        </p>

                        <p className="mt-2 max-w-[520px] font-six text-xs leading-5 text-black/55 md:text-sm">
                            Whether it’s a partnership, a media inquiry, or general
                            feedback, fill out the form below and we’ll be in touch.
                        </p>


                        {/* FORM */}
                        <form className="mt-7 flex flex-col gap-4">

                            {/* NAME + EMAIL */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div className="rounded-xl border border-black/10 bg-white px-4 py-3">

                                    <label
                                        htmlFor="name"
                                        className="font-six text-[0.7rem] font-semibold"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        className="mt-1 w-full bg-transparent font-six text-xs outline-none placeholder:text-black/30"
                                    />

                                </div>


                                <div className="rounded-xl border border-black/10 bg-white px-4 py-3">

                                    <label
                                        htmlFor="email"
                                        className="font-six text-[0.7rem] font-semibold"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@company.com"
                                        className="mt-1 w-full bg-transparent font-six text-xs outline-none placeholder:text-black/30"
                                    />

                                </div>

                            </div>


                            {/* SUBJECT */}
                            <div className="rounded-xl border border-black/10 bg-white px-4 py-3">

                                <label
                                    htmlFor="subject"
                                    className="font-six text-[0.7rem] font-semibold"
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    defaultValue=""
                                    className="mt-1 w-full cursor-pointer bg-transparent font-six text-xs text-black/50 outline-none"
                                >
                                    <option value="" disabled>
                                        What’s this about?
                                    </option>

                                    <option value="partnership">
                                        Partnership
                                    </option>

                                    <option value="media">
                                        Media Inquiry
                                    </option>

                                    <option value="general">
                                        General Inquiry
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>
                                </select>

                            </div>


                            {/* MESSAGE */}
                            <div className="rounded-xl border border-black/10 bg-white px-4 py-3">

                                <label
                                    htmlFor="message"
                                    className="font-six text-[0.7rem] font-semibold"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Tell us more..."
                                    className="mt-2 w-full resize-none bg-transparent font-six text-xs leading-5 outline-none placeholder:text-black/30"
                                ></textarea>

                            </div>


                            {/* SUBMIT */}
                            <motion.button
                                type="submit"
                                whileHover={{
                                    scale: 1.01,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="mt-1 flex w-full items-center justify-center gap-3 rounded-full bg-pink-500 px-6 py-3 font-six text-xs font-medium text-white transition-colors duration-300 hover:bg-pink-600"
                            >
                                <p>Send Message</p>
                                <GoArrowRight className="text-base" />
                            </motion.button>

                        </form>

                    </motion.div>

                </div>

            </section>


            {/* FOOTER */}
            <motion.footer
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="w-full border-t border-black/5 px-5 py-8 md:px-10"
            >

                <div className="flex flex-col gap-8">

                    {/* TOP */}
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                        {/* BRAND */}
                        <a href="#home" className="w-fit">
                            <img
                                src={Logo}
                                alt="Crypto Street"
                                className="w-16"
                            />
                        </a>


                        {/* LINKS */}
                        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 font-six text-xs text-black/60">

                            <a
                                href="#home"
                                className="transition-colors duration-200 hover:text-pink-500"
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="transition-colors duration-200 hover:text-pink-500"
                            >
                                About
                            </a>

                            <a
                                href="#episodes"
                                className="transition-colors duration-200 hover:text-pink-500"
                            >
                                Episodes
                            </a>

                            <a
                                href="#founder"
                                className="transition-colors duration-200 hover:text-pink-500"
                            >
                                Meet the Founder
                            </a>

                            <a
                                href="#contact"
                                className="transition-colors duration-200 hover:text-pink-500"
                            >
                                Contact
                            </a>

                        </div>


                        {/* BACK TO TOP */}
                        <motion.a
                            href="#"
                            whileHover={{
                                y: -2,
                            }}
                            className="flex w-fit items-center gap-2 font-six text-[0.65rem] tracking-wide text-black/50 transition-colors duration-200 hover:text-pink-500"
                        >
                            BACK TO TOP

                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10">
                                <GoArrowUp />
                            </div>
                        </motion.a>

                    </div>


                    {/* BOTTOM */}
                    <div className="flex flex-col gap-4 border-t border-black/5 pt-6 font-six text-[0.65rem] text-black/40 sm:flex-row sm:items-center sm:justify-between">

                        <p>
                            © 2026 Crypto Street. All rights reserved.
                        </p>

                        <p>
                            Taking Web3 to the Streets.
                        </p>

                    </div>

                </div>

            </motion.footer>

        </>
    );
}