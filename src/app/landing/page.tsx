"use client";
import Image from "next/image";
import Link from "next/link";

import { FaCheck, FaDollarSign } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

import landingLogo from "../../../public/assets/landing-logo.png";
import landingHeaderBg from "../../../public/assets/landing-header-bg.jpg";
import landingFooterBg from "../../../public/assets/landing-footer-bg.jpg";
import video from "../../../public/assets/video.png";
import blocks from "../../../public/assets/blocks.png";
import greenBlur from "../../../public/assets/green-blur.png";
import arrow from "../../../public/assets/arrow.png";
import telegram from "../../../public/assets/telegram.png";
import prevDrop from "../../../public/assets/prev-drop.png";
import paint from "../../../public/assets/paint.png";
import bitcoin from "../../../public/assets/bitcoin.png";
import ethereum from "../../../public/assets/ethereum.png";
import coin from "../../../public/assets/coin.png";
import dollar from "../../../public/assets/dollar.png";
import landingZenchain from "../../../public/assets/landing-zenchain.png";
import dollarBag from "../../../public/assets/dollar-bag.jpg";
import group from "../../../public/assets/group.png";
import underline from "../../../public/assets/underline.png";
import goldBitcoin from "../../../public/assets/gold-bitcoin.png";
import goldCrypto from "../../../public/assets/gold-crypto.png";
import greenTether from "../../../public/assets/green-tether.png";
import {
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Select,
} from "@mui/material";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";

