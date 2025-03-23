"use client";

import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

import CalendarMonth from "./CalendarMonth";
import useStore from "../store";

interface CalendarModalProps {
  open: boolean;
  onClose: () => void;
  metadata: {
    project_id: number;
  };
}

export default function CalendarModal({
  open,
  onClose,
  metadata,
}: CalendarModalProps) {
  const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());
  const [notificationStatus, setNotificationStatus] = useState<true | false>(
    false,
  );
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addCalendarNotification, getCalendarNotifications } = useStore();

  useEffect(() => {
    if (metadata.project_id) {
      setIsLoading(true);

      getCalendarNotifications(metadata.project_id)
        .then((res) => {
          setSelectedDays(new Set(res.map((date) => date.date)));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [metadata]);

  const handleSelectedDaysChange = (newSelectedDays: Set<string>) => {
    setSelectedDays(newSelectedDays);
  };

  const handleRemindOnTelegram = () => {
    setIsLoading(true);

    addCalendarNotification({
      project_id: metadata.project_id,
      dates: Array.from(selectedDays),
    })
      .then(() => {
        setNotificationStatus(true);
        setNotificationMessage("Notifications are configured");
      })
      .catch((err) => {
        setNotificationStatus(false);
        setNotificationMessage(
          err.status === 403
            ? "Telegram account not linked"
            : err.status === 422
              ? "Select dates"
              : "Something went wrong",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (open) {
    return (
      <div className="cursor-default fixed top-0 left-0 right-0 bottom-0 bg-[#090A0C]/80 z-[999] px-5">
        <div
          className="relative p-5 bg-[#17181B] rounded-lg mt-[5vw] max-w-[547px] mx-auto flex flex-col items-start"
          style={{
            boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)",
          }}>
          {isLoading && (
            <div className="bg-[#17181B] absolute left-0 right-0 bottom-0 top-0 rounded-lg z-[1] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]" />
            </div>
          )}

          <button className="absolute top-5 right-5" onClick={onClose}>
            <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
          </button>

          <h6 className="font-plex text-[22px] font-medium">Calendar</h6>

          <p className="mt-2 mb-5 text-[#94969F] text-[13px] font-plex">
            Напомнить через телеграм-бота
          </p>

          <div className="flex items-start gap-5 w-full">
            <div className="w-full">
              <CalendarMonth
                selectedDays={selectedDays}
                onSelectedDaysChange={handleSelectedDaysChange}
              />
            </div>
            <div className="w-full hidden sm:block">
              <CalendarMonth
                selectedDays={selectedDays}
                onSelectedDaysChange={handleSelectedDaysChange}
                startMonth={new Date().getMonth() + 1}
              />
            </div>
          </div>

          {notificationMessage.length > 0 && (
            <div
              className={`text-center w-full mt-5 leading-[10%] ${!notificationStatus ? "text-red-500" : "text-green-500"}`}>
              {notificationMessage}
            </div>
          )}

          <div className="flex-col-reverse items-stretch xs:flex-row mt-8 flex gap-3 xs:items-center justify-end w-full font-plex text-[16px] font-medium">
            <button
              onClick={onClose}
              className="bg-[#33343A] hover:bg-[#292a2f] rounded-lg h-11 px-6">
              Cancel
            </button>

            <button
              onClick={handleRemindOnTelegram}
              className="bg-[#11CA00] hover:bg-[#0fb201] px-3 h-11 rounded-lg">
              Notify in Telegram
            </button>
          </div>
        </div>
      </div>
    );
  }
}
