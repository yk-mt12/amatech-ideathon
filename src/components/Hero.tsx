import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="font-semibold uppercase tracking-wide text-blue-500 maxsp:text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl">
            チーム対抗！
          </h2>
          <p className="mt-2 text-sm font-extrabold leading-8 tracking-tight text-gray-900 sm:text-base sm:text-5xl md:text-lg lg:text-xl xl:text-3xl">
            脳内最強のプロダクトを創造せよ！
          </p>
          <p className="mt-4 max-w-2xl text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            春休み最後に、2日間で企画〜プロトタイプ作成までを行い、一緒にアウトプットを行う1歩目を踏み出しましょう✨
          </p>
          <div className="mt-6">
            <p className="text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              今回のアイディアソンでは、
              <span className="font-semibold">
                テーマに沿った課題を解決するためのアイディアをチームで考え、本当にニーズ・価値のあるプロダクトを考案してもらいます💪
              </span>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              また、1日目に開催するマーケティング講義を通して、
              <span className="font-semibold">
                ただ作るだけでなく本当に使われるプロダクトとは何か？マーケティングとは何か？をインプットし、アウトプットまでを高速に行うことができます💻
              </span>
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://amatech1006.notion.site/amatech1006/9728f0790eb44f4794b8fe531fbde9c7"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-400 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                あまてくについてもっと知る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
