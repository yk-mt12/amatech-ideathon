import React from "react";

const Info = () => {
  return (
    <div className="">
      <h2 className="mb-4 text-3xl font-bold">募集要項</h2>

      <div className="mb-4">
        <h2 className="text-xl font-bold">日時</h2>
        <p>2023年3月25日（土）~3月26日（日）</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold">場所</h2>
        <p>1日目：discord</p>
        <p>2日目：TOMOSUBA 京都河原町</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold">参加費用</h2>
        <p>500円</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold">表彰</h2>
        <p>最優秀賞: ¥10,000円(1チーム)</p>
        <p>メンター賞: ¥2000円</p>
        <p>企業賞: 1チーム</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold">審査員</h2>
        <p>学生審査員+企業審査員の5名</p>
      </div>

    </div>
  );
};
export default Info;
