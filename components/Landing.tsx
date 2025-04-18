import Header from "@/components/Header";
import "@/styles/landing.css"
import Image from "next/image";

export default function Landing() {
  return (
    <article className="w-full h-[100vh] relative">
      <Image
        src="./landing-bg.jpg"
        alt="Landing Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 landing-background"></div>
      <div className="absolute inset-0 z-20">
        <Header />

        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">Applying filters to Lenna</h1>
          <p className="text-xl mb-8">CS4016 - Computer Graphics - PC1</p>
        </div>
      </div>
    </article>
  );
}