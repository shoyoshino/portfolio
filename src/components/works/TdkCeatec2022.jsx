import React from 'react';
import tdkceatec2022Png from '../../assets/tdk_ceatec_2022.png';
// import tdkceatec2022Png from '/src/assets/tdk_ceatec_2022.png';

const TdkCeatec2022 = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div>
          <img src={tdkceatec2022Png} alt="" />
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold">某電気機器製造会社様 イベント特設サイト制作</h2>
          <p className="leading-relaxed mt-5">某電気機器製造会社様のイベント出展に際した特設サイトの制作</p>

          <table className="table-fixed w-full mt-5">
            <tbody>
              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left py-0 md:py-5">URL</th>
                <td className="w-full md:w-auto block md:table-cell text-left py-5">
                  <a
                    href="https://site.tdk.com/ceatec2022_index?pid=booth"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    キャンペーン表示あり(初回のみ)
                  </a>
                  <a
                    href="https://site.tdk.com/ceatec2022_index"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white mt-2 md:ml-2 px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    キャンペーン表示なし
                  </a>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作期間</th>
                <td className="w-full md:w-auto block md:table-cell py-5">1か月</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作ボリューム</th>
                <td className="w-full md:w-auto block md:table-cell py-5">1ページ</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">担当業務</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul>
                    <li>コーディング、アニメーション実装</li>
                    <li>Photoshopからの画像素材書き出し</li>
                    <li>Cookieでの初回訪問を判断、かつURLパラメータからキャンペーン応募表示処理実装</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用言語</th>
                <td className="w-full md:w-auto block md:table-cell py-5">HTML / CSS / JavaScript / jQuery</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用ツール</th>
                <td className="w-full md:w-auto block md:table-cell py-5">Photoshop</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">工夫点</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul className="list-decimal pl-5">
                    <li>
                      特定URLの初回訪問者へのみキャンペーン表示実装
                      <br />
                      会場に来た方にのみキャンペーン表示ありのURLを配布する予定とのことだった為、URLパラメータを使用してキャンペーン表示ありのURLなのかを判別、Cookieを使用して初回訪問なのかを判別することで実装しました。
                    </li>
                    <li className="mt-2">
                      絞込機能付きリストの実装
                      <br />
                      「出展製品&製品資料」でタブを押すと分類ごとの製品に絞れるようにしました。
                      <br />
                      HTML, CSSのみで実装することで修正しやすく動作も軽く実装することができました。
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

export default TdkCeatec2022;
