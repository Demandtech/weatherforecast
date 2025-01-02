import { IoLocationOutline } from "react-icons/io5";

import { AirQuality, Sunrise, Moonrise, Hour } from "@/components";
import { DisplayIndexProps } from "@/types/context";
import { useGlobalContext } from "@/hooks/useGlobalhook";

const MainContent = ({ displayIndex }: DisplayIndexProps) => {
  const { userLocation } = useGlobalContext();

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="md:w-full lg:w-1/2 ">
        <Hour displayIndex={displayIndex} />
        <AirQuality displayIndex={displayIndex} />
      </div>
      <div className="md: w-full lg:w-1/2 bg-white rounded-lg p-5">
        <header className="flex gap-1 items-center mb-4">
          <IoLocationOutline className="text-primary" />
          <h3>{userLocation?.name}</h3>
        </header>
        <Sunrise displayIndex={displayIndex} />
        <Moonrise displayIndex={displayIndex} />
      </div>
    </div>
  );
};

export default MainContent;
