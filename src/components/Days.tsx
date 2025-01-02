import { getWeekDay } from "@/utils";
import { useGlobalContext } from "@/hooks/useGlobalhook";
import { DisplayIndexProps } from "@/types/context";

const DaysElement = ({ displayIndex, setDisplayIndex }: DisplayIndexProps) => {
  const { days } = useGlobalContext();

  return (
    <div className={`flex items-center flex-wrap gap-2 mb-5`}>
      {days?.map((day, index) => {
        return (
          <div
            key={index}
            className={`flex-1 flex flex-col items-center gap-1  rounded-3xl p-2 font-medium ${
              index === displayIndex ? "bg-primary text-white" : "bg-white"
            }`}
            role="button"
            tabIndex={0}
            onClick={() => setDisplayIndex?.(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setDisplayIndex?.(index);
              }
            }}
          >
            <img alt="" src={day.day.condition.icon} />
            <p>{getWeekDay(day.date)}</p>
            <p>{day.day.avgtemp_f}&deg;</p>
          </div>
        );
      })}
    </div>
  );
};

export default DaysElement;
