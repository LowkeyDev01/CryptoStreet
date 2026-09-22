import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import RecentEpisode from "../components/RecentEpisode";
import EpisodeCard from "../components/EpisodeCard";

export default function EpisodeSection() {

    const episodes = [
        {
            episode: "EP 06",
            title: "Building the Next Generation of Web3",
            duration: "28 min",
        },
        {
            episode: "EP 05",
            title: "Creators, Communities and Ownership",
            duration: "26 min",
        },
        {
            episode: "EP 04",
            title: "The Future of Digital Identity in Africa",
            duration: "31 min",
        },
        {
            episode: "EP 03",
            title: "From Web2 to Web3: The Transition",
            duration: "24 min",
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
            id="episodes"
            className="min-h-screen w-full overflow-hidden px-5 py-20 md:px-10 md:py-24"
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[35%_1fr]">

                {/* LEFT */}
                <div className="flex min-w-0 flex-col">

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
                        className="flex items-center gap-4"
                    >
                        <div className="h-[1px] w-8 bg-pink-500"></div>

                        <p className="font-six text-[0.7rem] font-semibold tracking-wide text-pink-500">
                            LATEST EPISODES
                        </p>
                    </motion.div>


                    <div className="mt-8 font-five text-[2.2rem] font-bold leading-[1.05] md:text-[3rem]">

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
                            Real Conversations.
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
                            Street to Screen.
                        </motion.p>

                    </div>


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
                        className="mt-6 max-w-[480px] font-six text-[0.8rem] leading-6 text-black/60 md:text-sm"
                    >
                        From the people to the culture, we sit down with the voices
                        shaping Web3 in Africa — founders, creators, builders, and
                        everyday users.
                    </motion.p>

                </div>


                {/* RIGHT */}
                <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">

                    {/* RECENT EPISODE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
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
                            duration: 0.7,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <RecentEpisode
                            episode="EP 07"
                            title="Web3 in Africa: Real People, Real Stories"
                            description="We hit the streets to hear directly from the people using, building, and believing in Web3 across Africa."
                            duration="32 min"
                        />
                    </motion.div>


                    <div className="flex min-w-0 flex-col">

                        {/* VIEW ALL */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.55,
                                ease: "easeOut",
                            }}
                            className="order-2 mt-8 flex justify-start md:order-none md:mb-7 md:mt-0 md:justify-end"
                        >
                            <motion.a
                                href="#"
                                whileHover={{
                                    scale: 1.03,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="flex items-center gap-3 rounded-full border border-pink-500 px-5 py-2 font-six text-[0.65rem] font-semibold text-pink-500 transition-colors duration-300 hover:bg-pink-500 hover:text-white"
                            >
                                View All Episodes
                                <GoArrowRight />
                            </motion.a>
                        </motion.div>


                        {/* EPISODE LIST */}
                        <div className="order-1 md:order-none">

                            {episodes.map((episode, index) => (

                                <motion.div
                                    key={index}
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
                                        amount: 0.4,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: 0.2 + index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <EpisodeCard
                                        episode={episode.episode}
                                        title={episode.title}
                                        duration={episode.duration}
                                    />
                                </motion.div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}