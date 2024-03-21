/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as HeartGrayIcon } from '../../assets/icons/heart-gray.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as AvatartIcon } from '../../assets/icons/avatar.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/down.svg';

import Button from '../Button';
import SearchInput from '../SearchInput';

const Header = () => {
    return (
        <header className="flex items-center gap-6 py-4 px-6">
            <Logo />
            <Button icon={<MenuIcon />} text="Menu" />
            <SearchInput placeholder="Название запроса" />
            <div className="flex">
                <div className="border-r p-4">
                    <BellIcon />
                </div>
                <div className="p-4">
                    <HeartGrayIcon />
                </div>
                <div className="flex gap-3  py-3 px-6 items-center rounded-lg bg-[#F2F6FF]">
                    <CartIcon />
                    <p className="text-[#1551E5]">144 235₽</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-4">
                <AvatartIcon />
                <p className="text-[#071435] text-[14px]">Ермаков Е.</p>
                <DownIcon />
            </div>
        </header>
    );
};

export default Header;
