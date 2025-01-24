'use client'

import { useState } from "react";
import Header from "@/components/UI/header";
import Form from "@/components/input/form";
import Output from "@/components/UI/output";
import QRCode from 'qrcode';

export default function Home() {
  // State for input value and QR code URL
  const [srcValue, setSrcValue] = useState<string>('');  // Store the input QR value
  const [qrCodeUrl, setQrCodeUrl] = useState<string>(''); // Store the generated QR code URL

  // Function to generate the QR code
  const generateQRCode = async (value: string) => {
    try {
      const QRurl = await QRCode.toDataURL(value);
      setQrCodeUrl(QRurl);  // Set the QR code URL when generated
    } catch (err) {
      console.error(err);
      alert("Something went wrong while generating, please try again later!");
    }
  };

  return (
    <main className="w-full h-[100vh] bg-slate-50">
      <Header />
      <div className="w-[100vw] flex justify-center flex-row max-[850px]:flex-col-reverse max-[850px]:items-center">
        <div className="w-[600px] h-[175px] max-[650px]:w-[450px] max-[650px]:h-full p-3 rounded-md bg-white drop-shadow-md flex justify-left flex-col m-5">
          <h1 className="font-bold text-[30px]">Generate QR code</h1>
          <p>Enter the link you want the QR code to direct to in the box below.</p>
          <Form
            srcValue={srcValue}
            setSrcValue={setSrcValue}
            generateQRCode={generateQRCode}
          />
        </div>
        <Output qrCodeUrl={qrCodeUrl} />
      </div>
    </main>
  );
}

