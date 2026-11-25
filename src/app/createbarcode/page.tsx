
"use client";

import Link from "next/link";
import { useState } from "react";
import CBScript from "@/components/scripts/cbScript";

export default function CreateBarcode() {
    const [barcodeInput, setBarcodeInput] = useState("");
    const [generatedValue, setGeneratedValue] = useState("");

    const handleGenerate = () => {
        if (!barcodeInput.trim()) return;
        setGeneratedValue(barcodeInput.trim());
    };

    return (
        <main className="min-h-screen w-full p-8 flex flex-col items-center justify-center gap-10 text-[#2e2e2e]">

            <div className="flex flex-col items-center text-center w-full max-w-xl gap-6">

                <div className="group flex flex-col items-start justify-between text-left bg-[#e9e4d8] w-full min-h-[220px] p-6 rounded-2xl border border-[#d2cbbb] shadow-[0_2px_5px_rgba(46,46,46,0.08)]">

                    <div className="group flex items-center justify-between w-fit text-sm font-medium text-[#636D82]">
                        <span className="transition-transform duration-300 group-hover:translate-x-1 pr-3">
                            ←
                        </span>

                        <span>
                            <Link href="../" className="group-hover:underline py-4">
                                Return
                            </Link>
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold">
                        Create new barcode
                    </h2>

                    <div className="w-full flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Enter text or numbers..."
                            value={barcodeInput}
                            onChange={(e) => setBarcodeInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleGenerate();
                            }}
                            className="w-full text-[#2e2e2e] p-3 border-b border-[#d2cbbb] bg-[#e9e4d8] focus:border-[#504226] focus:outline-none focus:ring-0 transition-all duration-200"
                        />

                        <button
                            onClick={handleGenerate}
                            disabled={!barcodeInput.trim()}
                            className="w-fit bg-[#504226] text-white py-2 px-4 rounded-md font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Generate barcode
                        </button>

                        {generatedValue && (
                            <CBScript
                                value={generatedValue}
                                onError={() => setGeneratedValue("")}
                            />
                        )}

                    </div>

                </div>

            </div>

        </main>
    );
}
