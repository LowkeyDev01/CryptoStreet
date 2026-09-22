import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { IoMdMenu, IoMdClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

import Logo from "../assets/Logo.png";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        {
            name: "Home",
            id: "home",
        },
        {
            name: "About",
            id: "about",
        },
        {
            name: "Episodes",
            id: "episodes",
        },
        {
            name: "Meet the Founder",
            id: "founder",
        },
        {
            name: "Contact",
            id: "contact",
        },
    ];


    const closeMenu = () => {
        setMenuOpen(false);
    };


    useEffect(() => {

        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);


        const observer = new IntersectionObserver(
            (entries) => {

                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );


                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.id
                    );
                }

            },
            {
                root: null,
                rootMargin: "-25% 0px -55% 0px",
                threshold: [0, 0.1, 0.25, 0.5, 0.75],
            }
        );


        sections.forEach((section) => {
            observer.observe(section);
        });


        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);


    return (
        <nav className="fixed top-0 z-100 w-full font-six backdrop-blur-md">

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

                    {navItems.map((item) => (

                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`relative whitespace-nowrap py-2 transition-colors duration-300 ${
                                activeSection === item.id
                                    ? "text-pink-500"
                                    : "hover:text-pink-500"
                            }`}
                        >

                            <p>
                                {item.name}
                            </p>


                            {/* ACTIVE LINE */}
                            {activeSection === item.id && (

                                <motion.div
                                    layoutId="activeNavLine"
                                    className="absolute bottom-0 left-0 h-[1.5px] w-full bg-pink-500"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                />

                            )}

                        </a>

                    ))}

                </div>


                {/* RIGHT */}
                <div className="flex items-center justify-end">


                    {/* DESKTOP CTA */}
                    <a
                        href="#contact"
                        className="hidden items-center gap-1 rounded-full bg-pink-500 px-6 py-2 text-xs text-white transition-transform duration-300 hover:scale-[1.03] md:flex"
                    >
                        <p>
                            Partner with Us
                        </p>

                        <GoArrowUpRight />
                    </a>


                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl md:hidden"
                    >

                        {menuOpen ? (
                            <IoMdClose />
                        ) : (
                            <IoMdMenu />
                        )}

                    </button>

                </div>

            </div>


            {/* MOBILE MENU */}
            <motion.div
                initial={false}
                animate={{
                    height: menuOpen ? "auto" : 0,
                    opacity: menuOpen ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="overflow-hidden bg-white md:hidden"
            >

                <div className="flex flex-col px-5 pb-6 pt-4 text-sm">

                    {navItems.map((item) => (

                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={closeMenu}
                            className={`relative border-b border-black/5 py-4 transition-colors duration-200 ${
                                activeSection === item.id
                                    ? "text-pink-500"
                                    : "text-black"
                            }`}
                        >

                            <p className="w-fit">
                                {item.name}
                            </p>


                            {/* MOBILE ACTIVE LINE */}
                            {activeSection === item.id && (

                                <motion.div
                                    layoutId="mobileActiveNavLine"
                                    className="absolute bottom-0 left-0 h-[2px] w-10 bg-pink-500"
                                />

                            )}

                        </a>

                    ))}


                    {/* MOBILE CTA */}
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="mt-5 flex w-fit items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-xs text-white"
                    >
                        <p>
                            Partner with Us
                        </p>

                        <GoArrowUpRight />
                    </a>

                </div>

            </motion.div>

        </nav>
    );
}