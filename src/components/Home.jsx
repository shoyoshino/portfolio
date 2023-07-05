import React from 'react';
import Skills from './Skills';
import Works from './Works';
import Studying from './Studying';

const Home = () => {
  return (
    <main className="mt-32">
      <div className="container max-w-screen-md mx-auto px-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-t from-indigo-500 to-blue-500"></div>
        <h1 className="text-4xl font-bold mt-2.5">Sho Yoshino</h1>
        <div className="text-neutral-400 font-bold">Webコーダー</div>
        <p className="leading-relaxed mt-4">
          Webサイトの制作を3年ほど経験。
          <br />
          現在はJavaScript, Reactの学習に力を入れています。
          <br />
          フロントエンドエンジニアとしてできること、作ることができるものを増やしていきたいと考えています。
        </p>

        <Skills />
        <Works />
        <Studying />
      </div>
    </main>
  );
};

export default Home;
