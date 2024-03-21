import React, { useState } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { ReactComponent as CartWhiteIcon } from '../../assets/icons/cart-white.svg';
import { ReactComponent as BigBootsImg } from "../../assets/icons/boots-big.svg"

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BootsIcon } from "../../assets/icons/boots.svg";

import Toggle from '../Toggle';
import Divider from '../Divider';
import Button from '../Button';
import Heart from '../Heart';
import Counter from '../Counter';

const ProductCard = () => {
    const [count, SetCount] = useState(0);
    const Increment = () => {
        if (count === 25) return;
        SetCount((count) => count + 1);
    };
    const Decrement = () => {
        if (count === 0) return;
        SetCount((count) => count - 1);
    };

    return (
        <div className="px-6 py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <Breadcrumbs />
                <p className="text-[32px] text-[#071435]">
                    Кроссовки мужские Skechers Sunny Dale
                </p>
            </div>
            <div className="flex justify-between gap-12">
                <div className="gap-6 flex items-center flex-col ">
                    <BigBootsImg />
                    <div className="flex  gap-4">
                        <div className="py-2 flex items-center bg-[#F2F6FF] rounded-lg">
                            <ArrowIcon />
                        </div>
                        <BootsIcon />
                        <BootsIcon />
                        <BootsIcon />
                        <BootsIcon />
                        <div className="py-2  flex items-center rotate-180 bg-[#F2F6FF] rounded-lg">
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-12">
                    <div className="flex  gap-8">
                        <div className="flex  max-w-[372px] w-full flex-col gap-8">
                            <p className="text-[#FF3D71] font-medium">
                                166 534.00 цена без скидки
                            </p>
                            <div className="flex gap-4 items-center">
                                <p className="text-[#071435]  text-[32px] font-bold">
                                    122 566 ₽
                                </p>
                                <p className="bg-[#FF3D71]  font-bold text-white py-[2px] px-2 rounded">
                                    -15%
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="rounded-lg font-bold text-[#828EAD]	bg-[#F2F5F9] p-2">
                                    12 штук в уп.
                                </div>
                                <Toggle size="sm" text="Заказ упаковкой" />
                            </div>
                            <Divider />
                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col gap-4">
                                    <p className="font-bold text-[16px] ">
                                        Завтра
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Доставка
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="font-bold text-[16px] ">
                                        7 шт.
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Тарасовка
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="font-bold text-[16px] ">
                                        7 шт.
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Тарасовка
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-between">
                                {count === 0 ? (
                                    <Button
                                        onClick={() => SetCount(1)}
                                        full
                                        icon={<CartWhiteIcon />}
                                        text="В корзину"
                                    />
                                ) : (
                                    <Counter
                                        Increment={Increment}
                                        Decrement={Decrement}
                                        count={count}
                                    />
                                )}
                                <Heart />
                            </div>
                        </div>
                        <div className="border h-full"></div>
                        <div className="flex flex-col w-full max-w-[636px] gap-8">
                            <p className="font-medium text-[20px]">
                                Характеристики
                            </p>
                            <div className="flex justify-between gap-8">
                                <div className="flex max-w-[302px] w-full justify-between flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        ELC00696
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Код поставщика
                                    </p>
                                </div>
                                <div className="flex max-w-[302px] w-full justify-between  flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        ELC0200000696
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Артикул
                                    </p>
                                </div>
                            </div>
                            <div className="flex  justify-between gap-8">
                                <div className="flex  max-w-[302px] w-full flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        ELC00696
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Код РАЭК
                                    </p>
                                </div>
                                <div className="flex max-w-[302px] w-full flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        ELC00696
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Код РАЭК
                                    </p>
                                </div>
                            </div>
                            <div className="flex  justify-between gap-8">
                                <div className="flex max-w-[302px] w-full flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        Electric used
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Бренд
                                    </p>
                                </div>
                                <div className="flex  max-w-[302px] w-full flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        ELC00696
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Серия
                                    </p>
                                </div>
                            </div>
                            <div className="flex  justify-between gap-8">
                                <div className="flex max-w-[302px] w-full flex-col gap-2">
                                    <p className="font-bold text-[16px] ">
                                        ELC0200000696
                                    </p>
                                    <p className="text-[12px] text-[#77829E]">
                                        Код производителя
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex text-[#071435] flex-col gap-6">
                        <p className=" text-[24px]">Описание товара</p>
                        <p className="text-[18px]">
                            Создание приверженного покупателя специфицирует
                            неопровержимый комплексный анализ ситуации. CTR
                            существенно индуцирует из ряда вон выходящий
                            SWOT-анализ. Воздействие на потребителя определяет
                            возрастающий интеграл по поверхности, что известно
                            даже школьникам. Отсюда естественно следует, что
                            коммуникация уравновешивает косвенный фактор
                            коммуникации. Поле направлений естественно допускает
                            экспериментальный скачок функции, таким образом
                            сбылась мечта идиота - утверждение полностью
                            доказано. Арифметическая прогрессия притягивает
                            линейно зависимый пул лояльных изданий.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
