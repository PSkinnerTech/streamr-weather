import React from "react";
import Image from "next/image";

const Carousel: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-10 mt-8">
      <a
        href="https://patrickskinner.tech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-24 h-24 relative">
          <Image
            src="/logos/PSkinnerTech.png"
            alt="PSkinnerTech"
            width={300}
            height={75}
          />
        </div>
      </a>
      <a
        href="https://streamr.network"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-24 h-24 relative">
          <Image
            src="/logos/Streamr.png"
            alt="Streamr"
            width={300}
            height={75}
          />
        </div>
      </a>
      <a
        href="https://developerdao.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-24 h-24 relative">
          <Image
            src="/logos/DeveloperDAO.png"
            alt="Developer DAO"
            width={293}
            height={75}
          />
        </div>
      </a>
      <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
        <div className="w-24 h-24 relative">
          <Image
            src="/logos/NextJS.png"
            alt="Next.JS"
            width={130}
            height={75}
          />
        </div>
      </a>
      <a
        href="https://www.mapbox.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-24 h-24 relative">
          <Image src="/logos/Mapbox.png" alt="Mapbox" width={300} height={75} />
        </div>
      </a>
      <a href="https://dimo.zone/" target="_blank" rel="noopener noreferrer">
        <div className="w-24 h-24 relative">
          <Image src="/logos/DIMO.png" alt="DIMO" width={319} height={75} />
        </div>
      </a>
    </div>
  );
};

export default Carousel;
