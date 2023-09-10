import { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';

type Theme = 'light' | 'dark';
const THEME_KEY = 'carles-rojas-portfolio_theme';

const Theme = () => {
    const [theme, setThemeInternal] = useState<Theme>('dark');

    const setTheme = (newTheme: Theme, saveToLocalStorage: boolean = false) => {
        setThemeInternal(newTheme);

        if (saveToLocalStorage) window.localStorage.setItem(THEME_KEY, newTheme);

        newTheme === 'light'
            ? document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark');
    };

    useEffect(() => {
        const currentTheme: Theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        setTheme(currentTheme);
    }, []);

    const onSystemThemeChange = (e: MediaQueryListEvent) => {
        if (window.localStorage.getItem(THEME_KEY) !== null) return;

        const newSystemTheme = e.matches ? 'dark' : 'light';
        setTheme(newSystemTheme, false);
    };

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onSystemThemeChange);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', onSystemThemeChange);
        };
    }, []);

    return (
        <button
            className="fixed z-40 bottom-6 right-6 p-4 w-14 h-14 rounded-full flex items-center justify-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 !bg-opacity-75 backdrop-blur-md shadow-sm"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light', true)}
            aria-label="Toggle theme"
        >
            <SVG className="w-full h-full" src={`/asset/icon/${theme === 'light' ? 'Sun' : 'Moon'}.svg`} />
        </button>
    );
};

export default Theme;
