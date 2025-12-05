"use Client";
import Image from "next/image";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <section className="px-3 my-30">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center gap-2">
              <h3 className="leading-10">Bus Travel, the Easy Way!</h3>
              <p className="text-sm text-stone-500 font-medium">
                Effortless planning for Your Next Adventure
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
              <div className="bg-blue-100 flex rounded-bl-4xl rounded-tr-4xl py-10 h-65">
                <div className="w-[85%] mx-auto flex flex-col justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="size-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>

                  <p className="text-xl font-bold">Seemless Booking Process</p>
                </div>
              </div>
              <div className="bg-blue-100 flex rounded-bl-4xl rounded-tr-4xl py-10 h-65">
                <div className="w-[85%] mx-auto flex flex-col justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="size-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>

                  <p className="text-xl font-bold">Expert Local Insights</p>
                </div>
              </div>
              <div className="bg-blue-100 flex rounded-bl-4xl rounded-tr-4xl py-10 h-65">
                <div className="w-[85%] mx-auto flex flex-col justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="size-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>

                  <p className="text-xl font-bold">Tailored Itinaries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-3 my-30">
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
            <div className="h-full">
              <Image
                src={"/showcase.jpg"}
                width={0}
                height={0}
                alt="shocase"
                sizes="full"
                className="object-cover object-center h-full w-full"
              ></Image>
            </div>
            <div className="flex flex-col justify-center gap-10">
              <h4 className="text-[3rem] font-bold leading-15 after:content-['hello]">
                Ignite Your Wanderlust with Every Bus Ride
              </h4>
              <div className="flex flex-col gap-6 text-stone-700">
                <p>
                  Traveling by bus offers comfort and stunning views on your way
                  to amazing destinations. With spacious seats and air
                  conditioning, you can relax and enjoy the ride, whether
                  you&apos;re heading to a vibrant city or a peaceful getaway.
                  It’s the perfect way to travel affordably and conveniently
                  while experiencing the beauty of the journey.
                </p>
                <p>
                  Explore the World by Bus with Ease Hop on a bus and experience
                  the joy of travel at your own pace. From comfortable seating
                  to scenic routes, our buses offer the perfect way to explore
                  cities, nature, and everything in between. Whether it&apos;s a
                  quick trip or a long adventure, sit back, relax, and enjoy the
                  ride.
                </p>
              </div>
              <div className="bg-[url(/showcase2.jpeg)] w-full h-20 rounded-xl bg-cover bg-center relative overflow-hidden flex justify-center items-center">
                <div className="w-full h-full absolute inset-0 bg-black opacity-50 hover:cursor-pointer"></div>
                <a
                  className="text-white relative z-10 text-xl font-medium"
                  href=""
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-3 my-50">
        <div className="w-[60%] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6  justify-center">
            <div className="bg-blue-50 rounded-2xl flex flex-col justify-center items-center aspect-video shadow-md">
              <h6 className="text-[4rem] font-semibold text-blue-500">30+</h6>
              <p className="text-stone-500 text-xl font-light">
                Years Experience
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col justify-center items-center aspect-video shadow-md">
              <h6 className="text-[4rem] font-semibold text-blue-500">1M+</h6>
              <p className="text-stone-500 text-xl font-light">Happy Clients</p>
            </div>
            <div className="bg-blue-50 rounded-2xl flex flex-col justify-center items-center aspect-video shadow-md">
              <h6 className="text-[4rem] font-semibold text-blue-500">4.8</h6>
              <p className="text-stone-500 text-xl font-light">
                Overall Rating
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-3 my-30">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-10 justify-center items-center text-center">
            <div className="space-y-4">
              <h3 className="leading-12">
                Discover Peace, Culture, and Devotion with Our Temple Bus
                Travels
              </h3>
              <p className="text-stone-500 text-base font-light">
                Witness Stinning Lanscapes from the Comfort of Your Bus Seat
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 w-[80%]">
              <div className="hover:shadow-2xl shadow-stone-500 gap-6 transition-all duration-300 flex flex-col items-center rounded-4xl px-6 py-10">
                <div className="text-blue-600 rounded-full bg-blue-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide  lucide-ship-icon lucide-ship "
                  >
                    <path d="M12 10.189V14" />
                    <path d="M12 2v3" />
                    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
                    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold w-[60%]">
                  Your Road, Your Story
                </h6>
                <p className="text-stone-700 text-normal">
                  Experience the freedom of travel with our comfortable and
                  reliable bus trips. Enjoy stunning views along the way while
                  relaxing in spacious seats. Whether it&apos;s a short trip or
                  a long journey, our buses ensure a smooth and enjoyable ride.
                </p>
              </div>
              <div className="hover:shadow-2xl shadow-stone-500 gap-6 transition-all duration-300 flex flex-col items-center rounded-4xl px-6 py-10">
                <div className="text-blue-600 rounded-full bg-blue-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-aperture-icon lucide-aperture"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m14.31 8 5.74 9.94" />
                    <path d="M9.69 8h11.48" />
                    <path d="m7.38 12 5.74-9.94" />
                    <path d="M9.69 16 3.95 6.06" />
                    <path d="M14.31 16H2.83" />
                    <path d="m16.62 12-5.74 9.94" />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold">
                  Coastal <br /> Wonders
                </h6>
                <p className="text-stone-700 text-normal">
                  Embark on a journey through the mesmerizing coastal wonders.
                  Enjoy the serene beauty of pristine beaches, stunning cliffs,
                  and breathtaking ocean views, all from the comfort of our bus.
                  Let the coastal breeze guide you to unforgettable
                  destinations.
                </p>
              </div>
              <div className="hover:shadow-2xl shadow-stone-500 gap-6 transition-all duration-300 flex flex-col items-center justify-center rounded-4xl px-6 py-10">
                <div className="text-blue-600 rounded-full bg-blue-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mountain-icon lucide-mountain"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold">
                  Historic <br /> Landmarks
                </h6>
                <p className="text-stone-700 text-normal">
                  Explore the charm of historic landmarks on our specially
                  curated bus tours. Our comfortable buses will take you through
                  iconic sites, offering insights into their fascinating
                  stories. Sit back, relax, and immerse yourself in the rich
                  history that each destination holds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-3 mt-30 bg-gray-200">
        <div className="w-[70%] mx-auto py-30">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-10">
            <div className="flex flex-col gap-6 md:col-span-2">
              <h5 className="text-blue-500 text-2xl">Rapid Route</h5>
              <p className="text-gray-700">
                Explore the world with ease and excitement through our
                all-in-one bus travel platform. Your journey begins here — where
                smooth planning meets unforgettable road experiences.
              </p>
              <div className="flex gap-4">
                <FaFacebook size={36} className="text-blue-600" />
                <RiInstagramFill size={36} className="text-blue-600" />
                <FaYoutube size={36} className="text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-xl font-semibold">Quick Links</h5>
              <div className="flex flex-col gap-4 text-stone-600">
                <p>Home</p>
                <p>Bus</p>
                <p>Hotels</p>
                <p>Cruise</p>
              </div>
            </div>
            <div className="flex flex-col  gap-6">
              <h5 className="text-xl font-semibold">Contact Us</h5>
              <div className="flex flex-col gap-4 text-stone-600">
                <p>036465465</p>
                <p>info@rapidroute</p>
                <p>Skardu, Pakistan</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-xl font-semibold">Subscribe</h6>
              <input
                className="bg-white px-4 py-2 rounded-xl ring ring-stone-500 focus:outline-none focus:ring focus:ring-blue-600  "
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="btn-small w-full rounded-xl">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
