import { useState } from "react";

interface CounterProps {
  step?: number;
}

interface CounterResult {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = ({ step = 1 }: CounterProps = {}): CounterResult => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + step);
  };

  const decrement = (): void => {
    setCount(count - step);
  };

  const reset = (): void => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
