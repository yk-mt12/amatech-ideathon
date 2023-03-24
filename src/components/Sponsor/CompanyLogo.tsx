import Image from "next/image";

type Props = {
  src: string;
  href: string;
};

const CompanyLogo = ({ src, href }: Props) => {
  return (
    <a href={href} className="mx-auto block sp:mx-0 lg:mx-0">
      <Image src={src} alt="Company Logo" width={250} height={160} />
    </a>
  );
};

export default CompanyLogo;
