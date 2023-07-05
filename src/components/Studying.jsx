import React from 'react';
import { Link } from 'react-router-dom';
import valorantSeasonCheckerPng from '../assets/valorant_season_checker.png';
import comfyhousePng from '../assets/comfyhouse.png';
import wordpressCorporatePng from '../assets/wordpress_corporate.png';

const Studying = () => {
  const projects = [
    {
      image: valorantSeasonCheckerPng,
      title: 'VALORANT Season Checker',
      description: 'Reactの学習のためAPIを使用したSPAを作成',
      link: 'https://shoyoshino.github.io/portfolio/works/valorant_season_checker',
    },
    {
      image: comfyhousePng,
      title: 'ヘッドレスCMSを使用した模擬ECサイト制作',
      description: 'データベースなどの情報を使用する方法を学習するために制作',
      link: 'https://shoyoshino.github.io/portfolio/works/comfyhouse',
    },
    {
      image: wordpressCorporatePng,
      title: 'WordPress コーポレートサイト制作',
      description: 'WordPressの学習の為制作したコーポレートサイト',
      link: 'https://shoyoshino.github.io/portfolio/works/wordpress_corporate',
    },
  ];

  return (
    <section id="studying" className="mt-20">
      <h2 className="text-6xl font-bold">STUDYING</h2>
      <h2 className="text-1xl font-bold">勉強していること</h2>

      {projects.map((item, index) => (
        <div className="mt-10" key={index}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{item.description}</p>
            <Link
              to={item.link}
              className="inline-block text-sm font-bold border border-white py-3 mt-4 text-center w-full hover:bg-white hover:text-[#141419] duration-300"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Studying;
