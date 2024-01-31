import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
// import styles from './styles.module.css'
import styles from "./styles.module.scss";
interface LottieAnimationProps {
  animationData: any;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
      return () => {
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className={styles.AnimationContainer}>
      <div className={styles.AnimationImage} ref={animationContainer}></div>
    </div>
  );
};

export default LottieAnimation;
