import { BsSun, BsSunrise, BsMoonStars } from "react-icons/bs";

const Greeting = () => {
  const dayTime = new Date().getHours();

  if (dayTime < 12) {
    return (
      <div className="flex items-center gap-2 text-primary">
        <BsSun className="text-4xl" />
        <span className="text-2xl">Good Morning</span>
      </div>
    );
  } else if (dayTime > 12 && dayTime < 18) {
    return (
      <div className="flex items-center gap-2 text-primary">
        <BsSunrise className="text-4xl" />
        <span className="text-2xl">Good Afternoon</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2 text-primary">
        <BsMoonStars className="text-4xl" />
        <span className="text-2xl">Good evening</span>
      </div>
    );
  }
};

export default Greeting;
