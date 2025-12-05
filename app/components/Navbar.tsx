import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = ["Home", "About", "Tour", "Package", "Contact"];
  return (
    <header className="w-full px-3">
      <nav className=" items-center h-25 w-11/12 flex mx-auto justify-between">
        <div className="max-w-22">
          <Image
            width={0}
            height={0}
            sizes="full"
            src={"/rapidLogo.png"}
            alt="logo"
            className="w-full"
          />
        </div>
        <ul className="md:flex gap-8 hidden ">
          {navLinks.map((value, i) => {
            return (
              <li key={i}>
                <a className="uppercase font-medium" href="">
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
        <Link href={"/booking"} className="btn-small">
          Book Now
        </Link>
      </nav>
    </header>
  );
}
