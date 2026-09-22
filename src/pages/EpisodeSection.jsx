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

    return (
        <section
            id="episodes"
            className="min-h-screen w-full overflow-hidden px-5 py-20 md:px-10 md:py-24"
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[35%_1fr]">

                {/* LEFT */}
                <div className="flex min-w-0 flex-col">

                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-8 bg-pink-500"></div>

                        <p className="font-six text-[0.7rem] font-semibold tracking-wide text-pink-500">
                            LATEST EPISODES
                        </p>
                    </div>

                    <div className="mt-8 font-five text-[2.2rem] font-bold leading-[1.05] md:text-[3rem]">
                        <p>Real Conversations.</p>

                        <p className="text-pink-500">
                            Street to Screen.
                        </p>
                    </div>

                    <p className="mt-6 max-w-[480px] font-six text-[0.8rem] leading-6 text-black/60 md:text-sm">
                        From the people to the culture, we sit down with the voices
                        shaping Web3 in Africa — founders, creators, builders, and
                        everyday users.
                    </p>

                </div>

                {/* RIGHT */}
                <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">

                    <RecentEpisode
                        episode="EP 07"
                        title="Web3 in Africa: Real People, Real Stories"
                        description="We hit the streets to hear directly from the people using, building, and believing in Web3 across Africa."
                        duration="32 min"
                    />

                    <div className="flex min-w-0 flex-col">

                        {/* VIEW ALL */}
                        <div className="order-2 mt-8 flex justify-start md:order-none md:mb-7 md:mt-0 md:justify-end">
                            <a
                                href="#"
                                className="flex items-center gap-3 rounded-full border border-pink-500 px-5 py-2 font-six text-[0.65rem] font-semibold text-pink-500 transition-all duration-300 hover:bg-pink-500 hover:text-white"
                            >
                                View All Episodes
                                <GoArrowRight />
                            </a>
                        </div>

                        {/* EPISODE LIST */}
                        <div className="order-1 md:order-none">
                            {episodes.map((episode, index) => (
                                <EpisodeCard
                                    key={index}
                                    episode={episode.episode}
                                    title={episode.title}
                                    duration={episode.duration}
                                />
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}