import React from "react";

const IdeathonFeatures = () => {
  return (
    <div className="mb-20">
      <h2 className="mb-4 text-3xl font-bold">あまてく アイディアソンの特徴</h2>
      <h3 className="mb-4 text-xl font-bold text-blue-500 hover:text-blue-600">
        <a href="https://amatech1006.notion.site/CAC-74c08880945b47b2b6ae5094917db184">
          あまてくについてもっと知る→
        </a>
      </h3>
      <ul className="mb-4 list-inside list-disclosure">
        <li>
          <strong>各チームに先輩メンターが伴走します💪</strong>
          <p className="mt-2">
            マーケティングの知見がある先輩や同学部の先輩がメンターとなり、参加される学生の質問に回答していきます！
          </p>
        </li>
        <li className="mt-4">
          <strong>身近な課題を解決するための経験を養うことができる💻</strong>
          <p className="mt-2">
            普段から自分達が感じている課題を分析し、ソリューションを考え、自由にサービスやプロダクトを作成することができます！
            <br />
            1日目に開催するマーケティング講義を得て、マーケットイン・プロダクトアウトの考えを学び、より質の高いプロダクトを提案しましょう！
          </p>
        </li>
        <li className="mt-4">
          <strong>プログラミングが苦手でも安心👍</strong>
          <p className="mt-2">
            figmaというプロトタイプツールを使用することで、プログラミングが苦手な学生でもコードを書くことなく、プロダクトを作る（アウトプット）経験を養うことができます！
          </p>
        </li>
        <li className="mt-4">
          <strong>白熱するプレゼン🔥</strong>
          <p className="mt-2">
            アイディアやビジネス的観点、デザイン、プレゼンのクオリティ、チーム内のコミュニケーションなど複数の観点から採点を行います✨
          </p>
        </li>
        <li className="mt-4">
          <strong>最高の思い出に！！🤳</strong>
          <p className="mt-2">
            オンライン+対面で交流することで、チーム内で熱い議論を行っていただきます！2日間を通しての時間は最高の思い出になること間違いなしです！
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IdeathonFeatures;
