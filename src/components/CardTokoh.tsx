import React from "react";
import Image from "next/image";
interface CardProps {
  img: string;
  text: string;
  nama: string;
}

export default function CardTokoh({ img, text, nama }: CardProps) {
  return (
    // <div className="rounded-xl overflow-hidden bg-slate-200 items-center shadow-md flex xl:flex-row flex-col">
    //   <div className="xl:w-[180px] w-full h-[180px]">
    //     <Image
    //       src={img}
    //       alt="foto"
    //       className="object-cover h-full"
    //       width={500}
    //       height={0}
    //     />
    //   </div>
    //   <div className="flex-1 sm  xl:py-2 xl:px-2 p-3">
    //     <p className="text-xs sm:text-sm text-center mb-2">{text}</p>
    //     <p className="text-xs sm:text-sm text-center font-bold">{nama}</p>
    //   </div>
    // </div>
    <figure className="overflow-hidden rounded-xl bg-red-500 p-2 xl:flex xl:h-[150px] xl:p-0">
      <Image
        className="mx-auto h-24 w-24 rounded-full object-cover xl:h-auto xl:w-[100px] xl:rounded-none"
        src={img}
        alt=""
        width="384"
        height="512"
      />

      <div className="space-y-4 pt-6 text-center xl:p-3 xl:text-left">
        <blockquote>
          <p className="text-xs font-medium xl:text-center xl:text-sm">
            {text}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sm text-gray-800 xl:text-center">{nama}</div>
        </figcaption>
      </div>
    </figure>
  );
}
