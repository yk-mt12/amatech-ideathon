import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "なぜ1日目がオンラインで2日目がオフラインなのですか？",
      answer:
        "1泊2日のイベントではないため、2日間オフラインにすることで参加者の移動が大変になると考慮した結果です。また、オフラインで開催することでのメリットが大きいため2日目をオフラインとしました。",
    },
    {
      question: "プログラミング経験は必須ですか？",
      answer: "文系理系問わず、未経験者も大歓迎です！",
    },
    {
      question: "プログラミングをせずにどのように競うのですか？",
      answer:
        "アイディア出しの段階で考えないといけないことはたくさんあります。例えば、ターゲット層やペルソナ、デザインなど、このよう部分を2日間でブラッシュアップし、最終的にはプロトタイプを作成してもらい、最終プレゼンをしていただきます。",
    },
    {
      question:
        "[TOMOSUBA 京都河原町](https://tomosuba.jp/kyoto/)とはなんですか？",
      answer:
        "河原町にある学生完全無料のコミュニティスペースです。この度あまてくがTOMOSUBA様と提携し、イベント会場としてお貸しいただくことになりました。",
    },
  ];

  return (
    <div className="faq">
      <h2 className="text-3xl font-bold mb-4">FAQ</h2>

      {faqs.map((faq) => (
        <div key={faq.question} className="mb-5">
          <h3 className="mb-2 font-bold">Q. {faq.question}</h3>
          <p className="">A. {faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
