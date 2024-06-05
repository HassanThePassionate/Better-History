import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "../ui/button";
interface HistoryProps {
  showcase: Boolean;
}
const History = ({ showcase }: HistoryProps) => {
  const links = [
    {
      url: "https://dev.to/derlin/get-favicons-from-any-website-using-a-hidden-google-api-3p1e",
    },
    {
      url: "https://web.whatsapp.com/",
    },
    {
      url: "https://www.youtube.com/watch?v=LuJpD6-QkTo&list=RDhoxg8UW5xhw&index=5",
    },
    {
      url: "https://ui.shadcn.com/docs/components/separator",
    },
    {
      url: "https://github.com/",
    },
    {
      url: "https://nextjs.org/docs",
    },
    {
      url: "https://www.netflix.com/pk/",
    },
    {
      url: "https://www.netlify.com/",
    },
    {
      url: "https://drive.google.com/drive/folders/1hy16p2Bvllqgm6NeCTx4AyHyEKyO4__z",
    },
    {
      url: "https://play.google.com/store/games?hl=en&gl=US",
    },
  ];

  return (
    <div className='mt-8'>
      {links.map((link, i) => (
        <>
          <div
            className=' history flex justify-between px-[8px] py-[10px] my-2 cursor-pointer rounded  transition duration-300 hover:bg-[#f1f1f1] dark:hover:bg-[#333] '
            key={i}
          >
            <div className='flex gap-2 items-start  '>
              <div>
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=128`}
                  alt='img'
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h4 className='text-[12px]'>Better History</h4>
                <p className='text-[10px] text-[#999]'>{link.url}</p>
              </div>
            </div>
            <div className='text-[10px] text-[#999] date'>2024/06/05</div>
            <div className='btns hidden items-center gap-2 '>
              <Button
                size='sm'
                className='text-[10px] bg-[#070607] text-white dark:hover:bg-[#111] rounded'
              >
                More From Site
              </Button>
              <X size={18} className={`${showcase ? "" : "hidden"}`} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default History;
