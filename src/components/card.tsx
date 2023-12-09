import React from "react";

interface CardProps {
  title: string;
  img: string;
}

export default function card({ title, img }: CardProps) {
  return (
    <div
      className={`flex border justify-center items-center rounded-lg relative`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0 rounded-lg"></div>
      <h1 className="py-3 text-white font-bold z-10 font-cardo">{title}</h1>
    </div>
  );
}
