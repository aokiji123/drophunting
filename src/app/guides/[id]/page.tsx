"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdTime,
} from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { IoCalendarClear } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder, MdOutlineDone } from "react-icons/md";
import { PiXLogo } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { Slider, styled } from "@mui/material";
import { AiOutlineLink } from "react-icons/ai";
import { useParams, useRouter } from "next/navigation";
import SmallChartPie from "@/shared/components/SmallChartPie";
import HalfChartPie from "@/shared/components/HalfChartPie";
import { PlansModal } from "@/app/components/modals/PlansModal";
import Link from "next/link";
import useStore from "@/shared/store";

const CustomSlider = styled(Slider)({
  height: 6,
  "& .MuiSlider-track": {
    background: "#CBFF51",
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#b3b3b3",
  },
  "& .MuiSlider-mark": {
    height: 10,
    width: 4,
    backgroundColor: "#101114",
    transform: "rotate(30deg) translateY(-3px) translateX(-5px)",
  },
});

const marks = Array.from({ length: 6 }, (_, i) => ({
  value: i,
  visible: i !== 0 && i !== 5,
}));

const Guide = () => {
  const router = useRouter();
  const [activeTask, setActiveTask] = useState<number | null>(null);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const params = useParams();
  const id = params.id as string;

  const {
    user,
    subscriptions,
    sessionVerified,
    guideDetails,
    isLoadingGuideDetails,
    guideDetailsError,
    fetchGuideDetails,
    fetchSubscriptions,
    taskDetails,
    isLoadingTaskDetails,
    fetchTaskDetails,
    toggleTaskComplete,
    toggleFavorite,
  } = useStore();

  useEffect(() => {
    if (sessionVerified && !user) {
      router.push("/auth/login");
    }
  }, [sessionVerified, user, router]);

  useEffect(() => {
    if (id) {
      fetchGuideDetails(id);
    }
  }, [fetchGuideDetails, id]);

  useEffect(() => {
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  useEffect(() => {
    if (guideDetails) {
      setIsFavorite(guideDetails.favorite > 0);
    }
  }, [guideDetails]);

  useEffect(() => {
    if (activeTask !== null) {
      fetchTaskDetails(activeTask);
    }
  }, [activeTask, fetchTaskDetails]);

  useEffect(() => {
    if (window.location.hash && (guideDetails?.tasks || []).length > 0) {
      const hash = window.location.hash;

      const elementId = hash.replace("#", "");

      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        handleOpenTaskById(+elementId.split("-")[1]);
      }
    }
  }, [guideDetails]);

  const handleToggleTaskComplete = async (
    e: React.MouseEvent,
    taskId: number,
  ) => {
    e.stopPropagation();
    await toggleTaskComplete(taskId);
  };

  const handleToggleFavorite = async () => {
    if (guideDetails) {
      setIsFavorite((prevState) => !prevState);

      try {
        await toggleFavorite(guideDetails.id);
      } catch (error) {
        console.error("Error toggling favorite:", error);
      }
    }
  };

  const toggleAccordion = (taskId: number) => {
    setActiveTask((prev) => (prev === taskId ? null : taskId));
  };

  const handleOpenTaskById = (taskId: number) => {
    if ((user?.count_views || 0) > 0) {
      toggleAccordion(taskId);
    } else {
      togglePlansModal();
    }
  };

  const togglePlansModal = () => {
    setShowPlansModal(!showPlansModal);
  };

  const handleCopyLink = (taskId: number) => {
    navigator.clipboard.writeText(
      `${window.location.origin + window.location.pathname}#task-${taskId}`,
    );
    setActiveModal(taskId);
    setTimeout(() => setActiveModal(null), 2000);
  };

  const getImageUrl = (path: string) => {
    const backendUrl = "https://app.esdev.tech";
    return path.startsWith("http") ? path : `${backendUrl}${path}`;
  };

  const getCompletionPercentage = () => {
    if (!guideDetails) return 0;
    return guideDetails.tasks_count > 0
      ? (guideDetails.competed_tasks_count / guideDetails.tasks_count) * 100
      : 0;
  };

  if (isLoadingGuideDetails) {
    return (
      <div className="bg-[#101114] text-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CBFF51]"></div>
      </div>
    );
  }

  if (guideDetailsError) {
    return (
      <div className="bg-[#101114] text-white min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-red-500 text-xl mb-4">Error loading guide details</p>
        <p className="text-gray-400 mb-6">{guideDetailsError}</p>
        <button
          onClick={() => router.push("/guides")}
          className="bg-[#1C1D21] text-white px-4 py-2 rounded-lg hover:bg-[#2A2C32]">
          Back to Guides
        </button>
      </div>
    );
  }

  if (!guideDetails) {
    return (
      <div className="bg-[#101114] text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Guide not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="my-[8px] px-[16px] sm:mb-[64px] sm:px-[32px] lg:mb-[80px] lg:px-[96px]">
        <button
          onClick={() => router.push("/guides")}
          className="font-chakra flex items-center pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F] w-[72px] h-[32px]">
          <IoIosArrowBack size={20} />
          <p>Back</p>
        </button>
        <div className="flex flex-col xl:flex-row justify-between mt-[10px] pt-[16px] w-full gap-[24px] xl:gap-[120px]">
          <section className="w-full xl:w-[34%] flex flex-col gap-[24px]">
            <div className="flex items-center gap-[24px]">
              <div className="h-[80px] w-[80px] rounded-[20px] relative overflow-hidden">
                <Image
                  src={getImageUrl(guideDetails.logo)}
                  alt={guideDetails.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="text-[30px] leading-[36px] font-bold truncate max-w-[220px]">
                  {guideDetails.title}
                </p>
                <div className="flex items-center gap-[8px]">
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <GoDotFill size={16} className="text-[#C9FF4A]" />
                    </div>
                    <p className="text-[14px] leading-[16px] font-bold">
                      Actual
                    </p>
                  </div>
                  <div>
                    <GoDotFill size={8} className="text-[#5D5E60]" />
                  </div>
                  <p className="text-[#8E8E8E] text-[14px] leading-[16px] font-semibold">
                    {guideDetails.created}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between xl:items-start xl:flex-col gap-[24px]">
              <div className="flex items-center gap-[6px]">
                <div className="flex items-center bg-[#202124] rounded-[8px] px-[10px] py-[8px] gap-1">
                  <IoMdTime size={16} />
                  <p className="text-[14px] leading-[16px] font-semibold">
                    {guideDetails.time} min
                  </p>
                </div>
                {guideDetails.markers.map((marker) => (
                  <div
                    key={marker.id}
                    className={`flex items-center rounded-[8px] px-[10px] py-[8px] text-[14px] leading-[16px] font-semibold ${
                      marker.highlighted
                        ? "bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C]"
                        : "bg-[#202124]"
                    }`}>
                    {marker.icon && (
                      <Image
                        src={getImageUrl(marker.icon.path)}
                        alt={marker.title}
                        width={16}
                        height={16}
                        className="mr-1"
                      />
                    )}
                    <span
                      className={
                        marker.highlighted
                          ? "bg-gradient-to-r from-[#CBFF51] to-[#7EE39C] inline-block text-transparent bg-clip-text"
                          : ""
                      }>
                      <p className="text-[14px] leading-[16px] font-semibold truncate max-w-[100px]">
                        {marker.title}
                      </p>
                    </span>
                  </div>
                ))}
                {/* TODO: использовать в маркерах если есть цена */}
                <div className="flex items-center rounded-[8px] px-[10px] py-[8px] text-[14px] leading-[16px] font-semibold bg-gradient-to-b from-[#FF934A29] to-[#FFE47850]">
                  <p className="text-[14px] leading-[16px] font-semibold truncate max-w-[100px] text-[#FFD387]">
                    $150
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[7px]">
                <button className="font-sans flex items-center gap-1 bg-[#11CA00] rounded-[14px] text-[16px] leading-[20px] h-[44px] justify-center font-bold w-[207px]">
                  <IoCalendarClear size={20} />
                  <p>Remind on Telegram</p>
                </button>
                <div onClick={handleToggleFavorite} className="cursor-pointer">
                  {isFavorite ? (
                    <div className="bg-[#202328] w-[44px] h-[44px] items-center justify-center flex rounded-[14px] text-[#CBFF51]">
                      <MdFavorite size={20} />
                    </div>
                  ) : (
                    <div className="bg-[#202328] w-[44px] h-[44px] items-center justify-center flex rounded-[14px]">
                      <MdFavoriteBorder size={20} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-0 h-px bg-[#27292D]" />

            <div className="flex items-center gap-8 xl:gap-0 xl:justify-between -mt-[30px]">
              <HalfChartPie defaultValue={guideDetails.evaluation} size="big" />
              <div className="flex flex-col items-center gap-2">
                <p className="text-[14px] leading-[16px] text-[#50535D]">
                  Investment
                </p>
                <p className="text-[18px] leading-[22px] sm:text-[20px] sm:leading-[24px] font-bold truncate max-w-[100px]">
                  {guideDetails.investments}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[14px] leading-[16px] text-[#50535D]">TVL</p>
                <p className="text-[18px] leading-[22px] sm:text-[20px] sm:leading-[24px] font-bold">
                  {guideDetails.tvl}
                </p>
              </div>
            </div>
            <div>
              {showFullDescription && guideDetails.description_full ? (
                <div
                  className="text-[#9A9A9A] text-[14px] leading-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: guideDetails.description_full,
                  }}
                />
              ) : (
                <p className="text-[#9A9A9A] text-[14px] leading-[20px] max-w-[280px]">
                  {guideDetails.description}
                </p>
              )}
              <div className="mt-[20px]">
                <p className="text-[#9A9A9A] text-[14px] leading-[20px]">
                  {guideDetails.description_full && (
                    <button
                      className="text-[#CBFF51] text-[14px] leading-[20px] mt-[10px] xl:mt-0"
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }>
                      {showFullDescription ? "Less" : "More"}
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              {guideDetails.link_site && (
                <Link
                  className="group"
                  href={guideDetails.link_site}
                  target="_blank">
                  <div className="bg-[#212226] group-hover:bg-[#26282c] p-[6px] rounded-[8px] h-[36px] w-[36px] text-[#949392] cursor-pointer">
                    <GrLanguage size={24} />
                  </div>
                </Link>
              )}
              {guideDetails.link_x && (
                <Link
                  className="group"
                  href={guideDetails.link_x}
                  target="_blank">
                  <div className="bg-[#212226] group-hover:bg-[#26282c] p-[6px] rounded-[8px] h-[36px] w-[36px] text-[#949392] cursor-pointer">
                    <PiXLogo size={24} />
                  </div>
                </Link>
              )}
              {guideDetails.link_telegram && (
                <Link
                  className="group"
                  href={guideDetails.link_telegram}
                  target="_blank">
                  <div className="bg-[#212226] group-hover:bg-[#26282c] p-[6px] rounded-[8px] h-[36px] w-[36px] text-[#949392] cursor-pointer">
                    <FaTelegramPlane size={24} />
                  </div>
                </Link>
              )}
            </div>
          </section>
          <section className="w-full xl:w-[70%] flex flex-col gap-[18px]">
            <p className="text-[20px] leading-[24px] font-bold">Tasks</p>
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-[16px] leading-[18px] font-bold ">
                <div className="flex items-center gap-3">
                  <p className="text-[#707273]">Completed:</p>
                  <p className="text-white">
                    {guideDetails.competed_tasks_count}/
                    {guideDetails.tasks_count}
                  </p>
                </div>
                <p>{getCompletionPercentage().toFixed(0)}%</p>
              </div>
              <CustomSlider
                marks={marks
                  .filter((mark) => mark.visible)
                  .map((mark) => ({ value: mark.value }))}
                value={guideDetails.competed_tasks_count}
                step={1}
                min={0}
                max={
                  guideDetails.tasks_count > 0 ? guideDetails.tasks_count : 1
                }
              />
            </div>
            {subscriptions && subscriptions.length <= 0 && (
              <div className="bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] flex items-center justify-between py-[8px] pr-[12px] pl-[20px] h-[80px] md:h-[60px] rounded-[14px] gap-[16px]">
                <div className="flex justify-center md:items-center min-h-[60px] md:h-[40px] flex-col md:flex-row gap-[8px] text-[14px] md:text-[15px] leading-[16px] font-bold">
                  <p>Free task previews on your plan</p>
                  <div className="flex items-center gap-[8px]">
                    <SmallChartPie
                      max={user?.free_views || 0}
                      current={user?.count_views || 0}
                    />
                    <p>
                      {user?.count_views} / {user?.free_views}
                    </p>
                  </div>
                </div>
                <button
                  className="h-[44px] bg-[#11CA00] min-w-[110px] p-[8px] sm:p-[20px] rounded-[14px] md:text-[16px] text-[14px] font-sans leading-[20px] flex items-center justify-center"
                  onClick={togglePlansModal}>
                  Upgrade plan
                </button>
              </div>
            )}
            <ul className="flex flex-col gap-3">
              {guideDetails.tasks.map((task) => (
                <li
                  id={`task-${task.id}`}
                  key={task.id}
                  className="cursor-pointer px-4 py-3 rounded-[12px] border-[1px] transition-all duration-300 border-gray-700 hover:border-gray-500 bg-[#16171A]">
                  <div
                    className="flex items-center justify-between"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenTaskById(task.id);
                    }}>
                    <div className="flex items-center gap-4">
                      <div
                        onClick={(e) => handleToggleTaskComplete(e, task.id)}
                        className={`w-[24px] h-[24px] min-w-[24px] min-h-[24px] flex items-center justify-center rounded-full border-2 transition-all duration-300 shrink-0 ${
                          task.completed > 0
                            ? "border-[1px] border-[#73A304] bg-[#528E09]"
                            : "border-gray-700"
                        }`}>
                        {task.completed > 0 && (
                          <div>
                            <MdOutlineDone size={20} />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <p
                          className={`font-bold mr-[5px] ${
                            task.completed > 0 && "text-[#747677]"
                          }`}>
                          {task.title}
                        </p>
                        <div className="text-[#747677] flex items-center gap-1.5">
                          <IoMdTime size={12} />
                          <p>{task.time} min</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-[8px] text-[#8E8E8E] relative">
                      <div
                        className="h-[32px] w-[32px] bg-[#1E1F23] rounded-full flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyLink(task.id);
                        }}>
                        <AiOutlineLink size={20} />
                      </div>
                      {activeModal === task.id && (
                        <p className="absolute top-9 right-4 bg-black text-white rounded-[9px] px-[10px] py-[7px] shadow-lg w-[125px] flex items-center justify-center">
                          Link copied
                        </p>
                      )}
                      <div className="text-[#8E8E8E] cursor-pointer">
                        {activeTask === task.id ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    {activeTask === task.id && (
                      <div className="mt-3 px-[16px] flex flex-col gap-[16px]">
                        {isLoadingTaskDetails ? (
                          <div className="flex justify-center py-4">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-[#CBFF51]"></div>
                          </div>
                        ) : taskDetails ? (
                          <div
                            className="task-content"
                            dangerouslySetInnerHTML={{
                              __html: taskDetails.content,
                            }}
                          />
                        ) : (
                          <p className="text-gray-400">
                            No task details available
                          </p>
                        )}

                        <div
                          onClick={(e) => handleToggleTaskComplete(e, task.id)}
                          className={`cursor-pointer py-[12px] pl-[16px] pr-[28px] rounded-[12px] flex items-center transition-all duration-300 mb-[20px] w-[230px] ${
                            task.completed > 0 ? "bg-[#1D2A19]" : "bg-[#070709]"
                          }`}>
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                task.completed > 0
                                  ? "border-[#47572D75] bg-[#151B15]"
                                  : "border-[#32353D]"
                              }`}>
                              <div
                                className={`${
                                  task.completed > 0 &&
                                  `bg-[#CBFF512E] rounded-full p-[4px] text-[#CBFF51]`
                                }`}>
                                {task.completed > 0 && (
                                  <MdOutlineDone size={16} />
                                )}
                              </div>
                            </div>
                            <p
                              className={`font-semibold text-[16px] leading-[15px] ${
                                task.completed > 0
                                  ? "text-[#A0A8AECC]"
                                  : "text-[#A0A8AE]"
                              }`}>
                              Task Completed
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
      {showPlansModal && <PlansModal togglePlansModal={togglePlansModal} />}
    </div>
  );
};

export default Guide;
