import type { Experience } from '@utils/data';
import { motion } from 'framer-motion';
import SVG from 'react-inlinesvg';

interface Props {
    experience: Experience[];
}

const Timeline = ({ experience }: Props) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    return (
        <div className="relative w-full flex flex-col items-center justify-center gap-8 max-w-5xl pt-12 overflow-x-hidden">
            <div className="top-0 absolute h-full w-16 flex justify-center left-0 lg:left-[unset]">
                <div className="h-full w-[0.4rem] rounded-full bg-gray-200 dark:bg-gray-700 opacity-70" />
            </div>

            {experience.map(({ title, place, date, icon, description }, index) => (
                <div
                    key={index}
                    className="grid-areas-timeline-mobile lg:grid-areas-timeline lg:even:grid-areas-timeline-inverted w-full grid grid-cols-[4rem_minmax(0,_1fr)] lg:grid-cols-[minmax(0,_1fr)_4rem_minmax(0,_1fr)] gap-4 group"
                >
                    <motion.div
                        className="grid-in-job w-full h-fit p-4 flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
                        initial={{ opacity: 0, x: index % 2 === 0 && !isMobile ? -200 : 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-bold capitalize">{title}</h3>

                        <p>{place}</p>

                        <p className="flex lg:hidden text-gray-400 dark:text-gray-400">{date}</p>

                        <div className={description.length > 0 ? 'mt-4' : 'hidden'}>
                            {description.map((item, index) => (
                                <p key={index} className="font-normal text-gray-600 dark:text-gray-400">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    <SVG
                        className="grid-in-icon w-16 h-16 p-4 rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
                        src={`/asset/icon/${icon}.svg`}
                    />

                    <div className="hidden lg:flex grid-in-date w-full h-16 items-center justify-end group-even:justify-start">
                        <p className="font-normal text-gray-500 dark:text-gray-400">{date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
