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
import { DownloadCloud, Upload, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";

const LOCATION_DATA: Record<string, { label: string; address: string }> = {
  lagos: {
    label: "LAGOS",
    address: "Lagos, Nigeria",
  },
  ogbomosho: {
    label: "OGBOMOSO",
    address: "Oluseun onigbide resource Center,ogbomoso,Oyo state",
  },
  ilorin: {
    label: "ILORIN",
    address: "Ilorin, Kwara state",
  },
  abeokuta: {
    label: "ABEOKUTA",
    address: "Abeokuta, Ogun state",
  },
  ph: {
    label: "PORT HARCOURT",
    address: "Port Harcourt, Rivers state",
  },
};

const Generator = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("ogbomosho");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [canvasUrl, setCanvasUrl] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const generateDP = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsGenerating(true);

    try {
      // Set canvas size to match SVG template
      canvas.width = 1400;
      canvas.height = 1400;

      // 1. Load Template
      const template = new Image();
      template.src = "/dp.svg";
      await new Promise((resolve) => (template.onload = resolve));
      ctx.drawImage(template, 0, 0);

      // 2. Load and Draw User Image in Circle
      if (imagePreview) {
        const userImg = new Image();
        userImg.src = imagePreview;
        await new Promise((resolve) => (userImg.onload = resolve));

        ctx.save();
        // Circle coordinates from SVG: center(697, 541), radius 241
        ctx.beginPath();
        ctx.arc(697, 541, 241, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Calculate aspect ratio for "cover" effect
        const aspect = userImg.width / userImg.height;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (aspect > 1) {
          drawHeight = 482;
          drawWidth = 482 * aspect;
          offsetX = 697 - drawWidth / 2;
          offsetY = 300;
        } else {
          drawWidth = 482;
          drawHeight = 482 / aspect;
          offsetX = 456;
          offsetY = 541 - drawHeight / 2;
        }

        ctx.drawImage(userImg, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();
      }

      // 3. Draw Text overlays
      ctx.fillStyle = "#FCF5ED";
      ctx.textAlign = "center";

      // Load font if needed
      try {
        await document.fonts.load("italic 900 72px dreamplanner");
      } catch {
        console.warn("Font loading failed, falling back to system fonts");
      }

      // Name on Banner
      // Banner center roughly (705, 869)
      let nameFontSize = 72;
      if (name.length > 12) nameFontSize = 60;
      if (name.length > 18) nameFontSize = 48;
      ctx.font = ` 900 ${nameFontSize}px dreamplanner, sans-serif`;
      ctx.fillText(name.toUpperCase(), 705, 885);

      // Location Info (Footer)
      const data = LOCATION_DATA[location] || LOCATION_DATA.ogbomosho;

      // Date and Address in Orange Bar
      ctx.textAlign = "left";

      ctx.font = "400 45px dreamplanner, sans-serif";
      // Align with location icon at y=1126
      ctx.fillText(data.address, 164, 1168);

      // Top Location text (CAMPFIRE [LOCATION])
      ctx.textAlign = "center";
      ctx.font = "900 64px dreamplanner, sans-serif";
      // Draw just below CAMPFIRE path (which ends at y=206)
      ctx.fillText(data.label, 780, 262);

      setCanvasUrl(canvas.toDataURL("image/png"));
    } catch (error) {
      console.error("DP Generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    // Small delay to ensure fonts are loaded
    const timer = setTimeout(() => {
      generateDP();
    }, 100);
    return () => clearTimeout(timer);
  }, [name, location, imagePreview]);

  const downloadDP = () => {
    if (!canvasUrl) return;
    const link = document.createElement("a");
    link.download = `campfire-dp-${name || "user"}.png`;
    link.href = canvasUrl;
    link.click();
  };

  return (
    <div>
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
                    className="w-full rounded-xl bg-white/5 border border-white/10 h-9 px-4 text-white placeholder:text-white/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-black italic uppercase tracking-widest text-white">
                    Select Campfire Location
                  </Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full rounded-xl bg-white/5 border border-white/10 h-12 px-4 flex items-center justify-between text-white">
                      <SelectValue placeholder="Select Campfire Location" />
                    </SelectTrigger>

                    <SelectContent className=" bg-foreground/50 backdrop-blur-3xl text-white font-dreamplanner border border-white/10 rounded-xl shadow-lg">
                      <SelectGroup>
                        <SelectLabel className=" text-white">
                          Locations
                        </SelectLabel>
                        {Object.entries(LOCATION_DATA).map(([key, data]) => (
                          <SelectItem
                            key={key}
                            value={key}
                            className="uppercase"
                          >
                            {data.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label className="text-xs italic uppercase tracking-widest text-white">
                    Upload Photo
                  </Label>
                  <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-white/10 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="h-8 w-8 text-white/40 mb-2" />
                      <p className="text-xs text-white/80">
                        {imagePreview
                          ? "Change photo"
                          : "Click to upload your photo"}
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

                {/* Download Button */}
                <button
                  onClick={downloadDP}
                  disabled={!imagePreview || !name}
                  className="h-12 w-full gap-3 rounded-xl bg-[#AD684F] flex items-center px-4 justify-center text-background font-black italic uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <DownloadCloud className="h-5 w-5" />
                  )}
                  Download DP
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl transition-transform duration-700 hover:rotate-2">
          <div className="relative aspect-square w-full">
            {canvasUrl ? (
              <img
                src={canvasUrl}
                alt="DP Preview"
                className="rounded-2xl border border-white/5 bg-foreground w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-foreground flex items-center justify-center rounded-2xl">
                <Loader2 className="h-10 w-10 animate-spin text-white/20" />
              </div>
            )}
            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
