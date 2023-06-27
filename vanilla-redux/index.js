const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#id");
const btnDecrease = document.querySelector("#decrease");

// 액션
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH }); // type 값
const increase = (difference) => ({ type: INCREASE, difference }); // type 값, 상태를 업데이트할 때 참고하고 싶은 값
const decrease = () => ({ type: DECREASE });
