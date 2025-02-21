// components/Sticker.tsx
import { FC } from "react";
import { IconType } from "react-icons";

interface StickerProps {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}

const Sticker: FC<StickerProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-center bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-3 gap-2 ${className}`}
    >
      <Icon className="text-primary w-10 h-10" />
      <div className="">
        <h6 className="text-sm font-semibold">{title}</h6>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Sticker;
