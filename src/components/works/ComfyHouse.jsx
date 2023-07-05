import React from 'react';
import comfyhousePng from '/src/assets/comfyhouse.png';

const ComfyHouse = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div>
          <img src={comfyhousePng} alt="" />
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold">ComfyHouse</h2>
          <p className="leading-relaxed mt-5">
            データベースなどの情報をWebで使用する方法を学習するために制作しました。
            <br />
            YouTubeのチュートリアル動画を元にContentfulとの連携、機能の実装を行いました。
          </p>

          <table className="table-fixed w-full mt-5">
            <tbody>
              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left py-0 md:py-5">URL</th>
                <td className="w-full md:w-auto block md:table-cell text-left py-5">
                  <a
                    href="https://comfyhouse-js-shopping-site.netlify.app/"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    ComfyHouse
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=90PgFUPIybY"
                    className="inline-block w-full md:w-auto text-sm font-bold text-center border border-white mt-2 md:ml-2 px-10 py-2 hover:bg-white hover:text-[#141419] duration-300"
                    target="_blank"
                  >
                    動画URL
                  </a>
                </td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">制作期間</th>
                <td className="w-full md:w-auto block md:table-cell py-5">2日</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用言語</th>
                <td className="w-full md:w-auto block md:table-cell py-5">HTML / CSS / JavaScript</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">使用ツール</th>
                <td className="w-full md:w-auto block md:table-cell py-5">Contentful / Netlify</td>
              </tr>

              <tr>
                <th className="w-full md:w-40 block md:table-cell text-left mt-5 py-0 md:py-5">工夫点</th>
                <td className="w-full md:w-auto block md:table-cell py-5">
                  <ul className="list-decimal pl-5">
                    <li>Contentfulとの連携の部分が最新ではなかった為公式ドキュメントを参照しつつ進めることができた</li>
                    <li className="mt-2">
                      カート関連で様々な処理があったがひとつずつ理解しながら実装を進めることを意識した
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

export default ComfyHouse;
