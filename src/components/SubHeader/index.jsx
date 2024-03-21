/* eslint-disable react/prop-types */
import React from 'react';
// import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
// import { ReactComponent as HeartGrayIcon } from '../../assets/icons/heart-gray.svg';
// import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
// import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
// import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as PercentIcon } from '../../assets/icons/percent.svg';

// import Button from '../Button';
// import SearchInput from '../SearchInput';

const SubHeader = () => {
    return (
        <div className="flex  justify-between items-center  border-t border-b gap-6 py-3 px-6">
            <div className="flex gap-6 items-center">
                <p className="text-[#071435] text-[14px]">Мои заказы</p>
                <p className="text-[#071435] text-[14px]">Сотрудники</p>
                <p className="text-[#071435] text-[14px]">Шаблоны заказов</p>
                <p className="text-[#071435] text-[14px]">Обращения</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex gap-3  py-2 px-3 items-center rounded-lg bg-[#F2F6FF]">
                    <ChatIcon />
                    <p className="text-[#1551E5]">Ваш менеджер</p>
                </div>
                <div className="flex items-center gap-4">
                    <PercentIcon />
                    <p className="text-[#1551E5]">Акции</p>
                </div>
                <p className="text-[#1551E5]">Блог</p>
            </div>
        </div>
    );
};

export default SubHeader;
