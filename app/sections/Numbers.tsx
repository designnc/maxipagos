"use client";
import { FaMobile, FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "../hooks/useInView";
import { FaBowlFood } from "react-icons/fa6";

interface cardDataType {
  icon: React.ReactNode;
  heading: string;
  value: string;
  subheading?: string;
  prefix?: string;
  suffix?: string;
  bgColor: string;
  iconColor: string;
}

const cardData: cardDataType[] = [
  {
    icon: <FaRocket size={64} />,
    value: "500",
    heading: "Restaurantes usan FooDiv",
    suffix: "",
    prefix: "+",
    bgColor: "bg-primary-200",
    iconColor: "text-primary",
  },
  {
    icon: <FaBowlFood size={64} />,
    value: "30",
    heading: "Más rápido el servicio",
    suffix: "%",
    bgColor: "bg-primary-200",
    iconColor: "text-primary",
  },
  {
    icon: <FaMobile size={64} />,
    value: "100",
    heading: "Pedidos gestionados",
    suffix: "K",
    prefix: "+",
    bgColor: "bg-primary-200",
    iconColor: "text-primary",
  },
];

const NumberItem = ({ item }: { item: cardDataType }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      className="animate_top flex flex-col lg:flex-row lg:items-center items-center gap-6"
      ref={ref}
    >
      <div className={`flex justify-center items-center rounded-[40px] p-8 ${item.bgColor} shrink-0`}>
        <div className={item.iconColor}>
          {item.icon}
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left">
          {isInView && (
            <>
              {item.prefix && <span>{item.prefix}</span>}
              <CountUp end={parseFloat(item.value)} duration={2.5} />
              {item.suffix && <span>{item.suffix}</span>}
            </>
          )}
        </h2>
        <h3 className="text-lg text-center lg:text-left lg:mt-2">
          {item.heading}
        </h3>
        <p className="text-lg font-normal text-center lg:text-left text-opacity-50 mt-2">
          {item.subheading}
        </p>
      </div>
    </div>
  );
};

const Numbers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="flex flex-wrap justify-between gap-y-20 gap-x-5">
        {cardData.map((item, i) => (
          <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-15px)]" key={i}>
            <NumberItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
