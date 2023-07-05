import React from 'react';
import wakamatuunyuPng from '../../assets/wakamatuunyu.png';

const Wakamatuunyu = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div>
          <img src={wakamatuunyuPng} alt="" />
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold">某運送会社様 コーポレートサイト制作</h2>
          <p className="leading-relaxed mt-5">某運送会社様の採用強化の為のサイト制作</p>

          <table className="table-fixed w-full mt-5">
            <tbody>
              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left py-0 md:py-5">URL</th>
                <td className="w-full md:w-auto block md:table-cell text-left py-5">
                  <a
                    href="https://wakamatuunyu.com/"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    コーポレートサイト
                  </a>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作期間</th>
                <td className="w-full md:w-auto block md:table-cell py-5">1~2か月</td>
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
                    <li>リキッドレイアウト対応</li>
                    <li>WordPressへの実装</li>
                    <li>Contact Form 7でのフォーム実装</li>
                    <li>Photoshopでの画像編集</li>
                    <li>XDからの画像素材書き出し</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用言語</th>
                <td className="w-full md:w-auto block md:table-cell py-5">HTML / CSS / JavaScript / jQuery</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用ツール</th>
                <td className="w-full md:w-auto block md:table-cell py-5">XD / Photoshop</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">工夫点</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul className="list-decimal pl-5">
                    <li>
                      デザインが不規則な点があった為リキッドレイアウトを採用
                      <br />
                      会社沿革の横線や会社情報の背景などコンテナサイズを超えるデザインがあり、px指定だと画面の縮小で崩れる可能性が高いと感じた為リキッドレイアウトを提案しました。
                    </li>
                    <li className="mt-2">
                      保有車両タブ切り替え機能の実装
                      <br />
                      修正のしやすさや動作の軽さを重視しHTML, CSSで実装しました。
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

export default Wakamatuunyu;
