import { motion } from 'framer-motion';

interface Props {
    skills: string[];
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
            {skills.map((skill, index) => (
                <motion.li
                    className="rounded-xl font-medium px-6 py-3 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
                    key={skill}
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    );
};

export default SkillList;
