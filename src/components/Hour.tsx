import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { formatTime } from "@/utils";
import { useGlobalContext } from "@/hooks/useGlobalhook";
import { Hr, DisplayIndexProps } from "@/types/context";

const ITEMS_PER_PAGE = 3;

const Hour = ({ displayIndex }: DisplayIndexProps) => {
  const { days } = useGlobalContext();
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  useEffect(() => {
    setTotalPage(days?.[displayIndex]?.hour.length);
  }, [days]);

  return (
    <div className=" bg-white rounded-lg p-5 mb-5">
      <header className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-sm">Hours</h3>
        <div className="flex gap-5">
          <button
            className="btn cursor-pointer bg-[#fff8f0] text-[#ffbf77] px-2 py-1 rounded-md grid place-items-center"
            onClick={() => {
              if (startIndex > 0) {
                setCurrentPage(currentPage - 1);
              } else {
                setCurrentPage(0);
              }
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="btn cursor-pointer bg-[#fff8f0]  text-[#ffbf77] px-2 rounded-md grid place-items-center"
            onClick={() => {
              if (typeof totalPage === "number") {
                if (endIndex < totalPage) {
                  setCurrentPage(currentPage + 1);
                } else {
                  setCurrentPage(0);
                }
              }
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </header>
      <div className="flex justify-between gap-1 flex-wrap">
        {days[displayIndex]?.hour
          .map((hr: Hr, index: number) => {
            return (
              <div
                key={index}
                className="py-2 text-center bg-primary text-white flex-1 break-words transition-transform duration-200"
              >
                <p className="text-xs font-semibold">{formatTime(hr.time)}</p>
                <span className="text-xs">{hr.temp_f}&deg;</span>
              </div>
            );
          })
          .slice(startIndex, endIndex)}
      </div>
    </div>
  );
};

export default Hour;
