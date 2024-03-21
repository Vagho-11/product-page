/* eslint-disable react/prop-types */
import React from 'react';

const Toggle = ({ size = 'md', text }) => {
    return size === 'md' ? (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="relative w-[48px] h-[32px] bg-[#828EAD] peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[50%] rtl:peer-checked:after:-translate-x-[50%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            {text && (
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {text}
                </span>
            )}
        </label>
    ) : (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="relative w-[40px] h-[24px] bg-[#828EAD] peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[70%] rtl:peer-checked:after:-translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            {text && (
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {text}
                </span>
            )}
        </label>
    );
};

export default Toggle;
