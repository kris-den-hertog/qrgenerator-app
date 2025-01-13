'use client'

import React, { useState } from 'react';
import QRCode from 'qrcode';

export default function Form() {
  const [srcValue, setSrcValue] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = async () => {
    try {
      const QRurl = await QRCode.toDataURL(srcValue);
      setQrCodeUrl(QRurl);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while generating, please try again later!")
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4">
      {qrCodeUrl && (
        <div className="mb-24 flex flex-col items-center">
          <div className="p-4 bg-white rounded-lg border-gray-200 border-2 mb-4">
            <img 
              src={qrCodeUrl} 
              alt="Generated QR Code"
              className="w-64 h-64 object-contain"
            />
          </div>
          <button
            onClick={handleDownload}
            className="underline"
          >
            Download
          </button>
        </div>
      )}
      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="QR Value"
          value={srcValue}
          onChange={(e) => setSrcValue(e.target.value)}
          className="h-12 bg-white border-b-2 border-gray-200 text-lg px-4"
        />
        <button
          type="button"
          onClick={generateQRCode}
          className="text-black underline text-lg"
        >
          Generate
        </button>
      </form>
    </div>
  );
}