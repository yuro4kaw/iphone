"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "@/constants/exports";
import { useEffect, useState } from "react";
import { useViewportSize } from '@mantine/hooks';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== 'undefined' && window.innerWidth > 720 ? smallHeroVideo : heroVideo
  );

  const { width } = useViewportSize();

  const handleVideoSrcSet = (width:number) => {
    if (width < 720) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    // Встановлюємо відео на початковому рендері
    handleVideoSrcSet(width);

    // Додаємо обробник подій для зміни розміру вікна
    window.addEventListener("resize", ()=>handleVideoSrcSet(width));

    // Прибираємо обробник подій при виході з компонента
    return () => {
      window.removeEventListener("resize", ()=>handleVideoSrcSet(width));
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height sm:nav-height-full md:nav-height bg-black relative transition-[height] duration-1000 ease-in-out delay-0">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 flex justify-center">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