const Landing = () => {
  const [language, setLanguage] = useState("en");

  const handleChange = (e: SelectChangeEvent) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="bg-black text-white">
      <div className="xl:h-[970px] overflow-hidden">
        <div
          className="bg-black bg-cover bg-center bg-no-repeat xl:h-[1400px]"
          style={{
            backgroundImage: `url(${landingHeaderBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <header className="flex justify-between items-center h-[70px] px-[24px]">
            <Image className="w-[170px]" src={landingLogo} alt="Landing Logo" />
            <ul className="flex gap-[16px]">
              <li>
                <Link href="/">О сервисе</Link>
              </li>
              <li>
                <Link href="/">Результаты</Link>
              </li>
              <li>
                <Link href="/">Как это работает</Link>
              </li>
              <li>
                <Link href="/">Контакты</Link>
              </li>
            </ul>
            <div className="flex items-center gap-[16px]">
              <FormControl
                sx={{
                  bgcolor: "transparent",
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  ".MuiSelect-select": {
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 600,
                    padding: 0,
                  },
                  ".MuiSelect-icon": { color: "white", padding: 0 },
                  "& .MuiPaper-root": {
                    bgcolor: "#1C1E22",
                    color: "white",
                    borderRadius: "8px",
                    padding: 0,
                  },
                  "& .MuiMenuItem-root": {
                    bgcolor: "#1C1E22",
                    padding: 0,
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  },
                }}
              >
                <Select
                  value={language}
                  onChange={handleChange}
                  inputProps={{
                    "aria-label": "Language select",
                  }}
                  sx={{
                    height: "40px",
                  }}
                >
                  <MenuItem value="en">
                    <div className="flex items-center gap-1 py-[8px]">
                      <GrLanguage />
                      <p className="text-[16px] font-semibold leading-[20px]">
                        En
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem value="ru">
                    <div className="flex items-center gap-1 py-[8px]">
                      <GrLanguage />
                      <p className="text-[16px] font-semibold leading-[20px]">
                        Ru
                      </p>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
              <button className="bg-[#11CA00] py-[10px] px-[16px] rounded-[8px] text-[14px] leading-[16px] flex items-center justify-center">
                Перейти в агрегатор
              </button>
            </div>
          </header>
          <div className="p-[16px] sm:p-[32px] md:p-[64px]">
            <div className="flex xl:items-center flex-col xl:flex-row gap-[40px]">
              <div className="w-full xl:w-[55%]">
                <div className="flex flex-col gap-[28px]">
                  <p className="text-[14px] leading-[16px] text-[#89FF45] uppercase">
                    Airdrop Агрегатор #1
                  </p>
                  <p
                    className="text-[54px] leading-[50px] sm:text-[70px] sm:leading-[70px] md:text-[94px] md:leading-[80px] uppercase font-extrabold"
                    style={{
                      letterSpacing: -5,
                      wordSpacing: -5,
                      fontFamily: '"Druk Cyr", sans-serif',
                    }}
                  >
                    Получайте лучшие{" "}
                    <span className="text-[#89FF45]">AirDrop</span> первыми
                  </p>
                  <ul className="font-chakra list-none flex flex-col gap-[24px] mb-[40px] -tracking-tighter">
                    <li className="relative flex items-center gap-[16px]">
                      <div>
                        <FaCheck size={18} className="text-[#ABE91A]" />
                      </div>
                      <p className="text-[18px] leading-[24px]">
                        Новые дропы каждый день
                      </p>
                    </li>
                    <li className="relative flex items-center gap-[16px]">
                      <div>
                        <FaCheck size={18} className="text-[#ABE91A]" />
                      </div>
                      <p className="text-[18px] leading-[24px]">
                        А еще вот это новинки
                      </p>
                    </li>
                    <li className="relative flex items-center gap-[16px]">
                      <div>
                        <FaCheck size={18} className="text-[#ABE91A]" />
                      </div>
                      <p className="text-[18px] leading-[24px]">
                        Новинки узнавайте первыми о которых не знал никто
                      </p>
                    </li>
                  </ul>
                  <button className="w-[320px] bg-[#11CA00] py-[18px] md:py-[24px] px-[32px] md:px-[56px] rounded-[8px] text-[18px] leading-[18px] font-bold flex items-center justify-center">
                    Перейти в агрегатор
                  </button>
                </div>
              </div>
              <div className="max-w-[600px] xl:w-[45%]">
                <Image src={video} alt="Video" />
              </div>
            </div>
            <div className="flex md:items-center flex-col md:flex-row gap-[14px] mt-[40px] xl:mt-[64px] z-5">
              <div className="flex flex-col gap-[16px] w-[190px]">
                <p
                  className="text-[48px] leading-[48px] md:text-[64px] md:leading-[64px] font-extrabold"
                  style={{
                    fontFamily: '"Druk Cyr", sans-serif',
                    letterSpacing: -5,
                  }}
                >
                  2102
                </p>
                <p className="text-[#ABABAB] text-[14px] leading-[20px]">
                  Аирдропов уже прошли на Drophunting
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[400px]">
                <p
                  className="text-[48px] leading-[48px] md:text-[64px] md:leading-[64px] font-extrabold"
                  style={{
                    fontFamily: '"Druk Cyr", sans-serif',
                    letterSpacing: -5,
                  }}
                >
                  $ 294 210 391
                </p>
                <p className="text-[#ABABAB] text-[14px] leading-[20px]">
                  Доступная сумма выигрышей через DropHunting. Охотьтесь по
                  крупному
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[24px] md:px-[64px] lg:px-[96px] py-[80px] overflow-hidden flex flex-col gap-[80px]">
        <div className="flex items-center flex-col xl:flex-row gap-[45px]">
          <div className="w-full xl:w-[50%] flex flex-col gap-[48px] relative">
            <p
              className="text-[32px] md:text-[64px] xl:text-[80px] md:leading-[64px] xl:leading-[90px] uppercase font-extrabold"
              style={{
                fontFamily: '"Druk Cyr", sans-serif',
              }}
            >
              Выполняй задания по гайдам и зарабатывай
            </p>
            <div className="max-w-[500px] flex flex-col gap-[40px]">
              <div className="flex gap-[23px]">
                <div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-b from-[#0D0F14] to-[#1E4413] rounded-xl border-[1px] border-[#2E432B8C] text-[#C2FF89]">
                    <MdAccessTime size={24} />
                  </div>
                </div>
                <p className="text-[17px] leading-[22px]">
                  <span className="font-bold">Экономьте свое время. </span>
                  <span>Узнавайте сразу все обновления в одном месте</span>
                </p>
              </div>
              <div className="flex gap-[23px]">
                <div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-b from-[#0D0F14] to-[#1E4413] rounded-xl border-[1px] border-[#2E432B8C] text-[#C2FF89]">
                    <FaDollarSign size={24} />
                  </div>
                </div>
                <p className="text-[17px] leading-[22px]">
                  <span className="font-bold">
                    Распределите ресурсы правильно.{" "}
                  </span>
                  <span>
                    Вы знаете сколько нужно вложиться и какие есть возможные
                    прибыли
                  </span>
                </p>
              </div>
              <div className="flex gap-[23px]">
                <div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-b from-[#0D0F14] to-[#1E4413] rounded-xl border-[1px] border-[#2E432B8C] text-[#C2FF89]">
                    <HiLightningBolt size={24} />
                  </div>
                </div>
                <p className="text-[17px] leading-[22px]">
                  <span className="font-bold">Быстро и точно. </span>
                  <span>
                    Собирайте все возможные аирдропы в одном месте и получайте
                    доход
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            <Image
              src={arrow}
              alt="Arrow"
              className="absolute top-[50px] left-0 xl:top-[-50px] xl:left-[-50px] w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
            />
            <div className="relative">
              <Image
                src={greenBlur}
                alt="Green blur"
                className="absolute top-[-200px] right-[-150px] h-[900px] z-0"
              />

              <Image
                src={blocks}
                alt="Zenchain blocks"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col xl:flex-row xl:gap-[24px] bg-[#131721] rounded-[24px] xl:h-[280px] overflow-hidden pt-0 xl:pt-[24px] p-[24px]">
          <div className="md:w-[50%]">
            <Image src={telegram} alt="Telegram" />
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="relative">
              <p
                className="text-[42px] leading-[42px] xl:text-[50px] xl:leading-[50px] uppercase font-extrabold border-t-[1px] border-[#289BFF17] pt-[24px] xl:border-none xl:pt-0"
                style={{
                  letterSpacing: -3,
                  fontFamily: '"Druk Cyr", sans-serif',
                }}
              >
                Подпишись на телеграм канал
              </p>
              {/* <Image
                src={underline}
                alt="Underline"
                className="block xl:hidden w-[400px] absolute top-[80px] right-[20px]"
              /> */}
            </div>
            <p className="text-[17px] leading-[20px]">
              Каждый день новые дропы. Подпишись и будь в курсе последних
              обновлений в проектах
            </p>
            <div className="flex">
              <button className="flex items-center justify-center gap-[10px] bg-[#159ADC] pl-[16px] pr-[31px] py-[10px] rounded-[12px]">
                <div>
                  <RiTelegram2Fill size={32} />
                </div>
                <p className="text-[18px] leading-[16px]">Телеграм</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[156px] py-[80px] relative z-10">
        <p
          className="text-[28px] leading-[75px] uppercase font-extrabold text-[#67F25B] text-center"
          style={{
            letterSpacing: -3,
            wordSpacing: -3,
            fontFamily: '"Druk Cyr", sans-serif',
          }}
        >
          РЕЗУЛЬТАТЫ
        </p>
        <p
          className="font-extrabold text-[80px] leading-[80px] text-center mb-[20px]"
          style={{
            letterSpacing: -3,
            wordSpacing: -3,
            fontFamily: '"Druk Cyr", sans-serif',
          }}
        >
          НАГРАДЫ С ПРОШЕДШИХ ДРОПОВ
        </p>
        <p className="text-center text-[17px] leading-[24px]">
          Наши пользователи участвуют в более чем 500 дропов и зарабатывают
          гарантированные вознаграждения
        </p>

        <div className="relative z-0 mt-[50px] flex flex-wrap justify-center items-center gap-[25px]">
          <Image
            className="absolute top-[-100px] left-[-400px] h-[900px] z-[-10] rotate-180"
            src={greenBlur}
            alt="Green Blur"
          />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <div
              key={el}
              className="w-[360px] bg-[#1F2027AB] rounded-[16px] p-[26px] z-10 relative"
            >
              <div className="flex items-center gap-[24px] mb-[24px]">
                <div className="w-[50px] h-[50px] rounded-[10px]">
                  <Image src={prevDrop} alt="Previous Drop Logo" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[19px] leading-[22px] font-bold">
                    Hemi Network
                  </p>
                  <p className="text-[13px] leading-[16px] text-[#8E8E8E]">
                    Ноябрь 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[20px]">
                  <p className="text-[13px] leading-[16px] text-[#8E8E8E]">
                    Заработано
                  </p>
                  <p className="text-[28px] leading-[18px] font-semibold">
                    $2500
                  </p>
                </div>
                <div className="flex items-center gap-[35px]">
                  <p className="text-[13px] leading-[16px] text-[#8E8E8E]">
                    Вложения
                  </p>
                  <p className="text-[20px] leading-[18px] text-[#ADADAD]">
                    $0
                  </p>
                </div>
              </div>
            </div>
          ))}

          <Image
            className="absolute top-[-70px] left-[30px] w-[100px] h-[100px]"
            src={bitcoin}
            alt="Bitcoin"
          />
          <Image
            className="absolute top-[-130px] right-[-20px] w-[180px] h-[180px]"
            src={dollar}
            alt="Dollar"
          />
          <Image
            className="absolute bottom-[-20px] left-[10px] w-[120px] h-[120px]"
            src={ethereum}
            alt="Ethereum"
          />
          <Image
            className="absolute bottom-[-100px] right-[30px] w-[165px] h-[165px]"
            src={coin}
            alt="Coin"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mt-[50px] bg-white py-[10px] px-[16px] rounded-[12px] w-[180px] h-[60px]">
            <div className="text-[14px] leading-[16px] text-black">
              Показать еще
            </div>
          </div>
        </div>

        <Image
          className="absolute top-[30px] right-[300px] w-[300px] -rotate-12"
          src={paint}
          alt="Paint"
        />
      </div>
      <div className="px-[96px] py-[80px]">
        <div className="relative flex flex-col gap-[40px]">
          {[
            {
              number: "1",
              title: "Проекты публикуют дроп, а вы следите за ними",
              description:
                "Проекты публикуют различные дрропы которые вы можете найти в каталоге или в нашем телеграм канале. Каждый из них показан сколько требуется вложений и будет ли гарантированный дроп",
              image: group,
            },
            {
              number: "2",
              title: "Проекты публикуют дроп, а вы следите за ними",
              description:
                "Проекты публикуют различные дрропы которые вы можете найти в каталоге или в нашем телеграм канале. Каждый из них показан сколько требуется вложений и будет ли гарантированный дроп",
              image: landingZenchain,
            },
            {
              number: "3",
              title: "Зарабатывайте деньги на гарантированнх дропах",
              description:
                "Проекты публикуют различные дрропы которые вы можете найти в каталоге или в нашем телеграм канале. Каждый из них показан сколько требуется вложений и будет ли гарантированный дроп",
              image: dollarBag,
            },
          ].map((item, index, array) => (
            <div
              key={item.number}
              className="flex justify-between items-center gap-[32px] relative"
            >
              <div className="flex gap-[55px]">
                <div className="relative flex items-center justify-center h-[55px] w-[55px] bg-white text-black rounded-full">
                  <p
                    className="text-[28px] leading-[28px] font-extrabold"
                    style={{
                      letterSpacing: -3,
                      wordSpacing: -3,
                      fontFamily: '"Druk Cyr", sans-serif',
                    }}
                  >
                    {item.number}
                  </p>
                  {index !== array.length - 1 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[1px] h-[480px] bg-[#424242]"></div>
                  )}
                </div>
                <div className="flex flex-col gap-[20px] w-[500px]">
                  <p className="text-[26px] leading-[30px] font-bold">
                    {item.title}
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#BDC0CF]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-[500px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[950px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${landingFooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[700px] flex flex-col gap-[64px] items-center relative">
          <div className="flex flex-col gap-[20px] text-center relative">
            <p
              className="text-[80px] leading-[75px] font-extrabold uppercase"
              style={{
                letterSpacing: -3,
                wordSpacing: -3,
                fontFamily: '"Druk Cyr", sans-serif',
              }}
            >
              Присоединяйся к комьюнити
            </p>
            <p className="text-[17px] leading-[24px] text-center">
              Подпишись на Drop Hunting в соц сетях чтобы не пропустить ни
              одного дропа и всегда быть в курсе событий
            </p>
          </div>
          <div className="flex flex-col gap-[40px]">
            <button className="w-[570px] bg-[#11CA00] py-[24px] px-[56px] rounded-[8px] text-[18px] leading-[18px] font-bold flex items-center justify-center">
              Перейти в агрегатор
            </button>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-[40px]">
                <BsTwitterX size={35} />
                <FaDiscord size={40} />
                <RiTelegram2Fill size={40} />
                <FaInstagram size={40} />
              </div>
            </div>
          </div>
          <Image
            src={goldBitcoin}
            alt="Gold Bitcoin"
            className="absolute w-[115px] h-[115px] top-[-100px] left-[-200px]"
          />
          <Image
            src={goldCrypto}
            alt="Gold Crypto"
            className="absolute w-[140px] h-[140px] bottom-[150px] right-[-300px]"
          />
          <Image
            src={greenTether}
            alt="Green Tether"
            className="absolute w-[185px] h-[185px] top-[-300px] right-[-200px]"
          />
        </div>
      </div>
      <footer className="bg-black h-[400px] px-[200px] pt-[56px]">
        <Image
          src={landingLogo}
          alt="DropHunting logo"
          className="w-[170px] mb-[30px]"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-[24]">
            <p
              className="text-[40px] leading-[44px] font-extrabold uppercase"
              style={{
                letterSpacing: -3,
                wordSpacing: -3,
                fontFamily: '"Druk Cyr", sans-serif',
              }}
            >
              Лучшие аирдропы в мире
            </p>
            <p className="text-[14px] leading-[24px] w-[360px]">
              Больше никаких &quot;приваток&quot; и подписок на сотни телеграм
              каналов
            </p>
            <div className="flex items-center gap-[10px]">
              <BsTwitterX size={23} />
              <FaDiscord size={27} />
              <RiTelegram2Fill size={27} />
              <FaInstagram size={27} />
            </div>
          </div>
          <div className="flex gap-[20px]">
            <ul className="flex flex-col gap-[20px] w-[150px]">
              <li className="text-[14px] leading-[13px] text-[#9AA5B9]">
                О сервисе
              </li>
              <li className="text-[14px] leading-[13px] text-[#9AA5B9]">
                Результаты
              </li>
              <li className="text-[14px] leading-[13px] text-[#9AA5B9]">
                Как это работает
              </li>
              <li className="text-[14px] leading-[13px] text-[#9AA5B9]">
                Контакты
              </li>
            </ul>
            <div className="flex flex-col gap-[12px]">
              <button className="bg-[#11CA00] py-[12px] px-[16px] rounded-[8px] text-[14px] leading-[16px] flex items-center justify-center">
                Перейти в агрегатор
              </button>
              <button className="bg-[#21274C] py-[12px] px-[16px] rounded-[8px] text-[14px] leading-[16px] flex items-center justify-center">
                Подписаться на бот
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[40px] mt-[70px]">
          <p className="text-[13px] leading-[16px] text-[#ABABAB]">
            Drop Hunting 2025
          </p>
          <ul className="flex items-center gap-[24px]">
            <li className="text-[12px] leading-[12px] text-[#535353]">
              Политика пользовательского соглашения
            </li>
            <li className="text-[12px] leading-[12px] text-[#535353]">
              Privacy
            </li>
            <li className="text-[12px] leading-[12px] text-[#535353]">
              Cookie
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
