const Schedule = () => {
  return (
    <div className="mt-6 mb-16">
      <h3 className="mb-4 text-2xl font-bold">スケジュール</h3>
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              Day 1 (Online)
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            13:00 ~ 開会式
            <br />
            ・ 運営挨拶
            <br />
            ・ メンター挨拶
            <br />
            ・ 注意事項
            <br />
            13:30 ~ 14:00 マーケティング, プロダクト企画講義
            <br />
            14:00 ~ アイディアソン開始
            <br />
            17:00 ~ 中間発表
            <br />
            18:00 ~ 閉会式
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              Day 2 (TOMOSUBA)
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            10:30 ~ 開場
            <br />
            11:00 ~ 開会式
            <br />
            ・ 協賛企業の紹介(10分)
            <br />
            &nbsp;&nbsp;&nbsp; ・ TOMOSUBA
            <br />
            &nbsp;&nbsp;&nbsp; ・ ブリッジコーポレーション
            <br />
            &nbsp;&nbsp;&nbsp; ・ カラビナテクノロジー
            <br />
            12:00 ~ アイディアソン再開！
            <br />
            16:00 ~ 最終発表
            <br />
            16:45 ~ 結果発表
            <br />
            17:15 ~ 18:30 交流会
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Schedule;
