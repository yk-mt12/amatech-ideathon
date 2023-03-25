import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const currentYear = new Date().getFullYear();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-slate-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
              <Link href="/" className="flex items-center">
                <Image
                  className="inline-block h-8 w-8"
                  src="/images/logo/amatech-logo.jpg"
                  alt="あまてくロゴ"
                  width={256}
                  height={256}
                />
                <span className="ml-2">あまてく アイディアソン</span>
              </Link>
            </h1>
            <div className="flex flex-col items-center justify-center text-gray-800 md:hidden top-50">
              <button
                onClick={toggleMenu}
                type="button"
                className="z-10 space-y-2"
              >
                <div
                  className={
                    menuOpen
                      ? "h-0.5 w-8 translate-y-2.5 rotate-45 bg-gray-600"
                      : "h-0.5 w-8 bg-gray-600"
                  }
                />
                <div
                  className={menuOpen ? "opacity-0" : "h-0.5 w-8 bg-gray-600"}
                />
                <div
                  className={
                    menuOpen
                      ? "h-0.5 w-8 -rotate-45 bg-gray-600"
                      : "h-0.5 w-8 bg-gray-600"
                  }
                />
              </button>
            </div>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-between `}
          >
            <div className="flex flex-col md:flex-row md:items-center mt-5">
              <Link
                href="/vol1"
                className="my-1 font-bold text-gray-800 hover:text-blue-500 md:my-0 md:mx-4 text-right"
              >
                Vol1
              </Link>
              <Link
                href="/Contact"
                className="my-1 font-bold text-gray-800 hover:text-blue-500 md:my-0 md:mx-4 text-right"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-white py-4 shadow">
        <div className="container mx-auto px-6">
          <p className="text-base text-gray-600 lg:text-lg">
            © {currentYear} Engineer Community Amatech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
