/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ text, disabled, onClick, full, icon }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`text-white flex justify-center ${full && 'w-full'} disabled:text-[#B2BACE] disabled:bg-[#E9ECF2] bg-[#1551E5] hover:bg-[#316CFF] focus:bg-[#1551E5] rounded-lg px-6 py-4`}
        >
            <div className="flex gap-2">
                {icon}
                {text}
            </div>
        </button>
    );
};

export default Button;
