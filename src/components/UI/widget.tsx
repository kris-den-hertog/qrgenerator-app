"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface WidgetProps {
  function: string;
  widgetColor: string;
  widgetTitle: string;
  widgetDesc: string;
  widgetImg: string;
}

export default function Widget({
  function: widgetFunction,
  widgetColor,
  widgetTitle,
  widgetDesc,
  widgetImg,
}: WidgetProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/${widgetFunction}`)}
      style={{ backgroundColor: widgetColor }}
      className="group flex flex-col items-start justify-between text-left w-full min-h-[220px] p-6 rounded-2xl border border-[#d2cbbb] shadow-[0_2px_5px_rgba(46,46,46,0.08)]"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#cfc9b9]/50 transition-transform duration-300 group-hover:scale-110">
        <Image src={widgetImg} alt="" width={40} height={40} />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          {widgetTitle}
        </h2>

        <p className="text-sm text-[#66645e] mt-2">
          {widgetDesc}
        </p>
      </div>

      <div
        className="flex items-center justify-between w-full mt-6 text-sm font-medium text-[#636D82]"
      >
        <span className="group-hover:underline">Open tool</span>

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </button>
  );
}