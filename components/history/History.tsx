"use client";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Separator } from "../ui/separator";

interface HistoryProps {
  showcase: boolean;
}

const History = ({ showcase }: HistoryProps) => {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  const isChecked = useSelector((state: RootState) => state.checkbox.isChecked);
  const isScroll = useSelector((state: RootState) => state.Scroll.isScroll);
  const [links, setLinks] = React.useState([
    {
      id: "1",
      url: "https://dev.to/derlin/get-favicons-from-any-website-using-a-hidden-google-api-3p1e",
    },
    {
      id: "2",
      url: "https://web.whatsapp.com/",
    },
    {
      id: "3",
      url: "https://www.youtube.com/watch?v=LuJpD6-QkTo&list=RDhoxg8UW5xhw&index=5",
    },
    {
      id: "4",
      url: "https://ui.shadcn.com/docs/components/separator",
    },
    {
      id: "5",
      url: "https://github.com/",
    },
    {
      id: "6",
      url: "https://nextjs.org/docs",
    },
    {
      id: "7",
      url: "https://www.netflix.com/pk/",
    },
    {
      id: "8",
      url: "https://www.netlify.com/",
    },
    {
      id: "9",
      url: "https://drive.google.com/drive/folders/1hy16p2Bvllqgm6NeCTx4AyHyEKyO4__z",
    },
    {
      id: "10",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "11",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "12",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "13",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "14",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "15",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "16",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "17",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "18",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "19",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
    {
      id: "20",
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
  ]);
  const clear = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const allClear = () => {
    setLinks([]);
  };

  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between px-1 mb-2'>
        <div className='text-sm'>05:00 PM</div>

        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              size='sm'
              className={`${fontSize} text-[10px] bg-[#070607] text-white dark:hover:bg-[#111] rounded`}
            >
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Delete All Visits From 2024/06/05, 17:00?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={allClear}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {isScroll
        ? links.map((link) => (
            <>
              <div
                className='history flex justify-between px-[8px] py-[10px]  cursor-pointer rounded transition duration-300 hover:bg-[#f1f1f1] dark:hover:bg-[#333]'
                key={link.id}
              >
                <div className='flex gap-2 items-start'>
                  <div>
                    <Image
                      src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=128`}
                      alt='img'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className='text-[13px]'>Better History</h4>
                    <p className='text-[10px] text-[#999]'>{link.url}</p>
                  </div>
                </div>
                <div className='text-[10px] text-[#999] date'>2024/06/05</div>

                <div className='btns hidden items-center gap-2'>
                  <Link
                    href={link.url}
                    className='text-[10px] h-6 flex items-center justify-center px-2 bg-[#070607] text-white dark:hover:bg-[#111] rounded'
                    target={`${isChecked ? "blank" : ""}`}
                  >
                    More From Site
                  </Link>
                  <div
                    className={`${showcase ? "" : "hidden"}`}
                    onClick={() => clear(link.id)}
                  >
                    <X size={18} />
                  </div>
                </div>
              </div>
              <div className='px-[8px]'>
                <Separator />
              </div>
            </>
          ))
        : links.slice(0, 6).map((link) => (
            <>
              <div
                className='history flex justify-between px-[8px] py-[10px] my-2 cursor-pointer rounded transition duration-300 hover:bg-[#f1f1f1] dark:hover:bg-[#333]'
                key={link.id}
              >
                <div className='flex gap-2 items-start'>
                  <div>
                    <Image
                      src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=128`}
                      alt='img'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className='text-[13px]'>Better History</h4>
                    <p className='text-[10px] text-[#999]'>{link.url}</p>
                  </div>
                </div>
                <div className='text-[10px] text-[#999] date'>2024/06/05</div>
                <div className='btns hidden items-center gap-2'>
                  <Link
                    href={link.url}
                    className='text-[10px] h-6 flex items-center justify-center px-2 bg-[#070607] text-white dark:hover:bg-[#111] rounded'
                    target={`${isChecked ? "blank" : ""}`}
                  >
                    More From Site
                  </Link>
                  <div
                    className={`${showcase ? "" : "hidden"}`}
                    onClick={() => clear(link.id)}
                  >
                    <X size={18} />
                  </div>
                </div>
              </div>
              <div className='px-[8px]'>
                <Separator />
              </div>
            </>
          ))}
    </div>
  );
};

export default History;
