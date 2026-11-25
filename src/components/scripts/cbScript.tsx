
"use client";

import JsBarcode from "jsbarcode";
import { useEffect, useRef } from "react";

interface BarcodeProps {
    value: string;
    onError?: () => void;
}

export default function CBScript({ value, onError }: BarcodeProps) {
    const barcodeRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!value || !barcodeRef.current) return;

        try {
            JsBarcode(barcodeRef.current, value, {
                format: "CODE128",
                lineColor: "#2e2e2e",
                background: "#cfc9b9",
                width: 2,
                height: 100,
                displayValue: true,
                font: "Arial",
                fontSize: 18,
                margin: 10,
            });
        } catch {
            onError?.();
        }
    }, [value, onError]);

    const handleDownload = () => {
        if (!barcodeRef.current) return;

        const svgData = new XMLSerializer().serializeToString(
            barcodeRef.current
        );

        const blob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = `barcode-${value}.svg`;
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col gap-4 w-full bg-[#d8d2c5] p-4 rounded-xl mt-4">
            <h2 className="text-2xl font-bold text-[#668263]">
                Your barcode
            </h2>

            <div className="w-full overflow-x-auto flex justify-center">
                <svg
                    ref={barcodeRef}
                    className="max-w-full rounded-xl"
                />
            </div>

            <button
                onClick={handleDownload}
                className="w-fit bg-[#504226] text-white py-2 px-4 rounded-md font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
                Download barcode
            </button>
        </div>
    );
}
