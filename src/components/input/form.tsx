interface FormProps {
  srcValue: string;
  setSrcValue: React.Dispatch<React.SetStateAction<string>>;
  generateQRCode: (value: string) => Promise<void>;
}

export default function Form({ srcValue, setSrcValue, generateQRCode }: FormProps) {
  return (
    <div className="p-4">
      <form className="flex flex-row items-center space-y-4">
        <input
          type="text"
          placeholder="QR Value"
          value={srcValue}
          onChange={(e) => setSrcValue(e.target.value)}
          className="h-12 bg-white border-b-2 border-gray-500 text-lg px-4"
        />
        <button
          type="button"
          onClick={() => generateQRCode(srcValue)} // Use passed prop function
           className="underline ml-10 py-2 px-3 text-black"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
