import { FaTwitter } from "react-icons/fa";

export const Twitter = () => {
  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Twitter</h2>
      <p>
        イベントの様子や開催中の雰囲気などを発信します！スポンサー企業のご紹介もお楽しみに！
        <br />
        当日のハッシュタグ
        <span className="text-1xl font-bold text-blue-400 hover:text-blue-500">
          <a
            href="https://twitter.com/intent/tweet?hashtags=cacあまてくアイディアソン"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          #cacあまてくアイディアソン
        </span>
        <br />
        学んだことや感想などをツイートしてください！
      </p>
      <button className="mt-4 rounded-full bg-blue-400 py-2 px-4 hover:bg-blue-500">
        <a
          href="https://twitter.com/amatech1006"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full py-2 px-4  font-bold text-white  "
        >
          <FaTwitter className="mr-2" />
          Twitterを見る
        </a>
      </button>
    </div>
  );
};
