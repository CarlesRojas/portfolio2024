import { motion } from "framer-motion";
import { links, type LinkId } from "../data";
import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const Header = () => {
    const { activeSection, setClickedSection } = useActiveSection();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-screen p-4 flex justify-center">
        <motion.div
            className="relative w-fit max-w-[calc(100vw_-_2rem)] h-fit border rounded-3xl sm:rounded-full border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-md dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: -0 }}
        >
            <nav className="relative w-full h-full p-2 flex">
            <ul className="relative w-full h-full flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                {links.map((link) => (
                    <li
                        className="flex items-center justify-center relative"
                        key={link}
                    >
                        <a
                        className={`flex items-center justify-center text-sm font-medium px-4 py-3 text-gray-500 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200 ${activeSection === link ? "!text-gray-950 dark:!text-gray-200" : ""}`}
                        href={`#${link}`}
                        onClick={() => setClickedSection(link)}
                        >
                        {link}

                        {link === activeSection && (
                            <motion.span
                                className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                layoutId="activeSection"
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
                            ></motion.span>
                        )}
                        </a>
                    </li>
                ))}
            </ul>
            </nav>
        </motion.div>
        </header>
    );
};

export default Header;
