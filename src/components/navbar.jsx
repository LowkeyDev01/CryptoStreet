import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 z-100 w-full bg-white/10 font-six backdrop-blur-md">

            {/* NAVBAR */}
            <div className="grid w-full grid-cols-2 items-center px-5 py-2 md:grid-cols-3 md:px-10">

                {/* LOGO */}
                <div className="flex items-center">
                    <a href="#home">
                        <img
                            src={Logo}
                            alt="Crypto Street"
                            className="w-16"
                        />
                    </a>
                </div>


                {/* DESKTOP LINKS */}
                <div className="hidden items-center justify-center gap-9 text-xs text-black/90 md:flex">

                    <a
                        href="#home"
                        className="text-pink-500"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="duration-200 hover:text-pink-500"
                    >
                        About
                    </a>

                    <a
                        href="#episodes"
                        className="duration-200 hover:text-pink-500"
                    >
                        Episodes
                    </a>

                    <a
                        href="#founder"
                        className="whitespace-nowrap duration-200 hover:text-pink-500"
                    >
                        Meet the Founder
                    </a>

                    <a
                        href="#contact"
                        className="duration-200 hover:text-pink-500"
                    >
                        Contact
                    </a>

                </div>


                {/* RIGHT */}
                <div className="flex items-center justify-end">

                    {/* DESKTOP CTA */}
                    <a
                        href="#contact"
                        className="hidden items-center gap-1 rounded-full bg-pink-500 px-6 py-2 text-xs text-white transition-transform duration-300 hover:scale-[1.03] md:flex"
                    >
                        <p>Partner with Us</p>
                        <GoArrowUpRight />
                    </a>


                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl md:hidden"
                    >
                        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>

                </div>

            </div>


            {/* MOBILE MENU */}
            <div
                className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
                    menuOpen
                        ? "max-h-[500px] border-t border-black/5"
                        : "max-h-0"
                }`}
            >
                <div className="flex flex-col px-5 pb-6 pt-4 text-sm">

                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="border-b border-black/5 py-4 text-pink-500"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        onClick={closeMenu}
                        className="border-b border-black/5 py-4"
                    >
                        About
                    </a>

                    <a
                        href="#episodes"
                        onClick={closeMenu}
                        className="border-b border-black/5 py-4"
                    >
                        Episodes
                    </a>

                    <a
                        href="#founder"
                        onClick={closeMenu}
                        className="border-b border-black/5 py-4"
                    >
                        Meet the Founder
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="py-4"
                    >
                        Contact
                    </a>


                    {/* MOBILE CTA */}
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="mt-3 flex w-fit items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-xs text-white"
                    >
                        <p>Partner with Us</p>
                        <GoArrowUpRight />
                    </a>

                </div>
            </div>

        </nav>
    );
}