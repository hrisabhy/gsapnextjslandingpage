import Image from "next/image";
import LogoImg from "/public/logo.svg";
import searchImg from "/public/icon-search.svg";
import userImg from "/public/icon-user.svg";
import Link from "next/link";
import { GridContainer } from "./grid";

const menuArray = [
  "Home",
  "Benefits",
  "Who is the course for?",
  "Promotional Prices",
  "About us",
];
export function Header() {
  const activeStyled = "bg-green-active text-opacity-100 rounded-full";
  return (
    <header className="w-full relative h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="Logo" />
        <div className="flex items-center space-between gap-20">
          <nav className="flex gap-2">
            {menuArray.map((item, index) => {
              return (
                <Link
                  href="#"
                  className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
                    index === 0 ? activeStyled : ""
                  }`}
                  key={item}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image src={searchImg} alt="Search Icon" />
            </button>
            <button className="flex items-center gap-2">
              <Image src={userImg} alt="User Icon" />
              <span className="text-white font-medium">Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
