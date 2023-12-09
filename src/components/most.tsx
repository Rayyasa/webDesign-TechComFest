import React from "react";

interface mostProps {
  title: string;
  image: string;
  additional?: string;
}

export default function Most({
  title,
  image,
  additional,
  ...props
}: mostProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`w-full min-h-[288px] group/card rounded-2xl overflow-hidden relative ${additional} shadow-lg outline-4 outline-black `}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-transparent group-hover/card:bg-black/50 transition-all duration-300"></div>
      {/* <div className="w-full py-2 px-4 bg-white absolute bottom-0 font-cardo text-2xl flex items-center justify-center font-bold group-hover/card:w-fit group-hover/card:rounded-full group-hover/card:top-2/4 group-hover/card:left-2/4 group-hover/card:-translate-x-2/4 group-hover/card:-translate-y-2/4 transition-all duration-300">{title}</div> */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full group-hover/card:w-[150px] py-2 px-4 font-cardo bg-white group-hover/card:mb-28 flex group-hover/card:rounded-[1000px] rounded-none justify-center transition-all duration-500 ease">
          {title}
        </div>
      </div>
    </div>
  );
}
