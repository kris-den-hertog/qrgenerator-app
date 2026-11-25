import Widget from "@/components/UI/widget";

export default function Home() {

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good morning!"
      : hour < 18
        ? "Good afternoon!"
        : "Good evening!";

  return (
    <main className="min-h-screen w-full p-8 flex flex-col items-center justify-center gap-10 ">
      <div className="flex flex-col items-center text-center ">
        <h1 className="text-6xl text-[#668263] font-bold p-2 max-[500px]:text-4xl max-[500px]:pt-8">{greeting}</h1>
        <h2 className="text-2xl font-normal p-2 max-[500px]:text-lg max-[500px]:pt-0">
          What would you like to generate today?
        </h2>
      </div>
      {/* <hr className="border-[#2e2e2e]/50 border rounded-full w-full max-w-[600px] " /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Widget
          function="createqr"
          widgetColor="#e9e4d8"
          widgetTitle="Generate QR Code"
          widgetDesc="Create a QR code from text, links or other information."
          widgetImg="/createQr.svg"
        />
        <Widget
          function="createbarcode"
          widgetColor="#e9e4d8"
          widgetTitle="Generate Barcode"
          widgetDesc="Create barcodes for products, inventory, or other items."
          widgetImg="/createBarcode.svg"
        />
        <Widget
          function="createqr"
          widgetColor="#e9e4d8"
          widgetTitle="Generate QR Code"
          widgetDesc="Create a QR code from text, links or other information."
          widgetImg="/createQr.svg"
        />
        <Widget
          function="createbarcode"
          widgetColor="#e9e4d8"
          widgetTitle="Generate Barcode"
          widgetDesc="Create barcodes for products, inventory, or other items."
          widgetImg="/createBarcode.svg"
        />
      </div>
    </main>
  );
}
