import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCheck, FaDollarSign } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

import landingLogo from "../../../public/assets/landing-logo.png";
import landingHeaderBg from "../../../public/assets/landing-header-bg.png";
import landingFooterBg from "../../../public/assets/landing-footer-bg.png";
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
import dollarBag from "../../../public/assets/dollar-bag.png";
import group from "../../../public/assets/group.png";

const Landing = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-[970px] overflow-hidden">
        <div
          className="bg-cover bg-center bg-no-repeat h-[1400px]"
          style={{
            backgroundImage: `url(${landingHeaderBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <header className="flex justify-between items-center h-[70px] px-[24px] bg-black">
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
              <p className="text-[14px] leading-[16px]">En</p>
              <button className="bg-[#11CA00] py-[10px] px-[16px] rounded-[8px] text-[14px] leading-[16px] flex items-center justify-center">
                Перейти в агрегатор
              </button>
            </div>
          </header>
          <div className="p-[64px]">
            <div className="flex items-center">
              <div className="w-[50%] flex flex-col gap-[28px]">
                <p className="text-[14px] leading-[16px] text-[#89FF45] uppercase">
                  Airdrop Агрегатор #1
                </p>
                <p className="text-[94px] leading-[86px] uppercase font-drukBold">
                  Получайте лучшие{" "}
                  <span className="text-[#89FF45]">AirDrop</span> первыми
                </p>
                <ul className="font-chakra list-none flex flex-col gap-[24px] mb-[63p] -tracking-tighter">
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
                <button className="w-[320px] bg-[#11CA00] py-[24px] px-[56px] rounded-[8px] text-[18px] leading-[18px] font-bold flex items-center justify-center">
                  Перейти в агрегатор
                </button>
              </div>
              <div className="w-[50%]">
                <Image src={video} alt="Video" />
              </div>
            </div>
            <div className="flex items-center gap-[14px] mt-[44px] z-5">
              <div className="flex flex-col gap-[16px] w-[190px]">
                <p className="font-drukBold text-[64px] leading-[64px]">2102</p>
                <p className="text-[#ABABAB] text-[14px] leading-[20px]">
                  Аирдропов уже прошли на Drophunting
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[400px]">
                <p className="font-drukBold text-[64px] leading-[64px]">
                  $294210391
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
      <div className="px-[96px] py-[80px] overflow-hidden flex flex-col gap-[80px]">
        <div className="flex items-center gap-[45px]">
          <div className="w-[50%] flex flex-col gap-[48px] relative">
            <p
              className="text-[80px] leading-[80px] uppercase font-extrabold" // TODO: text-[94px]
              style={{ fontFamily: "Druk Cyr Bold" }}
            >
              Выполняй задания по гайдам и зарабатывай
            </p>
            <div className="w-[500px] flex flex-col gap-[40px]">
              <div className="flex gap-[23px]">
                <div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-b from-[#0D0F14] to-[#1E4413] rounded-xl border-[1px] border-[#2E432B8C] text-[#C2FF89]">
                    <MdAccessTime size={24} />
                  </div>
                </div>
                <p className="text-[17px] leading-[22px]">
                  <span className="font-bold">Экономьте свое время.</span>
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
            <Image
              src={arrow}
              alt="Arrow"
              className="absolute top-[-50px] right-[-50px] w-[100px] h-[100px]"
            />
          </div>
          <div className="w-[50%]">
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
        <div className="flex items-center gap-[24px] bg-[#131721] rounded-[24px] h-[280px] overflow-hidden">
          <div className="w-[40%]">
            <Image src={telegram} alt="Telegram" />
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className="text-[50px] leading-[50px] uppercase font-extrabold">
              Подпишись на телеграм канал
              {/* TODO: Underline */}
            </p>
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
      <div className="px-[156px] py-[80px] relative">
        <p className="font-druk text-[28px] leading-[75px] text-[#67F25B] text-center">
          РЕЗУЛЬТАТЫ
        </p>
        <p className="font-drukBold font-extrabold text-[80px] leading-[80px] text-center mb-[20px]">
          НАГРАДЫ С ПРОШЕДШИХ ДРОПОВ
        </p>
        <p className="text-center text-[17px] leading-[24px]">
          Наши пользователи участвуют в более чем 500 дропов и зарабатывают
          гарантированные вознаграждения
        </p>

        <div className="mt-[50px] flex flex-wrap justify-center items-center gap-[25px] z-10 relative">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <div
              key={el}
              className="w-[360px] bg-[#1F2027AB] rounded-[16px] p-[26px]"
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
            className="absolute top-[-100px] left-[-400px] h-[900px] z-0 rotate-180"
            src={greenBlur}
            alt="Green Blur"
          />
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
        <p className="text-[80px] leading-[80px] font-drukBold font-bold mb-[40px]">
          Как это работает
        </p>
        <div className="relative flex flex-col gap-[40px]">
          <div className="flex justify-between items-center gap-[32px]">
            <div className="flex gap-[55px]">
              <div className="h-[55px] w-[55px] bg-white text-black rounded-full flex items-center justify-center">
                <p className="text-[28px] leading-[28px] font-drukBold">1</p>
              </div>
              <div className="flex flex-col gap-[20px] w-[500px]">
                <p className="text-[26px] leading-[30px] font-bold">
                  Проекты публикуют дроп, а вы следите за ними
                </p>
                <p className="text-[16px] leading-[24px] text-[#BDC0CF]">
                  Проекты публикуют различные дрропы которые вы можете найти в
                  каталоге или в нашем телеграм канале. Каждый из них показан
                  сколько требуется вложений и будет ли гарантированный дроп
                </p>
              </div>
            </div>
            <div>
              <Image src={group} alt="Group" className="w-[600px]" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-[32px]">
            <div className="flex gap-[55px]">
              <div className="h-[55px] w-[55px] bg-white text-black rounded-full flex items-center justify-center">
                <p className="text-[28px] leading-[28px] font-drukBold">2</p>
              </div>
              <div className="flex flex-col gap-[20px] w-[500px]">
                <p className="text-[26px] leading-[30px] font-bold">
                  Проекты публикуют дроп, а вы следите за ними
                </p>
                <p className="text-[16px] leading-[24px] text-[#BDC0CF]">
                  Проекты публикуют различные дрропы которые вы можете найти в
                  каталоге или в нашем телеграм канале. Каждый из них показан
                  сколько требуется вложений и будет ли гарантированный дроп
                </p>
              </div>
            </div>
            <div>
              <Image
                src={landingZenchain}
                alt="Zenchain"
                className="w-[500px]"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-[32px]">
            <div className="flex gap-[55px]">
              <div className="h-[55px] w-[55px] bg-white text-black rounded-full flex items-center justify-center">
                <p className="text-[28px] leading-[28px] font-drukBold">3</p>
              </div>
              <div className="flex flex-col gap-[20px] w-[500px]">
                <p className="text-[26px] leading-[30px] font-bold">
                  Зарабатывайте деньги на гарантированнх дропах
                </p>
                <p className="text-[16px] leading-[24px] text-[#BDC0CF]">
                  Проекты публикуют различные дрропы которые вы можете найти в
                  каталоге или в нашем телеграм канале. Каждый из них показан
                  сколько требуется вложений и будет ли гарантированный дроп
                </p>
              </div>
            </div>
            <div>
              <Image src={dollarBag} alt="Dollar Bag" className="w-[500px]" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[950px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${landingFooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[700px] flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[20px] text-center">
            <p className="text-[80px] leading-[75px] font-drukBold font-extrabold">
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
            <p className="text-[50px] leading-[44px] font-druk font-bold">
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
