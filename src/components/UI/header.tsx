import Link from "next/link"

export default function Header() {
    return (<header className="w-full bg-black h-[50px] flex items-center">
        <Link href="https://www.krisdh.dev/"><h1 className="font-bold text-white text-[20px] ml-3">Krisdh.dev</h1></Link>
        <h1 className="text-white text-[20px] ml-5">QR-generator</h1>

    </header>)
}