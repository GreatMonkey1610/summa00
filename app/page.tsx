import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-8">
      <h1 className="text-3xl font-bold text-center mb-8">SUMMA00</h1>

      <div className="flex flex-wrap justify-center max-w-4xl">
        <div className="w-72 h-40 rounded-lg shadow-lg bg-white mx-4 my-4 flex items-center justify-center text-lg font-semibold">
          <Link href="/compatibility">
            <p className="text-gray-800">Compatibility</p>
          </Link>
        </div>
        <div className="w-72 h-40 rounded-lg shadow-lg bg-white mx-4 my-4 flex items-center justify-center text-lg font-semibold">
          <Link href="/roastme">
            <p className="text-gray-800">Roast Me</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
