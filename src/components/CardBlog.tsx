import {
  ChatBubbleLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import Image from "next/image";
interface CardProps {
  img: string;
  tanggal: string;
  waktu: string;
  title: string;
  text: string;
}
export default function CardBlog({
  img,
  tanggal,
  waktu,
  title,
  text,
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-md overflow-hidden flex flex-col bg-slate-200 drop-shadow-md">
      <Image
        src={img}
        alt="Blog 1"
        className=" object-cover aspect-video rounded-b-lg mb-2"
        width={500}
        height={0}
        style={{ width: "100%" }}
      />
      <div className="p-4 flex flex-col gap-1">
        <div className="flex flex-row  items-center justify-between">
          <div className="flex flex-row gap-2 xl:text-xs text-[11px]">
            <p className="">{tanggal}</p>
            <p className=""> • </p>
            
            <p className=""> {waktu}</p>
          </div>
          <div className="">
            <EllipsisVerticalIcon className="xl:h-6 xl:w-6 h-5 w-5" />
          </div>
        </div>
        <div className="pb-1">
          <h2 className="text-gray-950 font-semibold xl:text-lg text-base">{title}</h2>
          <p className="xl:line-clamp-3 text-xs line-clamp-2">{text}</p>
        </div>
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
