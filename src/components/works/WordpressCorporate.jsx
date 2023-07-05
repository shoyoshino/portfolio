import React from 'react';
import wordpressCorporatePng from '/src/assets/wordpress_corporate.png';

const WordpressCorporate = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div>
          <img src={wordpressCorporatePng} alt="" />
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold">WordPress コーポレートサイト制作</h2>
          <p className="leading-relaxed mt-5">WordPressの学習の為制作したコーポレートサイト</p>

          <table className="table-fixed w-full mt-5">
            <tbody>
              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left py-0 md:py-5">URL</th>
                <td className="w-full md:w-auto block md:table-cell text-left py-5">
                  <a
                    href="https://shoyoshino.com/wordpress/corporate/"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    ページを見る
                  </a>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作期間</th>
                <td className="w-full md:w-auto block md:table-cell py-5">3日</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">作業内容</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul>
                    <li>WordPress環境構築</li>
                    <li>自作テーマの実装</li>
                    <li>カスタム投稿タイプの追加(functions.php)</li>
                    <li>カスタムフィールドの使用(Custom Field Suite)</li>
                    <li>テンプレート階層の使用</li>
                    <li>header, footer, sectionなどのパーツ化</li>
                    <li>Contact Form 7の実装</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用言語</th>
                <td className="w-full md:w-auto block md:table-cell py-5">HTML / CSS / JavaScript</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用ツール</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  WordPress / Contact Form 7 / Custom Field Suite / WP-PageNavi
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">うまくいった点</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul className="list-decimal pl-5">
                    <li>
                      自作テーマの実装
                      <br />
                      実務案件に対応できるよう自作テーマの実装を行いました。
                      <br />
                      デザインはなるべくシンプルにしWordPressの機能を多く実装できる形にしました。
                    </li>
                    <li className="mt-2">
                      カスタム投稿タイプの追加、カスタムフィールドの使用
                      <br />
                      こちらも実務案件での使用頻度が高い機能追加の為調べつつ実装を行いました。
                      <br />
                      カスタム投稿タイプで「新着情報」を実装、表示。 カスタムフィールドで「会社案内」の内容を表示。
                    </li>
                    <li className="mt-2">
                      テンプレート階層の使用
                      <br />
                      archiveページ2種、Serviceのパーツ化などを行っています。
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

export default WordpressCorporate;
