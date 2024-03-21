import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

const Contact = () => {
    return (
        <div className="px-6 flex justify-between items-center mb-12 mt-12">
            <div className="flex gap-14 items-center">
                <Logo />
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-[16px] ">8 800 841-95-95</p>
                    <p className="text-[12px] text-[#77829E]">
                        Служба поддержки
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-[16px] ">support@sport.ru</p>
                    <p className="text-[12px] text-[#77829E]">
                        Служба поддержки
                    </p>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <p className="font-bold text-[16px]">Вакансии</p>
                <p className="font-bold text-[16px]">Блог</p>
                <p className="font-bold text-[16px]">Акции</p>
                <div className="flex py-3 px-6 items-center rounded-lg bg-[#F2F6FF]">
                    <p className="text-[#1551E5]">Предложить идею</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
