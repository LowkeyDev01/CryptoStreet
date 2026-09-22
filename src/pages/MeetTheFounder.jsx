import { motion } from "framer-motion";

import {
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
} from "react-icons/fa6";
import Zoey from "../assets/zoey.png";

export default function MeetTheFounder() {

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
        <section
            id="founder"
            className="w-full overflow-hidden px-5 py-20 md:px-10 md:py-24"
        >
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-10">

                {/* LEFT / IMAGE */}
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
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: "easeOut",
                    }}
                    className="flex min-w-0 justify-center md:justify-start"
                >

                    <div className="aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-2xl bg-pink-50">
                            <img
                                src={Zoey}
                                alt="Zoey, Founder of Crypto Street"
                                className="h-full w-full object-cover"
                            />

                    </div>

                </motion.div>


                {/* RIGHT / CONTENT */}
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
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="flex items-center gap-3"
                    >

                        <div className="h-[1px] w-8 shrink-0 bg-pink-500"></div>

                        <p className="font-six text-[0.7rem] font-medium tracking-[0.2em] text-pink-500">
                            MEET THE FOUNDER
                        </p>

                    </motion.div>


                    {/* HEADING */}
                    <div className="mt-6 font-five text-[2.7rem] font-bold leading-[1] md:text-[3rem] lg:text-[3.3rem]">

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
                        >
                            Meet Zoey.
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
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                            className="text-pink-500"
                        >
                            Founder of Crypto Street.
                        </motion.p>

                    </div>


                    {/* QUOTE */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        className="mt-8 flex min-w-0 gap-4"
                    >

                        <p className="shrink-0 font-five text-[2.5rem] font-bold leading-none text-pink-500">
                            “
                        </p>

                        <p className="max-w-[650px] font-six text-sm leading-7 text-black/65 md:text-[0.85rem] lg:text-base">
                            I’m Zoey, founder of Crypto Street. I take Web3 products
                            beyond the screen and into the streets — meeting real
                            people, capturing honest reactions, and documenting what
                            adoption actually looks like.
                        </p>

                    </motion.div>


                    {/* SMALL LINE */}
                    <motion.div
                        initial={{
                            width: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            width: 40,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5,
                            ease: "easeOut",
                        }}
                        className="my-8 h-[1px] bg-black/10"
                    ></motion.div>


                    {/* EXTRA COPY */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.55,
                            ease: "easeOut",
                        }}
                        className="min-w-0"
                    >

                        <p className="font-five text-base font-bold md:text-[1rem] lg:text-lg">
                            500+ conversations. 15+ documented campaigns.
                        </p>

                        <p className="mt-3 max-w-[600px] font-six text-sm leading-6 text-black/55">
                            Crypto Street was built to close the gap between Web3
                            products and everyday users across Africa.
                        </p>

                    </motion.div>


                    {/* SOCIALS */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.65,
                            ease: "easeOut",
                        }}
                        className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 font-six text-xs text-black/60"
                    >

                        <motion.a
                            href="https://x.com/zoey_thefirst"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -2,
                            }}
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaXTwitter className="text-lg text-black" />
                            <p>Twitter</p>
                        </motion.a>


                        <div className="h-5 w-[1px] bg-black/10"></div>


                        <motion.a
                            href="https://www.instagram.com/zoey_thefirst1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -2,
                            }}
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaInstagram className="text-lg text-black" />
                            <p>Instagram</p>
                        </motion.a>


                        <div className="hidden h-5 w-[1px] bg-black/10 sm:block"></div>


                        <motion.a
                            href="https://www.linkedin.com/in/zoey-ola%F0%9F%8C%8E-b48512298"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -2,
                            }}
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaLinkedinIn className="text-lg text-black" />
                            <p>LinkedIn</p>
                        </motion.a>


                        <div className="h-5 w-[1px] bg-black/10"></div>


                        <motion.a
                            href="https://www.tiktok.com/@zoey_thefirst1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -2,
                            }}
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaTiktok className="text-lg text-black" />
                            <p>TikTok</p>
                        </motion.a>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}