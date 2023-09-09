import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="relative z-50 flex w-screen justify-center">
            <motion.div
                className="fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: -0 }}
            ></motion.div>
        </header>
    );
};

export default Header;
