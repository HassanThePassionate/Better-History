import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Settings = () => {
  return (
    <div>
      <h1 className='mt-2'>Clearing history</h1>
      <Button
        variant='secondary'
        className='dark:bg-[#353535] mb-4 dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300'
        size='sm'
      >
        Clear History
      </Button>
      <div>
        <h3 className='mb-4'>Right click options</h3>
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
        <h3 className='mb-4'>Interface Style</h3>
        <div className='flex gap-2 mb-4'>
          <Button
            variant='secondary'
            className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300'
            size='sm'
          >
            Small
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300'
          >
            Medium
          </Button>
          <Button
            variant='secondary'
            size='sm'
            className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300'
          >
            large
          </Button>
        </div>
      </div>
      <div>
        <h3 className='mb-4'>Other options</h3>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='term' defaultChecked />

            <label
              htmlFor='term'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Open in new tab
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='tab' defaultChecked />
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
        <h3 className='my-4'>Hour Format</h3>
        <RadioGroup defaultValue='24 Hours'>
          <div className='flex items-center space-x-2 mb-4'>
            <RadioGroupItem value='12 Hours' id='r1' />
            <Label htmlFor='r1'>12 Hours</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='24 Hours' id='r2' />
            <Label htmlFor='r2'>24 Hours</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h3 className='my-4'>Select a date format</h3>
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
        <h3 className='my-4'>Toolbar button icon</h3>
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
