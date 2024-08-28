import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div>
        <Image src="./banner.svg" alt="Banner-image" width={600} height={600} />
      </div>
      <div className="text-center">
        <h1 className="border-spacing-28 bg-black text-zinc-50 p-5 rounded-2xl font-extrabold lg:text-6xl md:text-5xl bg-gradient-to-r from-slate-400 text-transparent bg-clip-text text-4xl">
          Let's Clash
        </h1>
        <Link href={"/login"}>
          <Button>Start here</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
