import React, { MutableRefObject, useEffect } from "react";
import gsap from "gsap";

type UseOpacityAnimationType = {
  element: MutableRefObject<null>;
  delay: number;
  duration: number;
};

export default function useOpacityAnimation({
  element,
  delay,
  duration,
}: UseOpacityAnimationType) {
  useEffect(() => {
    const opacityAnimation = gsap.fromTo(
      element.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration, delay }
    );
    return () => {
      opacityAnimation.kill();
    };
  }, []);
}
