/* eslint-disable react/prop-types */
import React from 'react';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartIconFill } from '../../assets/icons/heartFill.svg';

const Heart = () => {
    const [filled, setFilled] = React.useState(false);
    return (
        <div
            onClick={() => setFilled((filled) => !filled)}
            className="bg-[#F2F6FF]  cursor-pointer inline-block rounded-lg px-6 py-4 "
        >
            {filled ? <HeartIconFill /> : <HeartIcon />}
        </div>
    );
};

export default Heart;
