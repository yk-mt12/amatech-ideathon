import Head from "next/head";
import Image from "next/image";

const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>あまてくアイディアソン</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
              <Image
                className="inline-block h-8 w-8"
                src="/images/logo/amatech-logo.jpg"
                alt="あまてくロゴ"
                width={256}
                height={256}
              />
              あまてく アイディアソン
            </h1>
          </div>
          <Image
            src="/images/hero.png"
            alt="あまてくロゴ"
            width={1980}
            height={1000}
          />
        </header>
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
    </>
  );
};

export default Layout;
