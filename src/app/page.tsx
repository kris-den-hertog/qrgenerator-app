import Header from "@/components/UI/header";
import Form from "@/components/input/form";

export default function Home() {
  return (<main>
    <Header />
    <div className="w-[100vw] flex justify-center">
    <div className="w-[95vw] max-w-[800px] flex justify-left flex-col">
      <h1 className="font-bold text-[30px]">Generate QR code</h1>
      <Form />
    </div>
    </div>
  </main>);
}
