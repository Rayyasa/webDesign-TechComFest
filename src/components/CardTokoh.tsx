import React from "react";
import Image from "next/image";
interface CardProps {
  img: string;
  text: string;
  nama: string;
}

export default function CardTokoh({ img, text, nama }: CardProps) {
  return (
    <div className=" rounded-xl overflow-hidden  bg-slate-200 items-center shadow-md flex xl:flex-row flex-col">
      <div className="xl:w-[180px] h-full">
        <Image
          src={img}
          alt="foto"
          className="object-cover h-full"
          width={500}
          height={0}
        />
      </div>
      <div className="flex-1 sm  xl:py-2 xl:px-2 p-3">
        <p className="text-xs sm:text-sm text-center mb-2">{text}</p>
        <p className="text-xs sm:text-sm text-center font-bold">{nama}</p>
      </div>
    </div>
  );
}
