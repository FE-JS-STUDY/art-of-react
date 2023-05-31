import { useCallback, useState } from "react";
import { produce } from "immer";

const [number, setNumber] = useState(0);
// prevNumbers는 현재 number값을 가리킴
const onIncrease = useCallback(
  () => setNumber((prebNumber) => prevNumber + 1),
  []
);

const update = produce((draft) => {
  draft.value = 2;
});

const originalState = {
  value: 1,
  foo: "bar",
};

const nextState = update(originalState);
console.log(nextState); // { value: 2, foo: 'bar }
