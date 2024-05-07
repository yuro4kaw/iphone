import * as THREE from "three";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type AnimationOptions = {
  transform: string;
  duration: number;
};

type RefType = React.MutableRefObject<THREE.Group>;


export const animateWithGsap = (target:any, animationProps:any, scrollProps?:any) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: RefType,
  RotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: AnimationOptions
) => {
  timeline.to(rotationRef.current.rotation, {
    y: RotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
