"use client";
import { useScramble } from "use-scramble";

const ScrambledText = ({
  text,
  className = "",
  speed = 0.5,
  tick = 1,
  step = 1,
  scramble = 7,
  seed = 3,
}: {
  text: string;
  className?: string;
  speed?: number;
  tick?: number;
  step?: number;
  scramble?: number;
  seed?: number;
}) => {
  // hook returns a ref
  const { ref } = useScramble({
    text,
    speed,
    tick,
    step,
    scramble,
    seed,
    overdrive: true,
  });

  // apply the ref to a node
  return <span ref={ref} className={className} />;
};

export default ScrambledText;
