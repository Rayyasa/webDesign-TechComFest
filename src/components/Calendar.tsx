interface PropsCalender {
  bulan: string,
  peristiwa: string[]
}

const Calendar = ({ bulan, peristiwa }: PropsCalender) => {
  return (
    <div className="flex w-full flex-col gap-4 xl:flex-row">
      <div className=" w-20 flex flex-col border-b-2 border-[#D9D9D9] pr-0 xl:border-b-0 xl:border-r-2 xl:pt-5">
        <h1 className="self-start text-5xl font-bold xl:rotate-[-90deg] xl:self-end ">
          {bulan}
        </h1>
      </div>
      <div className="flex flex-col gap-1">
        {peristiwa.map((_, i) => (
          <h1 key={i} className="text-md font-light text-gray-600">{_}</h1>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
