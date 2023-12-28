import React, { type ReactElement } from "react";
import useCounter from "../../hooks/useCounter";
import Button from "../Button/Button";

const Counter = (): ReactElement => {
  const { count, increment, decrement, reset } = useCounter({
    step: 2,
  });

  return (
    <div>
      <div className="rounded-md border border-slate-600 m-5 p-10">
        <div className="flex flex-col items-center">
          <p>Count: {count}</p>
          <div className="flex gap-5 mt-5">
            <Button
              onClick={increment}
              className="py-2 px-4 bg-green-400 text-white rounded-md font-semibold"
            >
              Increment
            </Button>
            <Button
              onClick={decrement}
              className="py-2 px-4 bg-red-400 text-white rounded-md font-semibold"
            >
              Decrement
            </Button>
            <Button
              onClick={reset}
              className="py-2 px-4 text-blue-500 border-blue-500 border-2 rounded-md font-semibold"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
