import bgImg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bgImg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />
      <div className="relative text-center z-10">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcom to paradise.
        </h1>
        <Link
          className="px-8 py-6 bg-accent-500 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          href="/cabins"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
