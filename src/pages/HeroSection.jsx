import { FaRegPlayCircle } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDown } from "react-icons/go";
import HeroImage from "../assets/HeroImage.png";
import Inter from "../assets/interview.png";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden md:grid md:h-screen md:grid-cols-[55%_45%]">

            {/* DESKTOP BACKGROUND */}
            <img
                src={HeroImage}
                alt=""
                className="absolute inset-0 hidden h-full w-full object-cover md:block"
            />

            {/* HERO CONTENT */}
            <div className="relative z-10 flex flex-col px-5 pt-30 md:justify-center md:px-0 md:pt-0 md:pl-10">

                {/* HEADING */}
                <div className="font-five text-[2.9rem] font-bold leading-[0.95] sm:text-[4rem] md:text-[4.9em]">

                    <h1>Taking Web3</h1>

                    <div className="mt-1 flex items-baseline gap-2 md:gap-3">
                        <p>to the</p>

                        <p className="text-pink-500">
                            Streets.
                        </p>
                    </div>

                </div>

                {/* SUBTEXT */}
                <p className="mt-6 max-w-xl font-six text-sm font-normal leading-relaxed text-black/80 md:mt-5 md:text-base">
                    Bringing Web3 products face-to-face with the people they are built for.
                    <br className="hidden md:block" />
                    {" "}Creating real conversations that take Web3 beyond the screen.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex items-center gap-7 md:gap-9">

                    <a
                        href="#episodes"
                        className="flex items-center gap-2 rounded-full bg-pink-500 px-6 py-2.5 text-xs font-normal text-white transition-all duration-300 hover:scale-[1.03]"
                    >
                        <FaRegPlayCircle />
                        Watch Episodes
                    </a>

                    <a
                        href="#about"
                        className="flex items-center gap-1 border-b border-black py-2.5 text-xs font-normal"
                    >
                        Learn More
                        <GoArrowUpRight />
                    </a>

                </div>

            </div>

            {/* MOBILE IMAGE */}
            <div className="relative mt-12 h-[55vh] w-full md:hidden">
                <img
                    src={Inter}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>

            {/* DESKTOP RIGHT */}
            <div className="relative z-10 hidden md:block"></div>

            {/* SCROLL INDICATOR */}
            <a
                href="#about"
                className="absolute bottom-7 left-10 z-10 hidden items-center gap-2 font-six text-[0.6rem] tracking-[0.15em] text-black/40 transition-colors duration-300 hover:text-pink-500 md:flex"
            >
                SCROLL TO EXPLORE
                <GoArrowDown className="text-sm" />
            </a>

        </section>
    );
}