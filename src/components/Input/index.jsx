/* eslint-disable react/prop-types */
import React from 'react';

const Input = ({ placeholder, disabled, onChange, error }) => {
    const errorStyle =
        error && '!border-[#FF608A]  !placeholder-[#FF608A] !border-[2px] ';
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            className={`text-[#828EAD] border  disabled:text-[#B2BACE] disabled:bg-[#E9ECF2] disabled:border-none enabled:hover:placeholder-[#071435] hover:border-[#828EAD] outline-none focus:border-blue-500 focus:border-[2px] rounded-lg px-6 py-4 ${errorStyle}`}
        />
    );
};

export default Input;
