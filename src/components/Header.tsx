import { motion } from 'framer-motion';
import { links } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';

const Header = () => {
    const { activeSection, setClickedSection } = useActiveSection();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-screen p-4 flex justify-center">
            <motion.div
                className="relative w-fit max-w-[calc(100vw_-_2rem)] h-fit rounded-3xl sm:rounded-full shadow-lg border border-white dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: -0 }}
            >
                <nav className="relative w-full h-full p-2 flex">
                    <ul className="relative w-full h-full flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                        {links.map((link) => (
                            <li className="flex items-center justify-center relative" key={link}>
                                <a
                                    className={`flex items-center justify-center font-medium px-4 py-3 text-gray-500 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200 ${
                                        activeSection === link ? '!text-gray-950 dark:!text-gray-200' : ''
                                    }`}
                                    href={`#${link}`}
                                    onClick={() => setClickedSection(link)}
                                >
                                    {link}

                                    {link === activeSection && (
                                        <motion.span
                                            className="absolute inset-0 -z-10 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 !border-opacity-60"
                                            layoutId="activeSection"
                                            transition={{
                                                type: 'spring',
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
