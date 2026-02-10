"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.floor((scrollTop / documentHeight) * 100);
      setProgress(percent);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="sticky left-0 top-20 md:top-30 w-full h-1 bg-white/20 ">
      <div
        className="bg-point/50 h-full transition-[width] duration-75"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
}
