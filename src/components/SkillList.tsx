import type { Skill } from '@utils/data';
import { motion } from 'framer-motion';
import SVG from 'react-inlinesvg';

interface Props {
    skills: Skill[];
}

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const SkillList = ({ skills }: Props) => {
    return (
        <ul className="w-full flex flex-wrap items-center justify-center relative gap-2 max-w-3xl">
            {skills.map(({ label, icon }, index) => (
                <motion.li
                    className="flex items-center justify-center gap-2 rounded-xl font-medium px-6 py-3 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
                    key={label}
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                >
                    {icon && <SVG className="w-16 h-16 p-4" src={`/asset/icon/${icon}.svg`} />}

                    {label}
                </motion.li>
            ))}
        </ul>
    );
};

export default SkillList;
