import { motion } from "framer-motion";

import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";

export default function About() {

    const stats = [
        {
            icon: <HiOutlineUsers />,
            number: "500+",
            label: "STREET ENGAGEMENTS",
        },
        {
            icon: <MdOutlinePhoneIphone />,
            number: "200k+",
            label: "ONLINE IMPRESSIONS",
        },
        {
            icon: <IoPlayOutline />,
            number: "15+",
            label: "EPISODES",
        },
    ];


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
            id="about"
            className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden md:grid-cols-[60%_40%]"
        >

            {/* BACKGROUND TEXT */}
            <motion.p
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
                className="pointer-events-none absolute -bottom-2 left-2 font-five text-[5rem] font-bold leading-none text-black/[0.025] md:bottom-0 md:left-5 md:text-[10rem]"
            >
                AFRICA
            </motion.p>


            {/* LEFT */}
            <div className="relative z-10 flex flex-col px-5 pt-20 font-five md:justify-center md:pl-10 md:pr-10 md:pt-0">

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
                    className="mb-5 flex items-center gap-3"
                >

                    <div className="h-[1px] w-8 bg-pink-500"></div>

                    <p className="font-six text-[0.7rem] font-medium tracking-[0.2em] text-pink-500">
                        ABOUT CRYPTO STREET
                    </p>

                </motion.div>


                {/* HEADING */}
                <div className="text-[2.5rem] font-bold leading-[1.05] md:text-[3rem]">

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
                        Documenting ground-level
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
                    >
                        Web3 Adoption from the
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
                        Streets of Africa.
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
                        delay: 0.4,
                        ease: "easeOut",
                    }}
                    className="mt-6 max-w-[600px] font-six text-sm font-normal leading-6 text-black/70 md:mt-5"
                >
                    The First Platform Documenting real Web3 adoption on african
                    streets. We bring your products to everyday people, capture
                    authentic Reactions, and prove what really works.
                </motion.p>

            </div>


            {/* RIGHT / STATS */}
            <div className="relative z-10 flex flex-col gap-4 px-5 pb-20 pt-10 font-five md:justify-center md:gap-5 md:py-0 md:pl-16 md:pr-0">

                {stats.map((stat, index) => (

                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15 + index * 0.12,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            y: -4,
                        }}
                        className="flex w-full max-w-[320px] items-center gap-5 rounded-xl bg-pink-50 px-5 py-4 md:px-6"
                    >

                        {/* ICON */}
                        <div className="shrink-0 text-[1.8rem] text-pink-500 md:text-[2rem]">
                            {stat.icon}
                        </div>


                        {/* STAT */}
                        <div className="flex flex-col">

                            <p className="text-[1.7rem] font-bold leading-none text-black md:text-[2rem]">
                                {stat.number}
                            </p>

                            <p className="mt-2 text-[0.6rem] tracking-[0.2em] text-slate-500 md:text-[0.65rem]">
                                {stat.label}
                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}   