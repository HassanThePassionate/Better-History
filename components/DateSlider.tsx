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
    <div className='flex items-center justify-between mt-10'>
      <Button
        onClick={handlePrev}
        disabled={dates[0].getTime() >= today.getTime()}
        size='icon'
        variant='outline'
      >
        <ChevronLeft size={16} />
      </Button>

      <div className='flex items-center gap-5'>
        {dates.map((date, index) => (
          <Card
            key={index}
            className={`text-center flex items-center justify-center flex-col dark:hover:bg-[#666] hover:bg-black h-[50px] w-[90px] max-w-[90px] hover:text-white transition duration-500 ${
              date.getTime() === selectedDate.getTime()
                ? "bg-black text-white dark:bg-[#666]"
                : "bg-gray-200 dark:bg-[#333]"
            }`}
            onClick={() => handleDateSelect(date)}
            style={{ cursor: "pointer" }}
          >
            <h3 className='text-[14px]'>{getLabel(date)}</h3>
            <p className='text-[12px]'>{getFormattedDate(date)}</p>
          </Card>
        ))}
      </div>

      <Button onClick={handleNext} variant='outline' size='icon'>
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default DateSlider;
