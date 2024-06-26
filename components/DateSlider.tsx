"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DateSlider: React.FC = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    return date;
  });

  const [dates, setDates] = useState<Date[]>(initialDates);
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  useEffect(() => {
    const todayIndex = initialDates.findIndex(
      (date) => date.toDateString() === today.toDateString()
    );
    setSelectedDate(initialDates[todayIndex]);
  }, []);

  const getLabel = (date: Date): string => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    date.setHours(0, 0, 0, 0);

    if (date.getTime() === today.getTime()) return "Today";
    if (date.getTime() === yesterday.getTime()) return "Yesterday";
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const getFormattedDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const handleDateSelect = (date: Date): void => {
    setSelectedDate(date);
  };

  const handlePrev = (): void => {
    const newDates = dates.map((date) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
    setDates(newDates);
  };

  const handleNext = (): void => {
    const newDates = dates.map((date) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
    setDates(newDates);
  };

  return (
    <div className='flex items-center justify-between py-[13px]'>
      <Button
        onClick={handlePrev}
        disabled={dates[0].getTime() >= today.getTime()}
        size='icon'
        variant='outline'
        className='h-[42px] max-w-[25px] min-w-[25px] relative rounded bg-[#f9f9f9] dark:bg-[#353535] dark:hover:bg-[#757575] hover:bg-black hover:text-white transition duration-300 border border-[#f3f3f3] dark:border-[#333]'
      >
        <ChevronLeft size={12} />
      </Button>

      <div className='flex items-center gap-3'>
        {dates.map((date, index) => (
          <Card
            key={index}
            className={`text-center flex items-center rounded justify-center flex-col dark:border-[#333] dark:hover:bg-[#757575] hover:bg-black pt-[7px] px-[8px] pb-[8px] w-[70px] lg:w-[83px] hover:text-white transition duration-500 ${
              date.getTime() === selectedDate.getTime()
                ? "bg-black text-white dark:bg-[#757575]"
                : "bg-[#f9f9f9] dark:bg-[#353535]"
            }`}
            onClick={() => handleDateSelect(date)}
            style={{ cursor: "pointer" }}
          >
            <strong className='text-[12px]'>{getLabel(date)}</strong>
            <p className='text-[10px]'>{getFormattedDate(date)}</p>
          </Card>
        ))}
      </div>

      <Button
        onClick={handleNext}
        variant='outline'
        size='icon'
        className='h-[42px] max-w-[25px] min-w-[25px] relative rounded bg-[#f9f9f9] dark:bg-[#353535] dark:hover:bg-[#757575] hover:bg-black hover:text-white transition duration-300 border border-[#f3f3f3] dark:border-[#333]'
      >
        <ChevronRight size={12} />
      </Button>
    </div>
  );
};

export default DateSlider;
