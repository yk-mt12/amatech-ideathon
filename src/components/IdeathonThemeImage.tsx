import Image from "next/image";

type Props = {
  src: string;
};

const IdeathonThemeImage = (src: Props) => {
  const width = 300;
  const height = 300;
  return (
    <Image
      src={src}
      alt="京都の景色"
      width={width}
      height={height}
      className="rounded-full"
    />
  );
};

export default IdeathonThemeImage;
