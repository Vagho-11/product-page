/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as PdfIcon } from '../../assets/icons/pdf.svg';
import { ReactComponent as VideoIcon } from '../../assets/icons/video.svg';
import { ReactComponent as FAQIcon } from '../../assets/icons/FAQ.svg';
import { ReactComponent as YoutubIcon } from '../../assets/icons/youtub.svg';
import { ReactComponent as FooterLogoIcon } from '../../assets/icons/footer-logo.svg';

// import Button from '../Button';
// import SearchInput from '../SearchInput';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center text-[#828EAD] justify-center gap-10 text-[12px] mt-6 mb-6  py-4 px-6">
            <div className="flex items-center justify-center gap-7">
                <div className="flex gap-2">
                    <PdfIcon />
                    <p>PDF презентация</p>
                </div>
                <div className="flex gap-2">
                    <VideoIcon />
                    <p>Видео инструкция </p>
                </div>
                <div className="flex gap-2">
                    <FAQIcon />
                    <p>FAQ</p>
                </div>
                <div className="flex gap-2">
                    <YoutubIcon />
                    <p className="text-[#1551E5]">Мы на YouTube</p>
                </div>
                <p>Политика конфиденциальности </p>
                <p>Лицензионное соглашение</p>
            </div>
            <p className=" text-center">
                Настоящая Политика обработки персональных данных разработана в
                соответствии с Конституцией Российской Федерации, Трудовым
                кодексом Российской Федерации, Гражданским кодексом Российской
                Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ
                `&quot;` Об информации, информационных технологиях и о защите
                информации `&quot;`,
            </p>
            <div className="flex gap-6">
                <FooterLogoIcon />
                <p className="font-bold">Разработка платформы</p>
            </div>
        </footer>
    );
};

export default Footer;
