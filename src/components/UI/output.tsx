'use client'

interface OutputProps {
  qrCodeUrl: string;
}

export default function Output({ qrCodeUrl }: OutputProps) {
  const handleDownload = () => {
    if (!qrCodeUrl) return;
    
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white drop-shadow-md h-[350px] w-[300px] m-5 rounded-xl">
      {qrCodeUrl && (
        <div className="mb-24 flex flex-col items-center">
          <div className="p-4">
            <img 
              src={qrCodeUrl} 
              alt="Generated QR Code"
              className="w-64 h-64 object-contain"
            />
          </div>
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 transition hover:bg-gradient-to-r rounded-md py-2 px-3 text-white font-bold"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}
