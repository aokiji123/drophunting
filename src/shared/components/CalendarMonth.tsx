"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

// Types
type SelectedDays = Set<string>;

interface CalendarProps {
  selectedDays: SelectedDays;
  onSelectedDaysChange: (newSelectedDays: SelectedDays) => void;
  startMonth?: number; // Optional parameter for starting month
}

const CalendarMonth: React.FC<CalendarProps> = ({
  selectedDays,
  onSelectedDaysChange,
  startMonth = new Date().getMonth(),
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();

  // States
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [month, setMonth] = useState<number>(startMonth);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [year, setYear] = useState<number>(today.getFullYear());

  // Function to get first day of month (1 - Monday, 7 - Sunday)
  const getFirstDayOfMonth = (month: number, year: number): number => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 7 : firstDay; // If Sunday, count as 7
  };

  // Function to get days in month
  const getDaysInMonth = (month: number, year: number): number =>
    new Date(year, month + 1, 0).getDate();

  // Function to handle day click
  const toggleDay = (day: number) => {
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const newSelectedDays = new Set(selectedDays);

    if (newSelectedDays.has(dateString)) {
      newSelectedDays.delete(dateString);
    } else {
      newSelectedDays.add(dateString);
    }

    onSelectedDaysChange(newSelectedDays);
  };

  // Arrow handlers
  const goToPreviousMonth = () => {
    // Can't go to previous month if it's before current month
    if (month > currentMonth || year > currentYear) {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // Compute first day of month and days in month
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  const daysInMonth = getDaysInMonth(month, year);

  // Fill days array for calendar display
  const calendarDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Add empty cells for days before month start
  const leadingEmptyDays = Array.from(
    { length: firstDayOfMonth - 1 },
    (_, index) => index,
  );

  // Function to get month name with first letter capitalized
  const getMonthName = (month: number, year: number): string => {
    const monthName = new Date(year, month).toLocaleString(
      i18n.language === "ru" ? "ru-RU" : "en-US",
      { month: "long" },
    );
    return monthName.charAt(0).toUpperCase() + monthName.slice(1);
  };

  const daysOfWeekTranslations = [
    t("calendarMonth.daysOfWeek.mon"),
    t("calendarMonth.daysOfWeek.tue"),
    t("calendarMonth.daysOfWeek.wed"),
    t("calendarMonth.daysOfWeek.thu"),
    t("calendarMonth.daysOfWeek.fri"),
    t("calendarMonth.daysOfWeek.sat"),
    t("calendarMonth.daysOfWeek.sun"),
  ];

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-3">
        <button
          className={`cursor-pointer ${!(month > currentMonth || year > currentYear) && "opacity-65 !cursor-not-allowed"}`}
          onClick={goToPreviousMonth}
          disabled={month === currentMonth && year === currentYear} // Button inactive if current month
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7803 12.2197C18.0732 12.5126 18.0732 12.9874 17.7803 13.2803L15.0607 16L17.7803 18.7197C18.0732 19.0126 18.0732 19.4874 17.7803 19.7803C17.4874 20.0732 17.0126 20.0732 16.7197 19.7803L13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.7197 12.2197C17.0126 11.9268 17.4874 11.9268 17.7803 12.2197Z"
              fill="#545969"
            />
          </svg>
        </button>

        <span className="text-[14px] font-medium font-plex">
          {`${getMonthName(month, year)} ${year}`}
        </span>

        <button className="cursor-pointer" onClick={goToNextMonth}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7197 19.7803C14.4268 19.4874 14.4268 19.0126 14.7197 18.7197L17.4393 16L14.7197 13.2803C14.4268 12.9874 14.4268 12.5126 14.7197 12.2197C15.0126 11.9268 15.4874 11.9268 15.7803 12.2197L19.0303 15.4697C19.3232 15.7626 19.3232 16.2374 19.0303 16.5303L15.7803 19.7803C15.4874 20.0732 15.0126 20.0732 14.7197 19.7803Z"
              fill="#545969"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7">
        {daysOfWeekTranslations.map((day) => (
          <div
            key={day}
            className={`flex items-center justify-center h-8 text-[14px] font-plex ${(day === t("calendarMonth.daysOfWeek.sat") || day === t("calendarMonth.daysOfWeek.sun")) && "text-[#545969]"}`}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Заполняем пустые ячейки до первого дня месяца */}
        {leadingEmptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="w-full h-8"></div>
        ))}

        {/* Отображаем дни месяца */}
        {calendarDays.map((day) => {
          const isWeekend =
            (firstDayOfMonth + day - 1) % 7 === 6 ||
            (firstDayOfMonth + day - 1) % 7 === 0;
          const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isSelected = selectedDays.has(dateString);

          return (
            <div
              key={day}
              className={`w-full h-8 flex justify-center rounded-lg items-center cursor-pointer text-[14px] font-plex font-normal ${
                isSelected ? "bg-[#2DFE1A]/40 !text-white" : "hover:bg-white/5"
              } ${isWeekend ? "text-[#545969] " : ""}`}
              onClick={() => toggleDay(day)}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarMonth;
