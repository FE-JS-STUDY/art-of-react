import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH }); // type 값
const increase = (difference) => ({ type: INCREASE, difference }); // type 값, 상태를 업데이트할 때 참고하고 싶은 값
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수(변화를 일으키는 함수)
function reducer(state = initialState, action) {
  // state가 undefined일 때(리듀서 함수 맨 처음 호출시 undefined임)는 initialState를 기본값으로 사용
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어(현재 애플리케이션 상태와 리듀서 가짐)
const store = createStore(reducer);

// render 함수(스토어 내장 함수)
// 상태가 업데이트 될 때마다 호출, 이미 html을 사용해 만들어진 UI 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState(); // 현재 상태를 불러옵니다.

  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  // 카운터 처리
  counter.innerText = state.counter;
};

render();
// 구독하기 : 액션이 디스패치되어 상태 업데이트 될 때마다 render함수 호출
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch()); // dispatch: 액션 발생시키는 것, 실행되면 리듀서 함수를 실행시켜서 새로운 상태 만듦
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
