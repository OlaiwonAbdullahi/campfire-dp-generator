"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, DownloadCloud, Upload, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 justify-center items-center">
              {/* Form Card */}
              <div className="relative group perspective-1000 w-full">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl transition-transform duration-700 hover:rotate-2">
                  <div className="rounded-2xl border border-white/5 bg-foreground p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[10px] font-bold text-white/80 tracking-[0.2em] uppercase">
                        Service Status: Online
                      </span>
                    </div>

                    <div className="space-y-6 py-4">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label className="text-xs font-black italic uppercase tracking-widest text-white">
                          Name
                        </Label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full rounded-xl bg-white/5 border border-white/10 h-12 px-4 text-white placeholder:text-white/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs font-black italic uppercase tracking-widest text-white">
                          Select Campfire Location
                        </Label>
                        <Select onValueChange={setLocation}>
                          <SelectTrigger className="w-full  rounded-xl bg-white/5 border border-white/10 h-12 px-4 flex items-center justify-between">
                            <SelectValue
                              placeholder="Select Campfire Location"
                              className=" text-white placeholder:text-white"
                            />
                          </SelectTrigger>
                          <SelectContent className=" bg-foreground/50 backdrop-blur-3xl text-white font-dreamplanner border border-white/10 rounded-xl shadow-lg">
                            <SelectGroup>
                              <SelectLabel className=" text-white">
                                Locations
                              </SelectLabel>
                              <SelectItem value="lagos">LAGOS</SelectItem>
                              <SelectItem value="ogbomosho">
                                OGBOMOSHO
                              </SelectItem>
                              <SelectItem value="ilorin">ILORIN</SelectItem>
                              <SelectItem value="abeokuta">ABEOKUTA</SelectItem>
                              <SelectItem value="ph">PORT HARCOURT</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Image Upload */}
                      <div className="space-y-2">
                        <Label className="text-xs italic uppercase tracking-widest text-white">
                          Upload Photo
                        </Label>
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/10 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="h-8 w-8 text-white/40 mb-2" />
                            <p className="text-xs text-white/80">
                              Click to upload your photo
                            </p>
                            <p className="text-xs text-white/60">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>

                      {/* Download Button (active when ready) */}
                      <button className="h-12 w-full gap-3 rounded-xl bg-[#AD684F] flex items-center px-4 justify-center text-background font-black italic uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 transition">
                        <DownloadCloud className="h-5 w-5" />
                        Download DP
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl transition-transform duration-700 hover:rotate-2">
                <div className="">
                  <Image
                    src={"./dp.svg"}
                    width={500}
                    height={500}
                    alt="DP Preview"
                    className="rounded-2xl border border-white/5 bg-foreground w-full h-auto object-cover"
                  />
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
