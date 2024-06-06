"use client";
import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toggleScroll } from "@/redux/slices/ScrollSlice";
import { toggleCheckbox } from "@/redux/slices/checkboxSlice";
import { setFormat } from "@/redux/slices/timeFormatSlice";
import {
  AppDispatch,
  RootState,
  setLarge,
  setMedium,
  setSmall,
} from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Settings = () => {
  const dispatch: AppDispatch = useDispatch();
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  const isChecked = useSelector((state: RootState) => state.checkbox.isChecked);
  const isScroll = useSelector((state: RootState) => state.Scroll.isScroll);
  const format = useSelector((state: RootState) => state.timeFormat.format);

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormat(event.target.value as "24-hour" | "12-hour"));
  };

  const handleChange = () => {
    dispatch(toggleCheckbox());
  };

  const handleScroll = () => {
    dispatch(toggleScroll());
  };
  const openLink = () => {
    window.location.href = "chrome://settings/clearBrowserData";
  };

  return (
    <div>
      <h1 className='mt-2 mb-1 font-semibold'>Clearing history</h1>

      <Button
        variant='secondary'
        className={` ${fontSize} dark:bg-[#353535] mb-4 dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300`}
        size='sm'
        onClick={openLink}
      >
        Clear History
      </Button>

      <div>
        <h3 className='mb-4 mt-2 font-semibold'>Right click options</h3>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='search' defaultChecked />
            <label
              htmlFor='search'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Search by text selection
            </label>
          </div>
          <div className='flex items-center space-x-2 mb-4'>
            <Checkbox id='terms' defaultChecked />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Search by domain
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3 className='mb-2 mt-4 font-semibold'>Interface Style</h3>
        <div className='flex gap-2 mb-4'>
          <Button
            variant='secondary'
            className={` ${fontSize} dark:bg-[#353535] ${
              fontSize === "small" ? "border-[#ccc] dark:border-[#888]" : ""
            } dark:text-white border-2 hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300`}
            size='sm'
            onClick={() => dispatch(setSmall())}
          >
            Small
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className={` ${fontSize} dark:bg-[#353535] ${
              fontSize === "medium" ? "border-[#ccc] dark:border-[#888]" : ""
            } dark:text-white hover:bg-[#f1f1f1]  border-2 text-[10px] dark:hover:bg-[#656565] transition duration-300`}
            onClick={() => dispatch(setMedium())}
          >
            Medium
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className={` ${fontSize} dark:bg-[#353535] ${
              fontSize === "large" ? "border-[#ccc] dark:border-[#888]" : ""
            } dark:text-white border-2 hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300`}
            onClick={() => dispatch(setLarge())}
          >
            large
          </Button>
        </div>
      </div>
      <div>
        <h3 className='mb-4 mt-5 font-semibold'>Other options</h3>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='term' checked={isChecked} onClick={handleChange} />

            <label
              htmlFor='term'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Open in new tab
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='tab' checked={isScroll} onClick={handleScroll} />
            <label
              htmlFor='tab'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Enable infinity scroll
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3 className='mb-4 mt-5 font-semibold'>Hour Format</h3>
        <RadioGroup defaultValue='24-hour'>
          <div className='flex items-center space-x-2 mb-4'>
            <RadioGroupItem
              value='12-hour'
              id='r1'
              checked={format === "12-hour"}
              onClick={handleChanges}
            />
            <Label htmlFor='r1'>12 Hours</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem
              value='24-hour'
              id='r2'
              checked={format === "24-hour"}
              onClick={handleChanges}
            />
            <Label htmlFor='r2'>24 Hours</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h3 className='mb-2 mt-4 font-semibold'>Select a date format</h3>
        <Select>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='YYYY/MM/DD' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='apple'>YYYY/MM/DD</SelectItem>
              <SelectItem value='banana'>DD/MM/YYYY</SelectItem>
              <SelectItem value='blueberry'>MM/DD/YYYY</SelectItem>
              <SelectItem value='grapes'>YYYY-MM-DD</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <h3 className='mb-2 mt-4 font-semibold'>Toolbar button icon</h3>
        <Select>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Light Mode' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='apple'>Default</SelectItem>
              <SelectItem value='banana'>Dark Mode</SelectItem>
              <SelectItem value='blueberry'>Light Mode</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Settings;
