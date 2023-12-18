const Calendar = () => {
  return (
    <div className="flex h-full  w-full flex-col gap-4 xl:flex-row">
      <div className=" flex flex-col border-b-2 border-[#D9D9D9] pr-0 xl:border-b-0 xl:border-r-2 xl:pt-5">
        <h1 className="self-start text-5xl font-bold xl:rotate-[-90deg] xl:self-end ">
          Jan.
        </h1>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-light">Hari Kemerdekaan</h1>
        <p className="text-sm font-extralight text-[#747474]">17 Agustus</p>
        <h1 className="text-lg font-light">Hari Kemerdekaan</h1>
        <p className="text-sm font-extralight text-[#747474]">17 Agustus</p>
        <h1 className="text-lg font-light">Hari Kemerdekaan</h1>
        <p className="text-sm font-extralight text-[#747474]">17 Agustus</p>
      </div>
    </div>
  );
};

export default Calendar;
