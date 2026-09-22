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

    return (
        <section
            id="about"
            className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden md:grid-cols-[60%_40%]"
        >

            {/* BACKGROUND TEXT */}
            <p className="pointer-events-none absolute -bottom-2 left-2 font-five text-[5rem] font-bold leading-none text-black/[0.025] md:bottom-0 md:left-5 md:text-[10rem]">
                AFRICA
            </p>


            {/* LEFT */}
            <div className="relative z-10 flex flex-col px-5 pt-20 font-five md:justify-center md:pl-10 md:pr-10 md:pt-0">

                {/* SECTION LABEL */}
                <div className="mb-5 flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-pink-500"></div>

                    <p className="text-xs font-normal text-pink-500 md:text-sm">
                        ABOUT CRYPTO STREET
                    </p>
                </div>


                {/* HEADING */}
                <div className="text-[2.5rem] font-bold leading-[1.05] md:text-[3rem]">
                    <p>Documenting ground-level</p>

                    <p>
                        Web3 Adoption from the
                    </p>

                    <p className="text-pink-500">
                        Streets of Africa.
                    </p>
                </div>


                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[600px] font-six text-sm font-normal leading-6 text-black/70 md:mt-5">
                    The First Platform Documenting real Web3 adoption on african
                    streets. We bring your products to everyday people, capture
                    authentic Reactions, and prove what really works.
                </p>

            </div>


            {/* RIGHT / STATS */}
            <div className="relative z-10 flex flex-col gap-4 px-5 pb-20 pt-10 font-five md:justify-center md:gap-5 md:py-0 md:pl-16 md:pr-0">

                {stats.map((stat, index) => (
                    <div
                        key={index}
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

                    </div>
                ))}

            </div>

        </section>
    );
}