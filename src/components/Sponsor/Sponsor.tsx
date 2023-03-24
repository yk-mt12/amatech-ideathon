import CompanyLogo from "./CompanyLogo";

const Sponsor = () => {
  return (
    <div className="mx-auto mb-20 bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-8">
      <h2 className="text-3xl font-bold">スポンサー</h2>
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        <div className="w-full lg:w-auto">
          <CompanyLogo
            src="/images/logo/tomosuba-logo.png"
            href="https://tomosuba.jp/kyoto"
          />
        </div>
        <div className="w-full lg:w-auto">
          <CompanyLogo
            src="/images/logo/bridge_logo.png"
            href="https://www.bridge-net.co.jp/"
          />
        </div>
        <div className="w-full lg:w-auto">
          <CompanyLogo
            src="/images/logo/karabina_logo.png"
            href="https://karabiner.tech/"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
