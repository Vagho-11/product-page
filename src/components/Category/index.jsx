import React from 'react';

const Category = () => {
    return (
        <div className="px-6 flex gap-6 justify-between mt-12 mb-12">
            <div className="flex flex-col gap-6">
                <p className="text-[#050D23] font-medium">Женщинам</p>
                <div className="flex flex-col font-normal gap-4 ">
                    <p>Одежда</p>
                    <p>Обувь</p>
                    <p>Аксессуары</p>
                    <p>Белье</p>
                    <p>Bra fitting</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-[#050D23] font-medium">Мужчинам</p>
                <div className="flex flex-col gap-4 ">
                    <p>Одежда</p>
                    <p>Обувь</p>
                    <p>Аксессуары</p>
                    <p>Белье</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-[#050D23] font-medium">Детям</p>
                <div className="flex flex-col gap-4 ">
                    <p>Одежда</p>
                    <p>Обувь</p>
                    <p>Аксессуары</p>
                    <p>Белье</p>
                    <p>Игрушки</p>
                    <p>Малыши</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-[#050D23] font-medium">Виды спорта</p>
                <div className="flex flex-col gap-4 ">
                    <p>Велоспорт</p>
                    <p>Туризм</p>
                    <p>Тренажеры и фитнес</p>
                    <p>Командные виды спорта</p>
                    <p>Самокаты</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
