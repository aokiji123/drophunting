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
// import paint from "../../../public/assets/paint.png";
// import bitcoin from "../../../public/assets/bitcoin.png";
// import ethereum from "../../../public/assets/ethereum.png";
// import coin from "../../../public/assets/coin.png";
// import dollar from "../../../public/assets/dollar.png";
import landingZenchain from "../../../public/assets/landing-zenchain.png";
import dollarBag from "../../../public/assets/dollar-bag.jpg";
import group from "../../../public/assets/group.png";
// import underline from "../../../public/assets/underline.png";
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
import { GiHamburgerMenu } from "react-icons/gi";

const Landing = () => {
  const [language, setLanguage] = useState("en");

  const handleChange = (e: SelectChangeEvent) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="bg-black text-white">
      <div className="xl:h-[885px] overflow-hidden">
        <div
          className="bg-[#101114] bg-cover bg-center bg-no-repeat xl:h-[1400px]"
          style={{
            backgroundImage: `url(${landingHeaderBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <header className="flex justify-between items-center h-[70px] px-[24px]">
            <Image className="w-[170px]" src={landingLogo} alt="Landing Logo" />
            <ul className="hidden lg:flex gap-[16px]">
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
            <div className="flex items-center gap-[8px] md:gap-[16px]">
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
                        EN
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem value="ru">
                    <div className="flex items-center gap-1 py-[8px]">
                      <GrLanguage />
                      <p className="text-[16px] font-semibold leading-[20px]">
                        RU
                      </p>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
              <button className="hidden bg-[#11CA00] py-[10px] px-[16px] rounded-[8px] text-[14px] leading-[16px] md:flex items-center justify-center">
                Перейти в агрегатор
              </button>
              <div className="cursor-pointer">
                <GiHamburgerMenu className="block lg:hidden" size={24} />
              </div>
            </div>
          </header>
          <div className="px-[20px] py-[40px] md:px-[40px] md:py-[56px] lg:p-[64px] xl:px-[96px] xl:py-[80px]">
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
            <div className="flex items-center gap-[14px] mt-[40px] xl:mt-[64px] z-5">
              <div className="flex flex-col gap-[16px] w-[190px]">
                <p
                  className="text-[48px] leading-[48px] md:text-[54px] md:leading-[54px] lg:text-[64px] lg:leading-[64px] font-extrabold"
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
                  className="text-[48px] leading-[48px] md:text-[54px] md:leading-[54px] lg:text-[64px] lg:leading-[64px] font-extrabold"
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
      <div className="px-[20px] py-[40px] md:px-[40px] md:py-[56px] lg:p-[64px] xl:px-[96px] xl:py-[80px] overflow-hidden flex flex-col gap-[80px]">
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
        <div className="flex items-center flex-col md:flex-row md:gap-[24px] bg-[#131721] rounded-[24px] xl:h-[280px] overflow-hidden pt-0 xl:pt-[24px] p-[24px]">
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
      <div className="px-[20px] py-[40px] md:px-[40px] md:py-[56px] lg:p-[64px] xl:px-[156px] xl:py-[80px] relative z-10">
        <p
          className="text-[20px] leading-[20px] md:text-[28px] md:leading-[75px] uppercase font-extrabold text-[#67F25B] text-center"
          style={{
            letterSpacing: -3,
            wordSpacing: -3,
            fontFamily: '"Druk Cyr", sans-serif',
          }}
        >
          РЕЗУЛЬТАТЫ
        </p>
        <p
          className="font-extrabold text-[46px] leading-[46px] md:text-[68px] md:leading-[72px] lg:text-[80px] lg:leading-[80px] text-center mb-[20px]"
          style={{
            letterSpacing: -3,
            wordSpacing: -3,
            fontFamily: '"Druk Cyr", sans-serif',
          }}
        >
          НАГРАДЫ С ПРОШЕДШИХ ДРОПОВ
        </p>
        <p className="text-center text-[14px] leading-[21px] md:text-[17px] md:leading-[24px]">
          Наши пользователи участвуют в более чем 500 дропов и зарабатывают
          гарантированные вознаграждения
        </p>

        <div className="relative z-0 mt-[50px] flex flex-wrap items-center gap-[8px] md:gap-[12px] lg:gap-[25px]">
          {/* <Image
            className="absolute top-[-100px] left-[-400px] h-[900px] z-[-10] rotate-180"
            src={greenBlur}
            alt="Green Blur"
          /> */}

          {[1, 2, 3, 4, 5].map((el) => (
            <div
              key={el}
              className="w-[163px] h-[171px] sm:w-[346px] sm:h-[158px] lg:w-[359px] lg:h-[189px] bg-[#1F2027AB] rounded-[16px] px-[12px] py-[14px] sm:p-[20px] lg:p-[25px] z-10 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-[24px] mb-[20px] lg:mb-[24px]">
                <div>
                  <Image
                    src={prevDrop}
                    alt="Previous Drop Logo"
                    className="w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[14px] leading-[17px] sm:text-[16px] sm:leading-[20px] lg:text-[18px] lg:leading-[22px] font-bold">
                    Hemi Network
                  </p>
                  <p className="text-[12px] leading-[14px] sm:text-[13px] sm:leading-[16px] text-[#8E8E8E]">
                    Ноябрь 2024
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-[12px] lg:gap-[20px]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[20px]">
                  <p className="text-[11px] sm:text-[14px] lg:text-[13px] leading-[16px] text-[#8E8E8E]">
                    Заработано
                  </p>
                  <p className="text-[14px] sm:text-[20px] lg:text-[28px] leading-[18px] font-semibold">
                    $2500
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[35px]">
                  <p className="text-[11px] sm:text-[14px] lg:text-[13px] leading-[16px] text-[#8E8E8E]">
                    Вложения
                  </p>
                  <p className="text-[14px] sm:text-[20px] leading-[18px] text-[#ADADAD]">
                    $0
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <Image
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
          /> */}
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mt-[50px] bg-white py-[10px] px-[16px] rounded-[12px] w-[184px] h-[40px] sm:h-[48px] lg:h-[57px]">
            <div className="text-[14px] leading-[16px] text-black">
              Показать еще
            </div>
          </div>
        </div>

        {/* <Image
          className="absolute top-[30px] right-[300px] w-[300px] -rotate-12"
          src={paint}
          alt="Paint"
        /> */}
      </div>
      <div className="px-[20px] py-[50px] md:px-[40px] md:pt-[80px] md:pb-[64px] xl:px-[96px] xl:py-[80px]">
        <p
          className="font-extrabold text-[46px] leading-[46px] md:text-[68px] md:leading-[72px] lg:text-[80px] lg:leading-[80px] mb-[48px]"
          style={{
            letterSpacing: -3,
            wordSpacing: -3,
            fontFamily: '"Druk Cyr", sans-serif',
          }}
        >
          Как это работает?
        </p>
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
              className="flex flex-col lg:flex-row lg:justify-between md:items-center gap-[16px] md:gap-[32px] relative"
            >
              <div className="flex gap-[24px] md:gap-[55px]">
                <div className="relative flex items-center justify-center h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-white text-black rounded-full">
                  <p
                    className="text-[18px] leading-[18px] md:text-[28px] md:leading-[28px] font-extrabold"
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
                <div className="flex flex-col gap-[20px] w-[275px] xs:w-[400px] sm:w-[500px] md:w-[595px] lg:w-[491px]">
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
                  className="pl-[60px] w-[500px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[616px] md:h-[768px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${landingFooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-[64px] items-center relative px-[40px]">
          <div className="w-[335px] sm:w-[505px] md:w-[705px] lg:w-[923px] flex flex-col gap-[20px] text-center relative">
            <p
              className="text-[46px] leading-[46px] md:text-[68px] md:leading-[72px] lg:text-[80px] lg:leading-[75px] font-extrabold uppercase"
              style={{
                letterSpacing: -3,
                wordSpacing: -3,
                fontFamily: '"Druk Cyr", sans-serif',
              }}
            >
              Присоединяйся к комьюнити
            </p>
            <p className="text-[15px] leading-[20px] md:text-[17px] md:leading-[24px] text-center">
              Подпишись на Drop Hunting в соц сетях чтобы не пропустить ни
              одного дропа и всегда быть в курсе событий
            </p>
          </div>
          <div className="flex flex-col gap-[40px]">
            <button className="w-[335px] md:w-[573px] bg-[#11CA00] h-[56px] md:h-[88px] py-[24px] px-[56px] rounded-[8px] text-[16px] leading-[18px] md:text-[22px] md:leading-[18px] font-bold flex items-center justify-center">
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
            className="absolute w-[67px] h-[67px] md:w-[102px] md:h-[102px] lg:w-[115px] lg:h-[115px] top-[-80px] left-[5px] md:top-[-100px] sm:left-[-20px] md:left-0 lg:left-[-60px] xl:left-[-160px]"
          />
          <Image
            src={goldCrypto}
            alt="Gold Crypto"
            className="absolute w-[77px] h-[77px]  md:w-[115px] md:h-[115px] lg:w-[140px] lg:h-[140px] right-0 bottom-[-70px] sm:right-0 md:bottom-[160px] lg:bottom-[110px] md:right-[-60px] lg:right-[-100px] xl:right-[-200px]"
          />
          <Image
            src={greenTether}
            alt="Green Tether"
            className="absolute w-[75px] h-[75px] md:w-[118px] lg:w-[185px] md:h-[118px] lg:h-[185px] top-[-120px] right-[20px] md:top-[-160px] md:right-[-40px] lg:top-[-200px] lg:right-[-70px] xl:right-[-140px]"
          />
        </div>
      </div>
      <footer className="bg-black h-[751px] md:h-[617px] lg:h-[440px] px-[40px] lg:px-[100px] xl:px-[200px] pt-[56px] flex flex-col justify-between">
        <div>
          <Image
            src={landingLogo}
            alt="DropHunting logo"
            className="w-[170px] mb-[32px]"
          />
          <div className="flex flex-col md:flex-row md:justify-between gap-[24px] md:gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <p
                className="text-[42px] leading-[42px] md:text-[51px] md:leading-[47px] font-extrabold uppercase"
                style={{
                  letterSpacing: -3,
                  wordSpacing: -3,
                  fontFamily: '"Druk Cyr", sans-serif',
                }}
              >
                Лучшие аирдропы в мире
              </p>
              <p className="text-[14px] leading-[24px] max-w-[360px]">
                Больше никаких &quot;приваток&quot; и подписок на сотни телеграм
                каналов
              </p>
              <div className="flex items-center gap-[10px] mb-[24px]">
                <BsTwitterX size={23} />
                <FaDiscord size={27} />
                <RiTelegram2Fill size={27} />
                <FaInstagram size={27} />
              </div>
              <ul className="hidden lg:hidden md:flex flex-col gap-[17px] w-[150px]">
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
            </div>
            <div className="flex flex-col md:flex-row gap-[48px] md:gap-[24px]">
              <ul className="hidden lg:flex flex-col gap-[17px] w-[150px]">
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
                <button className="bg-[#11CA00] w-full md:w-[192px] h-[44px] py-[12px] px-[16px] rounded-[8px] text-[14px] leading-[16px] flex items-center justify-center">
                  Перейти в агрегатор
                </button>
                <button className="bg-[#21274C] w-full md:w-[192px] h-[44px] py-[12px] px-[16px] rounded-[8px] text-[14px] leading-[16px] flex items-center justify-center">
                  Подписаться на бот
                </button>
              </div>
              <ul className="flex md:hidden flex-col gap-[17px] w-[150px]">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-normal gap-[12px] md:gap-[40px] py-[24px]">
          <p className="text-[13px] leading-[16px] text-[#ABABAB]">
            Drop Hunting 2025
          </p>
          <ul className="flex flex-wrap items-center gap-[12px] md:gap-[24px]">
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
