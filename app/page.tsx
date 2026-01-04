import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
const Page = () => {
  return (
    <div className=" font-dreamplanner  min-h-screen relative">
      <div className=" absolute z-20 top-10 left-10 ">
        <Image src={"./logo.svg"} width={200} height={200} alt="logo" />
      </div>
      <section className="bg-foreground py-32 text-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-1 gap-24 items-center">
            <div className="flex flex-col justify-center ">
              <div className=" flex justify-center">
                <div className=" text-center mb-4 bg-white/5 border border-white/10 p-2 rounded-full w-fit px-4 backdrop-blur-3xl ">
                  Generate your official Campfire DP for
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl  tracking-tight leading-none uppercase text-center">
                Campfire
              </h2>
              <span className="text-3xl md:text-5xl text-center ">
                LAGOS,OGBOMOSO,
                <br />
                ILORIN,ABEOKUTA & PORT HARCOURT
              </span>
            </div>

            <div className="relative group perspective-1000">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl transition-transform duration-700 hover:rotate-2">
                <div className="rounded-2xl border border-white/5 bg-foreground p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
                      Service Status: Online
                    </span>
                  </div>
                  <div className="space-y-8 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white/60">
                        Search Available Slots...
                      </span>
                      <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 w-full rounded-xl bg-white/5 border border-white/10 flex items-center px-4 justify-between group-hover:border-primary/50 transition-colors">
                        <span className="text-xs font-black italic uppercase tracking-widest text-white/40">
                          Select Neighborhood
                        </span>
                        <ChevronRight className="h-4 w-4 text-white/20" />
                      </div>
                      <div className="h-12 w-full rounded-xl bg-primary flex items-center px-4 justify-center text-background font-black italic uppercase tracking-widest shadow-lg shadow-primary/20">
                        Check Availability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
