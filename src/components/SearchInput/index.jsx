/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const SearchInput = ({ placeholder }) => {
    const [value, setValue] = useState('');
    return (
        <div className="border items-center h-[48px] max-w-[732px] w-full px-4 py-2 flex justify-between rounded-lg text-[#050D23]   disabled:bg-[#E9ECF2] disabled:border-none enabled:hover:placeholder-[#071435] hover:border-[#828EAD] outline-none focus:border-blue-500 focus:border-[2px]">
            <input
                value={value}
                type="text"
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="border-none outline-none"
            />
            <div className="flex gap-2 items-center">
                <ClearIcon
                    onClick={() => setValue('')}
                    className=" cursor-pointer"
                />
                <SearchIcon className=" cursor-pointer" />
            </div>
        </div>
    );
};

export default SearchInput;
