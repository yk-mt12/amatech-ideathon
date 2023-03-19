import CompanyLogo from "./CompanyLogo";

const Sponsor = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold">スポンサー</h2>
      <div className="flex flex-wrap justify-center lg:justify-between">
        <div className="w-full lg:mr-6 lg:w-auto">
          <CompanyLogo
            src="/images/logo/tomosuba-logo.png"
            href="https://tomosuba.jp/kyoto"
          />
        </div>
        {/* <div className="w-full lg:w-auto lg:mx-6">
          <CompanyLogo src="/path/to/logo2.png" href="#" />
        </div>
        <div className="w-full lg:w-auto lg:ml-6">
          <CompanyLogo src="/path/to/logo3.png" href="#" />
        </div> */}
      </div>
    </div>
  );
};

export default Sponsor;
