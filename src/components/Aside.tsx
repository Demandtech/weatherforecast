//import { useState } from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaLocationArrow,
  FaWind,
  FaTemperatureHigh,
  FaCloudMoon,
} from "react-icons/fa";
import { useState } from "react";
import { IoLocationOutline, IoWaterOutline } from "react-icons/io5";
import { RiArrowUpDownFill } from "react-icons/ri";
import { TbUvIndex } from "react-icons/tb";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";

import { useGlobalContext } from "@/hooks/useGlobalhook";
import { shortDateFormat } from "@/utils";
import { formatTime } from "@/utils";
import { Loader } from "@/components";

const Aside = () => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const { days, getData, userLocation, current, isLoading } =
    useGlobalContext();
  const [query, setQuery] = useState("");

  const today = days?.[0];

  return (
    <aside className=" absolute lg:w-1/3 lg:static w-full font-neue">
      <div className="flex min-h-screen">
        <div
          className={`${
            isAsideOpen
              ? "w-full p-5"
              : "w-0 p-0 lg:p-5 overflow-hidden  lg:opacity-100 lg:w-full"
          } bg-home-bg bg-cover bg-center transition-all duration-300`}
        >
          <div className="flex flex-col min-h-full">
            <form
              className={`relative mb-4 `}
              onSubmit={(e) => {
                e.preventDefault();
                setQuery("");
                getData(query.trim());
              }}
            >
              <input
                className={`w-full pl-10 py-2 rounded-md placeholder:text-gray-300 focus:outline-none bg-[#f1f9ff] `}
                placeholder="Search..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 text-gray-300 grid place-content-center pl-4">
                <FaSearch className="" />
              </div>
              <div className="absolute inset-y-0 text-gray-300 grid place-content-center pl-4 right-4">
                <button className="bg-white rounded-full p-2">
                  <FaLocationArrow className="" />
                </button>
              </div>
            </form>
            {isLoading ? (
              <div className="flex-1 flex items-center justify-center">
                <Loader />
              </div>
            ) : (
              <div>
                <div className="bg-primary rounded-lg p-5 mb-5">
                  <div className="flex items-center gap-2 text-white">
                    <IoLocationOutline />
                    <b>{userLocation.name}</b>
                    <div className="ml-auto text-xs flex gap-3">
                      <span>Last updated</span>
                      <span>{formatTime(current.last_updated)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-white space-y-2">
                    <div className="w-1/2 mb-2">
                      {current.condition.icon && (
                        <img
                          alt="weather Icon"
                          className="object-cover mx-auto"
                          height="100px"
                          src={current.condition.icon}
                          width="100px"
                        />
                      )}
                    </div>
                    <span className=" text-md">Today, {shortDateFormat()}</span>
                    <h3 className="text-5xl  font-bold">
                      {current.temp_f}&deg;
                    </h3>
                    <p>{current.condition.text}</p>
                    <div className="text-sm">
                      <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                          <FaWind />
                          <span>Wind</span>
                        </div>
                        <span>|</span>
                        <span>{current.wind_kph}km/hr</span>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-1 ">
                          <IoWaterOutline />
                          <span>Hum</span>
                        </div>
                        <span>|</span>
                        <div>{current.humidity}%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg px-5">
                  <div>
                    <div className="flex items-center gap-2 border-b-2 py-2 border-primary text-sm">
                      <FaTemperatureHigh className="text-primary" />
                      <span>High/Low</span>
                      <div className="ml-auto">
                        <span>
                          {today?.day.maxtemp_f}&deg;/{today?.day.mintemp_f}
                          &deg;
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border-b-2 py-2 border-primary text-sm">
                      <TbUvIndex className="text-primary" />
                      <span>Uv Index</span>
                      <div className="ml-auto">
                        <span>{current.uv}/10</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2  border-b-2  py-2 border-primary text-sm">
                      <FaCloudMoon className="text-primary" />
                      <span>Cloud</span>
                      <div className="ml-auto">
                        <span>{current.cloud}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border-b-2   py-2 border-primary text-sm">
                      <RiArrowUpDownFill className="text-primary" />
                      <span>Pressure</span>
                      <div className="ml-auto">
                        <span>{current.pressure_mb}MB</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2  py-2 border-primary text-sm">
                      <WiMoonAltWaningCrescent5 className="text-primary" />
                      <span>Moon Phase</span>
                      <div className="ml-auto">
                        <span>{today?.astro.moon_phase}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="text-white lg:hidden  inline-block"
          role="button"
          tabIndex={0}
          onClick={() => isAsideOpen && setIsAsideOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              isAsideOpen && setIsAsideOpen(false);
            }
          }}
        >
          <button
            className="btn text-black hover:text-red-500 transition-colors duration-500 p-5"
            tabIndex={0}
            type="button"
            onClick={() => setIsAsideOpen(!isAsideOpen)}
          >
            {isAsideOpen ? <FaArrowLeft /> : <FaArrowRight />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
