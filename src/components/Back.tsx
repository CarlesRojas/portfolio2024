import { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';

const Back = () => {
    return (
        <a
            className="fixed cursor-pointer z-40 top-3 left-3 sm:top-6 sm:left-6 p-4 w-fit h-14 rounded-full flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
            onClick={() => history.back()}
            aria-label="Back"
        >
            <SVG className="w-full h-full" src={'/asset/icon/Back.svg'} />
            <span class="pointer-events-none">Back</span>
        </a>
    );
};

export default Back;
