import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import useTheme from '../../hooks/useTheme';

const ToggleThemeButton = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className="transition duration-500 ease-in-out rounded-full items-center p-2 m-2 ">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-yellow-500 dark:text-yellow-400 text-2xl cursor-pointer"
                />
            ) : (
                    <FaMoon
                        onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-white dark:text-white text-2xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default ToggleThemeButton;