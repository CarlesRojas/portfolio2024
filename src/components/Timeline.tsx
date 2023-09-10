import type { Experience } from '@utils/data';
import { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Props {
    experience: Experience[];
}

const Timeline = ({ experience }: Props) => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center gap-8 max-w-5xl pt-12">
            <div className="top-0 absolute h-full w-16 flex justify-center left-0 lg:left-[unset]">
                <div className="h-full w-[0.4rem] rounded-full bg-gray-200 dark:bg-gray-700 opacity-70" />
            </div>

            {experience.map(({ title, place, date, icon, description }, index) => (
                <div
                    key={index}
                    className="grid-areas-timeline-mobile lg:grid-areas-timeline lg:even:grid-areas-timeline-inverted w-full grid grid-cols-[4rem_minmax(0,_1fr)] lg:grid-cols-[minmax(0,_1fr)_4rem_minmax(0,_1fr)] gap-4 group"
                >
                    <div className="grid-in-job w-full h-fit p-4 flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm">
                        <h3 className="font-bold capitalize">{title}</h3>

                        <p>{place}</p>

                        <p className="text-gray-400 dark:text-gray-400">{date}</p>

                        <div className={description.length > 0 ? 'mt-4' : 'hidden'}>
                            {description.map((item, index) => (
                                <p key={index} className="font-normal text-gray-600 dark:text-gray-400">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <SVG
                        className="grid-in-icon w-16 h-16 p-4 rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
                        src={`/assets/icon/${icon}.svg`}
                    />

                    <div className="hidden lg:flex grid-in-date w-full h-16 items-center justify-end group-even:justify-start">
                        <p className="font-normal text-gray-500 dark:text-gray-400">{date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const TimelineOld = ({ experience }: Props) => {
    // console.log(experience);
    return (
        <VerticalTimeline lineColor="">
            {experience.map(({ title, place, date, icon }, index) => (
                <Fragment key={index}>
                    <VerticalTimelineElement
                        // contentStyle={{
                        //     background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                        //     boxShadow: 'none',
                        //     border: '1px solid rgba(0, 0, 0, 0.05)',
                        //     textAlign: 'left',
                        //     padding: '1.3rem 2rem',
                        // }}
                        // contentArrowStyle={{
                        //     borderRight:
                        //         theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255, 255, 255, 0.5)',
                        // }}
                        date={date}
                        icon={<SVG src={`/assets/icon/${icon}.svg`} className="w-6 h-6 color-white" />}
                        // iconStyle={{
                        //     background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                        //     fontSize: '1.5rem',
                        // }}
                    >
                        <h3 className="font-semibold capitalize">{title}</h3>
                        <p className="font-normal !mt-0">{place}</p>
                        {/* <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p> */}
                    </VerticalTimelineElement>
                </Fragment>
            ))}
        </VerticalTimeline>
    );
};

export default Timeline;
