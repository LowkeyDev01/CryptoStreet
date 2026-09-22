import { FaPlay, FaRegClock } from "react-icons/fa";

export default function EpisodeCard({
    episode,
    title,
    duration,
}) {
    return (
        <div className="flex min-w-0 items-center gap-4 border-b border-black/10 py-4 first:pt-0">

            {/* IMAGE PLACEHOLDER */}
            <div className="h-[78px] w-[90px] shrink-0 rounded-xl bg-pink-50"></div>

            {/* CONTENT */}
            <div className="flex min-w-0 flex-1 flex-col">

                <p className="mb-2 w-fit rounded-full bg-pink-500 px-2.5 py-1 font-six text-[0.55rem] font-semibold text-white">
                    {episode}
                </p>

                <p className="font-five text-[0.78rem] font-bold leading-[1.35] md:text-sm">
                    {title}
                </p>

                <div className="mt-2 flex items-center gap-2 font-six text-[0.65rem] text-black/40">
                    <FaRegClock />
                    <p>{duration}</p>
                </div>

            </div>

            {/* PLAY */}
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500 text-[0.6rem] text-white transition-transform duration-300 hover:scale-110">
                <FaPlay className="ml-[1px]" />
            </button>

        </div>
    );
}