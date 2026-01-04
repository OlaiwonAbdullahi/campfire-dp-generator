"use client";
import Image from "next/image";
import { useState } from "react";
import Generator from "./_components/generator";

const Page = () => {
  return (
    <div className="font-dreamplanner min-h-screen relative">
      <div className="absolute z-20 top-10 left-10">
        <Image src="./logo.svg" width={200} height={200} alt="logo" />
      </div>

      <div className="absolute z-20 top-1/4 right-0 translate-y-[-50%]">
        <Image src="./cog.svg" width={200} height={200} alt="cog" />
      </div>

      <section className="bg-foreground py-32 text-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-1 gap-24 items-center">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="text-center mb-4 bg-white/5 border border-white/10 p-2 rounded-full w-fit px-4 backdrop-blur-3xl">
                  Generate your official Campfire DP for
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl tracking-tight leading-none uppercase text-center">
                Campfire
              </h2>
              <span className="text-3xl md:text-5xl text-center">
                LAGOS, OGBOMOSO,
                <br />
                ILORIN, ABEOKUTA & PORT HARCOURT
              </span>
            </div>

            <Generator />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
