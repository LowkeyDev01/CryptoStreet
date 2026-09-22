import {
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
} from "react-icons/fa6";

export default function MeetTheFounder() {
    return (
        <section
            id="founder"
            className="w-full overflow-hidden px-5 py-20 md:px-10 md:py-24"
        >
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-10">

                {/* LEFT / IMAGE */}
                <div className="flex min-w-0 justify-center md:justify-start">

                    <div className="aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-2xl bg-pink-50">

                        {/* IMAGE GOES HERE */}

                    </div>

                </div>


                {/* RIGHT / CONTENT */}
                <div className="flex min-w-0 flex-col">

                    {/* SECTION LABEL */}
                    <div className="flex items-center gap-3">

                        <div className="h-[1px] w-8 shrink-0 bg-pink-500"></div>

                        <p className="font-six text-[0.7rem] font-medium tracking-[0.2em] text-pink-500">
                            MEET THE FOUNDER
                        </p>

                    </div>


                    {/* HEADING */}
                    <div className="mt-6 font-five text-[2.7rem] font-bold leading-[1] md:text-[3rem] lg:text-[3.3rem]">

                        <p>
                            Meet Zoey.
                        </p>

                        <p className="text-pink-500">
                            Founder of Crypto Street.
                        </p>

                    </div>


                    {/* QUOTE */}
                    <div className="mt-8 flex min-w-0 gap-4">

                        <p className="shrink-0 font-five text-[2.5rem] font-bold leading-none text-pink-500">
                            “
                        </p>

                        <p className="max-w-[650px] font-six text-sm leading-7 text-black/65 md:text-[0.85rem] lg:text-base">
                            I’m Zoey, founder of Crypto Street. I take Web3 products
                            beyond the screen and into the streets — meeting real
                            people, capturing honest reactions, and documenting what
                            adoption actually looks like.
                        </p>

                    </div>


                    {/* SMALL LINE */}
                    <div className="my-8 h-[1px] w-10 bg-black/10"></div>


                    {/* EXTRA COPY */}
                    <div className="min-w-0">

                        <p className="font-five text-base font-bold md:text-[1rem] lg:text-lg">
                            500+ conversations. 15+ documented campaigns.
                        </p>

                        <p className="mt-3 max-w-[600px] font-six text-sm leading-6 text-black/55">
                            Crypto Street was built to close the gap between Web3
                            products and everyday users across Africa.
                        </p>

                    </div>


                    {/* SOCIALS */}
                    <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 font-six text-xs text-black/60">

                        <a
                            href="#"
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaXTwitter className="text-lg text-black" />
                            <p>Twitter</p>
                        </a>

                        <div className="h-5 w-[1px] bg-black/10"></div>

                        <a
                            href="#"
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaInstagram className="text-lg text-black" />
                            <p>Instagram</p>
                        </a>

                        <div className="hidden h-5 w-[1px] bg-black/10 sm:block"></div>

                        <a
                            href="#"
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaLinkedinIn className="text-lg text-black" />
                            <p>LinkedIn</p>
                        </a>

                        <div className="h-5 w-[1px] bg-black/10"></div>

                        <a
                            href="#"
                            className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-500"
                        >
                            <FaTiktok className="text-lg text-black" />
                            <p>TikTok</p>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}