import { createContext, useState } from "react";

// 새 context 만들기, 기본 값 설정
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor }, // 상태
    actions: { setColor, setSubcolor }, // 업데이트 함수
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext; // ColorContext에 있는 consumer 꺼내기

export { ColorProvider, ColorConsumer };

export default ColorContext;
