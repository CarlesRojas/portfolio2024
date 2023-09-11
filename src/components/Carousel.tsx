import { MEDIA_URL, type Project } from '@utils/data';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { useState } from 'react';

interface Props {
    project: Project;
}

const sliderVariants = {
    incoming: (fromRight: boolean) => ({
        x: fromRight ? '100' : '-100',
        opacity: 0,
    }),
    active: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: { delay: 0.2 },
    },
    exit: (fromRight: boolean) => ({
        x: fromRight ? '-100' : '100',
        opacity: 0,
    }),
};

const SWIPE_THRESHOLD = 50;

const Carousel = ({ project }: Props) => {
    const { route, numberOfScreenshots, video, videoPosition, horizontal } = project;

    const [{ index, fromRight }, setCurrentImage] = useState({
        index: 0,
        fromRight: false,
    });

    const swipeToImage = (fromRight: boolean) => {
        setCurrentImage(({ index }) => {
            let newIndex = fromRight ? index + 1 : index - 1;

            if (newIndex < 0) newIndex = numberOfScreenshots - 1;
            else if (newIndex >= numberOfScreenshots) newIndex = 0;

            return {
                index: newIndex,
                fromRight,
            };
        });
    };

    const dragEndHandler = (dragInfo: PanInfo) => {
        const draggedDistance = dragInfo.offset.x;
        if (draggedDistance > SWIPE_THRESHOLD) swipeToImage(false);
        else if (draggedDistance < -SWIPE_THRESHOLD) swipeToImage(true);
    };

    const skipToImage = (image: number) => {
        setCurrentImage(({ index }) => ({ index: image, fromRight: image < index }));
    };

    return (
        <div className={`relative w-full ${horizontal ? 'h-[50vh]' : 'h-[50vh]'}`}>
            <AnimatePresence initial={false} custom={fromRight}>
                <motion.div
                    className="absolute w-full h-full bg-center bg-no-repeat bg-contain will-change-[opacity,_transform]"
                    key={index}
                    style={{
                        backgroundImage: `url(${MEDIA_URL}/${route}/screenshot${index + 1}.webp)`,
                    }}
                    custom={fromRight}
                    variants={sliderVariants}
                    initial="incoming"
                    animate="active"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                />
            </AnimatePresence>
        </div>
    );
};

export default Carousel;
