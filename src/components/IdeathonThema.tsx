import Image from "next/image";

const Ideatheme = () => {
  const imageSize = {
    xs: { width: 200, height: 200 },
    sm: { width: 250, height: 250 },
    md: { width: 300, height: 300 },
    lg: { width: 350, height: 350 },
    xl: { width: 400, height: 400 },
  };

  return (
    <div className="mb-20 overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            アイディアソンテーマ
          </h2>
          <p className="mt-4 text-xl text-gray-500 sm:text-4xl lg:text-5xl">
            大学生が考える
            <span className="text-4xl font-extrabold text-blue-500 sm:text-5xl lg:text-6xl ">
              京都
            </span>
            の課題を最高のプロダクトで解決しよう！
          </p>
        </div>
        <div className="mx-4 sm:mx-4">
          <div
            className="flex flex-wrap justify-center items-center"
            style={{ gap: "3rem" }}
          >
            <div className="w-full sm:w-auto">
              <Image
                src="/images/kyoto1.jpg"
                alt="京都の景色"
                width={imageSize.sm.width}
                height={imageSize.sm.height}
                className="mb-4 rounded-full"
              />
            </div>
            <div className="w-full sm:w-auto">
              <Image
                src="/images/kyoto2.jpg"
                alt="京都の景色"
                width={imageSize.sm.width}
                height={imageSize.sm.height}
                className="mb-4 rounded-full"
              />
            </div>
            <div className="w-full sm:w-auto">
              <Image
                src="/images/kyoto3.jpg"
                alt="京都の景色"
                width={imageSize.sm.width}
                height={imageSize.sm.height}
                className="mb-4 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideatheme;
