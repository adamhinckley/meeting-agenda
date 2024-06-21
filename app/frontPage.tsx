"use client";
import Image from "next/image";
import { settings } from "./settings";

const FrontPage = () => {
  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "50vh" }}>
        <Image
          src={settings.imageUrl}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};
export default FrontPage;
