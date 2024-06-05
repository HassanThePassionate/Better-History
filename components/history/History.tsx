import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const History = () => {
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
      <Card>
        <CardContent>
          {links.map((link, i) => (
            <>
              <div
                className='flex justify-between p-3 my-2 rounded-lg py-4  transition duration-300 hover:bg-[#f8f8f8] dark:hover:bg-[#333]  '
                key={i}
              >
                <div className='flex gap-3  '>
                  <div>
                    <Image
                      src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=128`}
                      alt='img'
                      width={22}
                      height={22}
                    />
                  </div>
                  <div>
                    <h4 className='text-sm'>Better History</h4>
                    <p className='text-[12px] text-[#777]'>{link.url}</p>
                  </div>
                </div>
                <div className='text-sm'>2024/06/05</div>
              </div>
              <Separator />
            </>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
