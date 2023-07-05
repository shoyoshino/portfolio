import React from 'react';
import tdkSevenSeasPng from '/src/assets/tdk_seven_seas.png';
// import valorantSeasonCheckerPng from '../../assets/valorant_season_checker.png';

const ValorantSeasonChecker = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div>
          <img src={tdkSevenSeasPng} alt="" />
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold">某電気機器製造会社様 テクノロジー訴求ページ制作</h2>
          <p className="leading-relaxed mt-5">某電気機器製造会社様の7つのテクノロジーをアピールする為のページ制作</p>

          <table className="table-fixed w-full mt-5">
            <tbody>
              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left py-0 md:py-5">URL</th>
                <td className="w-full md:w-auto block md:table-cell text-left py-5">
                  <a
                    href="https://www.tdk.com/ja/about_tdk/seven-seas/index.html"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    日本語
                  </a>
                  <a
                    href="https://www.tdk.com/en/about_tdk/seven-seas/index.html"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white mt-2 md:ml-2 px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    英語
                  </a>
                  <a
                    href="https://www.tdk.com.cn/zh/about_tdk/seven-seas/index.html"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white mt-2 md:ml-2 px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    中国語
                  </a>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作期間</th>
                <td className="w-full md:w-auto block md:table-cell py-5">2か月 公開後修正含めると5か月ほど</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作ボリューム</th>
                <td className="w-full md:w-auto block md:table-cell py-5">8ページ×3言語(日本語/英語/中国語)</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">担当業務</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul>
                    <li>コーディング、アニメーション実装</li>
                    <li>GSAPによるスクロールアニメーション実装</li>
                    <li>Modaalによる動画モーダル実装</li>
                    <li>リキッドレイアウト対応</li>
                    <li>Drupalへの実装</li>
                    <li>Photoshop, XDからの画像素材書き出し</li>
                    <li>Premiere Proでの埋め込み用動画サイズ編集、書き出し</li>
                    <li>公開後修正</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用言語</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  HTML / CSS / JavaScript / jQuery / GSAP / Modaal
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用ツール</th>
                <td className="w-full md:w-auto block md:table-cell py-5">Drupal / Photoshop / Premiere Pro</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">工夫点</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul className="list-decimal pl-5">
                    <li>
                      ハンバーガーメニューの位置を画面最上部とそれ以外で可変にしました。
                      <br />
                      SP表示の際ヘッダーとメインビジュアルの2か所にハンバーガーメニューがあるデザインとなっていた為被って押せない問題がありました。
                      <br />
                      JavaScriptで最上部にいるかどうかを判定しCSSで調整する形にしました。
                    </li>
                    <li className="mt-2">
                      ページの軽量化 動画の埋め込みやアニメーションの多いページの為重くなりすぎないよう調整しました。
                      <br />
                      行った調整としては
                      <br />
                      - 透過のない画像はjpgで書き出し
                      <br />
                      - 画像サイズを調整
                      <br />
                      - 読み込むライブラリ類を軽量版にする
                      <br />- lazyloadの設定
                    </li>
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
