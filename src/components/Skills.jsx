import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import htmlSvg from '../assets/html.svg';
import javascriptSvg from '../assets/javascript.svg';
import jqueryPng from '../assets/jquery.png';
import reactSvg from '../assets/react.svg';
import wordpressPng from '../assets/wordpress.png';
import photoshopPng from '../assets/photoshop.png';
import xdPng from '../assets/xd.png';
import premiereproPng from '../assets/premiere_pro.png';

const Skills = () => {
  const div = useRef();

  const skills = [
    {
      title: 'HTML/CSS',
      image: htmlSvg,
      text: '実務経験3年',
      list: ['デザインに沿ったコーディング', 'レスポンシブデザイン対応', 'アニメーションの実装'],
    },
    {
      title: 'JavaScript',
      image: javascriptSvg,
      text: '実務経験1.5年',
      list: ['CSSでは実現できない動きの補い', 'Cookieを使用したページの表示切り替え', 'ライブラリの使用(Swiper.js)'],
    },
    {
      title: 'jQuery',
      image: jqueryPng,
      text: '実務経験1.5年',
      list: ['フェードインの実装', 'ライブラリの使用(GSAP/Modaal)'],
    },
    {
      title: 'React',
      image: reactSvg,
      text: '実務経験2か月',
      list: ['UdemyのReact教材を受講', '静的ページのコーディング'],
    },
    {
      title: 'WordPress',
      image: wordpressPng,
      text: '実務経験は1サイトのみ',
      list: [
        '自作テーマ導入(テンプレート階層の理解)',
        'カスタム投稿タイプの追加(functions.phpの編集)',
        'カスタムフィールドの使用(デフォルト, プラグイン)',
        'Contact Form 7の実装、デザイン変更',
      ],
    },
    {
      title: 'Photoshop',
      image: photoshopPng,
      text: '実務経験2年',
      list: ['デザインカンプの確認', '簡単な画像の修正', '画像の書き出し'],
    },
    {
      title: 'XD',
      image: xdPng,
      text: '実務経験2年',
      list: ['デザインカンプの確認', '画像の書き出し'],
    },
    {
      title: 'Premiere Pro',
      image: premiereproPng,
      text: '実務経験2年',
      list: ['動画サイズの変更', 'カット', 'BGM入れ', 'テロップ追加', '動画の書き出し'],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setAnimation();
  }, []);

  function setAnimation() {
    gsap.fromTo(
      div.current,
      0.5,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        // scrollTrigger: {
        //   trigger: '#skills',
        //   start: 'top center',
        // },
        // stagger: {
        //   each: 0.2,
        // },
      }
    );
  }

  return (
    <section id="skills" className="mt-20" ref={div}>
      <h2 className="text-6xl font-bold">SKILLS</h2>
      <h2 className="text-1xl font-bold">できること</h2>

      {skills.map((skill, index) => (
        <div className="w-full mt-10" key={index}>
          <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800">
              <img src={skill.image} alt={skill.title} className="w-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg font-bold mb-3">{skill.title}</h2>
              <p>{skill.text}</p>
              <ul className="list-disc mt-4 pl-5">
                {skill.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
