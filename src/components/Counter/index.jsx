/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

const Counter = ({ Increment, Decrement, count }) => {
    return (
        <div className="px-3 py-2 items-center w-full rounded-lg border-[2px] border-[#1551E5] flex justify-between">
            <MinusIcon className="cursor-pointer" onClick={Decrement} />
            <p className="text-[16px] font-medium">{count} штуки</p>
            <PlusIcon className="cursor-pointer" onClick={Increment} />
        </div>
    );
};

export default Counter;
