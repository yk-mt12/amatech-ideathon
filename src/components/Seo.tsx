import { DefaultSeo } from "next-seo";


const Seo = () => {
  return (
    <DefaultSeo
        defaultTitle="あまてく×CACアイディアソン"
        description="デフォルトの説明"
        openGraph={{
          type: "website",
          title: "あまてく×CACアイディアソン",
          description: "チーム対抗！脳内最強のプロダクトを創造せよ！ 春休み最後に、2日間で企画〜プロトタイプ作成までを行い、一緒にアウトプットを行う1歩目を踏み出しましょう✨ 今回のアイディアソンでは、テーマに沿った課題を解決するためのアイディアをチームで考え、本当にニーズ・価値のあるプロダクトを考案してもらいます💪 また、1日目に開催するマーケティング講義を通して、ただ作るだけでなく本当に使われるプロダクトとは何か？マーケティングとは何か？をインプットし、アウトプットまでを高速に行うことができます💻",
          site_name: "あまてくイベントサイト",
          url: "あまてくイベントサイト",
          images: [
            {
              url: "/public/images/ogp.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
  )
}

export default Seo