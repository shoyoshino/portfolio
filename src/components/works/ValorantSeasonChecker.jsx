import React from 'react';
// import valorantSeasonCheckerPng from '/src/assets/valorant_season_checker.png';
import valorantSeasonCheckerPng from '../../assets/valorant_season_checker.png';

const ValorantSeasonChecker = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div>
          <img src={valorantSeasonCheckerPng} alt="" />
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold">VALORANT Season Checker</h2>
          <p className="leading-relaxed mt-5">
            VALORANTというPCゲームのランクマッチ期間を確認できるアプリを作成しました。
            <br />
            ランクマッチ期間はPCでゲームにログインすることで確認することができますが、出先で確認できなかったり手間であると感じていた為作成しました。
          </p>

          <table className="table-fixed w-full mt-5">
            <tbody>
              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left py-0 md:py-5">URL</th>
                <td className="w-full md:w-auto block md:table-cell text-left py-5">
                  <a
                    href="https://valorant-season-checker.netlify.app/"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    VALORANT Season Checker
                  </a>
                  <a
                    href="https://github.com/shoyoshino/valorant-season-checker-react"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white mt-2 md:ml-2 px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作期間</th>
                <td className="w-full md:w-auto block md:table-cell py-5">2週間</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用言語</th>
                <td className="w-full md:w-auto block md:table-cell py-5">React</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用ツール</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  VALORANT API / Tailwind CSS / Netlify / Vite
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">工夫点</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul className="list-decimal pl-5">
                    <li>APIの呼び出し回数を最小限にした</li>
                    <li className="mt-2">
                      2種類のAPIを呼び出す必要があった為Promise.allの使い方に苦戦した。
                      <br />
                      調べつつ実装することができた。
                    </li>
                    <li className="mt-2">同じ処理を何度も行っていたところを1個の関数にまとめた</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ValorantSeasonChecker;
