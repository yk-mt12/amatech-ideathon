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
    <>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
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
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  {menuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6L6 18M6 6l12 12"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-between`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <Link href="/vol1" className="my-1 md:my-0 md:mx-4 text-gray-800 font-bold hover:text-blue-500">
                  Vol1
              </Link>
              <Link href="/Contact" className="my-1 md:my-0 md:mx-4 text-gray-800 font-bold hover:text-blue-500">
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
    </>
  );
};

export default Layout;