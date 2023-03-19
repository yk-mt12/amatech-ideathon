import Image from "next/image";

type Props = {
  src: string;
  href: string;
};

const CompanyLogo = ({ src, href }: Props) => {
  return (
    <a href={href}>
      <Image
        src={src}
        alt="Company Logo"
        width={128}
        height={128}
      />
    </a>
  );
};

export default CompanyLogo;
