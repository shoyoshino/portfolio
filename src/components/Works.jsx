import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import tdksevenseasPng from '../assets/tdk_seven_seas.png';
import tdkceatec2022Png from '../assets/tdk_ceatec_2022.png';
import wakamatuunyuPng from '../assets/wakamatuunyu.png';

const projects = [
  {
    image: tdksevenseasPng,
    title: '某電気機器製造会社様 テクノロジー訴求ページ制作',
    description: '某電気機器製造会社様の7つのテクノロジーをアピールする為のページ制作',
    url: '/works/tdk_seven_seas',
  },
  {
    image: tdkceatec2022Png,
    title: '某電気機器製造会社様 イベント特設サイト制作',
    description: '某電気機器製造会社様のイベント出展に際した特設サイトの制作',
    url: '/works/tdk_ceatec_2022',
  },
  {
    image: wakamatuunyuPng,
    title: '某運送会社様 コーポレートサイト制作',
    description: '某運送会社様の採用強化の為のサイト制作',
    url: '/works/wakamatuunyu',
  },
];

const Works = () => {
  const div = useRef();

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
        scrollTrigger: {
          trigger: '#works',
          start: 'top center',
        },
      }
    );
  }

  return (
    <section id="works" className="mt-20" ref={div}>
      <h2 className="text-6xl font-bold">WORKS</h2>
      <h2 className="text-1xl font-bold">やってきたこと</h2>

      <div className="mt-10">
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} />
            <div className="mt-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{project.description}</p>
              <Link
                to={project.url}
                className="inline-block text-sm font-bold border border-white py-3 mt-4 text-center w-full hover:bg-white hover:text-[#141419] duration-300"
              >
                詳しく見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
