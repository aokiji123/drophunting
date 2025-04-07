"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { subaccountTabs, tabs } from "@/shared/utils/tabs";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Progress as ProgressIcon } from "@/shared/icons/Progress";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useStore from "@/shared/store";
import { Slider, sliderClasses, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomSlider = styled(Slider)({
  height: 4,
  [`&.${sliderClasses.root}`]: {
    padding: 0,
    margin: 0,
  },
  "& .MuiSlider-track": {
    background: "#CBFF51",
    border: "none",
    zIndex: 2,
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
});

const Progress = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const {
    user,
    fetchSubaccountProjects,
    subaccountProjects,
    isLoadingSubaccountProjects,
    fetchSubaccountProjectTasks,
    subaccountProjectTasks,
    isLoadingSubaccountProjectTasks,
  } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    fetchSubaccountProjects();
  }, [fetchSubaccountProjects]);

  useEffect(() => {
    if (selectedProject && selectedProject.id) {
      fetchSubaccountProjectTasks(selectedProject.id);
    }
  }, [selectedProject, fetchSubaccountProjectTasks]);

  const openModal = (project: { id: number; title: string }) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const getImageUrl = (path: string) => {
    const backendUrl = "https://app.drophunting.io";
    return path.startsWith("http") ? path : `${backendUrl}${path}`;
  };

  const calculateProgress = (userId: number) => {
    if (
      !subaccountProjectTasks ||
      !subaccountProjectTasks.tasks ||
      subaccountProjectTasks.tasks.length === 0
    ) {
      return 0;
    }

    const totalTasks = subaccountProjectTasks.tasks_count;
    const completedTasks = subaccountProjectTasks.tasks.filter((task) =>
      task.users.some((user) => user.id === userId),
    ).length;

    return Math.round((completedTasks / totalTasks) * 100);
  };

  const getSubaccounts = () => {
    if (!subaccountProjectTasks || !subaccountProjectTasks.tasks) {
      return [];
    }

    const userMap = new Map();

    subaccountProjectTasks.tasks.forEach((task) => {
      task.users.forEach((user) => {
        if (!userMap.has(user.id)) {
          userMap.set(user.id, user);
        }
      });
    });

    return Array.from(userMap.values());
  };

  const isTaskCompleted = (taskId: number, userId: number) => {
    if (!subaccountProjectTasks || !subaccountProjectTasks.tasks) {
      return false;
    }

    const task = subaccountProjectTasks.tasks.find((t) => t.id === taskId);
    if (!task) return false;

    return task.users.some((user) => user.id === userId);
  };

  return (
    <div className="bg-[#101114] text-white">
      <Header />
      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px]">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[240px] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <OverlayScrollbarsComponent
              className="h-auto max-h-[300px] lg:max-h-none"
              options={{
                scrollbars: {
                  autoHide: "never",
                },
              }}>
              <ul className="w-full border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex-col mb-3">
                {user?.subaccount
                  ? subaccountTabs().map((tab) => (
                      <li
                        key={tab.name}
                        className={`whitespace-nowrap p-[6px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                          isActive(tab.href)
                            ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                            : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                        }`}>
                        <Link
                          href={tab.href}
                          className="flex items-center gap-3 text-[16px]">
                          <span className="hidden lg:block">
                            {tab.name === "Progress" ? (
                              <div className="group-hover:text-white">
                                <ProgressIcon
                                  size={24}
                                  color={
                                    isActive(tab.href)
                                      ? "white"
                                      : "currentColor"
                                  }
                                />
                              </div>
                            ) : (
                              tab.icon
                            )}
                          </span>
                          {tab.name}
                        </Link>
                      </li>
                    ))
                  : tabs().map((tab) => (
                      <li
                        key={tab.name}
                        className={`whitespace-nowrap p-[6px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                          isActive(tab.href)
                            ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                            : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                        }`}>
                        <Link
                          href={tab.href}
                          className="flex items-center gap-3 text-[16px]">
                          <span className="hidden lg:block">
                            {tab.name === "Progress" ? (
                              <div className="group-hover:text-white">
                                <ProgressIcon
                                  size={24}
                                  color={
                                    isActive(tab.href)
                                      ? "white"
                                      : "currentColor"
                                  }
                                />
                              </div>
                            ) : (
                              tab.icon
                            )}
                          </span>
                          {tab.name}
                        </Link>
                      </li>
                    ))}
              </ul>
            </OverlayScrollbarsComponent>
          </nav>
          <section className="w-full min-h-[1300px] bg-[--dark-gray] p-[32px] rounded-[16px]">
            <div className="flex-col flex mb-[24px]">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <ProgressIcon size={24} color="#ffffff" />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  {t("progress.title")}
                </p>
                <p className="text-[#949392] leading-[20px] mt-2 max-w-full lg:w-[650px]">
                  {t("progress.subtitle")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              {isLoadingSubaccountProjects ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]"></div>
                </div>
              ) : subaccountProjects?.data &&
                subaccountProjects.data.length > 0 ? (
                subaccountProjects.data.map((project) => (
                  <div
                    key={project.id}
                    onClick={() =>
                      openModal({ id: project.id, title: project.title })
                    }
                    className="max-w-[650px] h-[75px] w-full bg-[#1F2025] border-[1px] border-[#25272B] rounded-[12px] p-[16px] flex items-center justify-between cursor-pointer hover:border-[#3E4047] transition-colors">
                    <div className="flex items-center gap-[16px]">
                      <Image
                        className="rounded-[8px]"
                        src={getImageUrl(project.logo)}
                        alt={project.title}
                        width={42}
                        height={42}
                        unoptimized
                      />
                      <div className="flex flex-col gap-[2px]">
                        <p className="text-[15px] leading-[20px] font-semibold">
                          {project.title}
                        </p>
                        <p className="flex items-center gap-[8px]">
                          <FiUsers size={16} />
                          <span className="text-[14px] leading-[20px] font-normal">
                            {project.users_count} {t("progress.accounts")}
                          </span>
                        </p>
                      </div>
                    </div>
                    <FaChevronRight size={20} />
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  {t("progress.noProjects")}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-20">
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={closeModal}
          />

          <button
            onClick={closeModal}
            className="sm:block hidden top-1 right-[560px] absolute z-30">
            <IoClose size={24} />
          </button>

          <div className="fixed top-0 right-0 h-full w-full max-w-[550px] bg-[#17181B] shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto">
            <div className="px-[24px] py-[20px] flex items-center justify-between border-b-[1px] border-[#2B2D31]">
              <div className="flex items-center gap-[16px]">
                <Image
                  src={getImageUrl(
                    subaccountProjects?.data.find(
                      (p) => p.id === selectedProject.id,
                    )?.logo || "",
                  )}
                  className="rounded-[8px]"
                  alt={selectedProject.title || "Project"}
                  width={34}
                  height={34}
                  unoptimized
                />
                <p className="text-[22px] leading-[20px] font-semibold">
                  {selectedProject.title}
                </p>
                <p className="text-[15px] leading-[18px] font-semibold">
                  {subaccountProjects?.data.find(
                    (p) => p.id === selectedProject.id,
                  )?.users_count || 0}{" "}
                  {t("progress.accounts")}
                </p>
              </div>
              <button onClick={closeModal} className="block sm:hidden">
                <IoClose size={24} />
              </button>
            </div>

            {isLoadingSubaccountProjectTasks ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]"></div>
              </div>
            ) : subaccountProjectTasks ? (
              <OverlayScrollbarsComponent
                className="overflow-auto"
                options={{
                  scrollbars: {
                    autoHide: "never",
                  },
                }}>
                {getSubaccounts().map((user) => (
                  <div
                    key={user.id}
                    className="px-[24px] py-[20px] flex flex-col gap-[6px]">
                    <div className="flex items-center gap-[16px]">
                      <p className="text-[16px] leading-[16px] font-semibold">
                        {user.name}
                      </p>
                      <div className="w-full max-w-[150px] flex items-center justify-center">
                        <CustomSlider
                          value={calculateProgress(user.id)}
                          step={1}
                          min={0}
                          max={100}
                          disabled
                        />
                      </div>
                      <p className="text-[14px] leading-[18px] font-semibold">
                        {calculateProgress(user.id)}%
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px] flex-wrap mt-2">
                      {subaccountProjectTasks.tasks.map((task) => (
                        <div
                          key={task.id}
                          className={`w-[25px] h-[25px] ${
                            isTaskCompleted(task.id, user.id)
                              ? "bg-[#CBFF51] text-black"
                              : "border-[1px] border-[#34353B] bg-[#12140D]"
                          } rounded-full flex items-center justify-center text-[12px] leading-[18px] font-semibold`}>
                          {task.serial_id}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </OverlayScrollbarsComponent>
            ) : (
              <div className="text-center py-8">
                {t("progress.noProgressData")}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Progress;
