import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-3 h-[calc(100vh-100px)]  py-2">
      <div className="relative w-[95%] h-full text-white mx-auto  overflow-hidden bg-cover bg-left md:bg-center rounded-[100px] bg-[url(/heroImage.jpg)]">
        <div className="z-10 absolute inset-0 bg-stone-800 opacity-50"></div>
        <div className="relative z-20 flex h-full items-center md:items-end justify-center flex-col pr-12 transition-all">
          <div className="w-[50%] space-y-6 flex flex-col items-start">
            <p className="text-xl">BUS YOUR TREVEL JOURNEY</p>
            <h2 className="text-6xl font-medium">
              Where Every Bus Ride Feels Magical!
            </h2>
            <Link
              href={"/booking"}
              className="bg-blue-500 hover:cursor-pointer text-xl rounded-xl font-normal px-8 py-4 flex items-center justify-center"
            >
              Book A Trip Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
