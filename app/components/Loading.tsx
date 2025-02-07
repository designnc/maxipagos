"use client";

import styles from "./Loading.module.css";
import { Logo } from "./Logo";
//import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div
        className={`flex flex-col items-center justify-center ${styles.pulse}`}
      >
        <div className="flex items-center justify-center">
          {/* <Image
            src="iso.svg"
            width={48}
            height={48}
            alt="Isotype Logo"
            className="h-24 text-gray-800"
          /> */}
          <Logo variant="logotype" className="h-24 text-gray-800" />
        </div>

        <span className="font-medium -mb-1 text-xl text-gray-800 text-center uppercase">
          Soluciones Informáticas
        </span>
      </div>
    </div>
  );
};

export default Loading;
