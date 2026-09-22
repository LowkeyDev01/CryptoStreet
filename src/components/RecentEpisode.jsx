import { FaRegClock, FaPlay } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export default function RecentEpisode({
    episode,
    title,
    description,
    duration,
}) {
    return (
        <div className="w-full md:w-9/10 min-w-0 overflow-hidden rounded-2xl bg-[#071019]">

            {/* IMAGE PLACEHOLDER */}
            <div className="relative h-[260px] w-full bg-pink-50 md:h-[290px]">

                <p className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1.5 font-six text-[0.6rem] font-semibold text-white">
                    {episode}
                </p>

            </div>

            {/* CONTENT */}
            <div className="p-5 text-white md:p-6">

                <p className="font-six text-[0.65rem] font-semibold tracking-wider text-pink-500">
                    RECENT EPISODE
                </p>

                <p className="mt-3 font-five text-[1.4rem] font-bold leading-tight">
                    {title}
                </p>

                <p className="mt-4 font-six text-[0.8rem] leading-5 text-white/70">
                    {description}
                </p>

                <div className="mt-6 flex items-center gap-4">

                    <div className="flex items-center gap-2 font-six text-[0.7rem] text-white/80">
                        <FaRegClock />
                        <p>{duration}</p>
                    </div>

                    <div className="h-4 w-[1px] bg-white/30"></div>

                    <a
                        href="#"
                        className="flex items-center gap-2 font-six text-[0.7rem] font-semibold text-pink-500"
                    >
                        <FaPlay className="text-[0.5rem]" />
                        Listen Now
                        <GoArrowRight />
                    </a>

                </div>

            </div>

        </div>
    );
}