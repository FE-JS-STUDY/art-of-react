// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// // 1. connect 함수 내부에 익명함수로 작성하는 방법
// export default connect(
//   (state) => ({ number: state.counter.number }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => {
//       return dispatch(decrease());
//     },
//   }),
// )(CounterContainer);

// // 액션 생성 함수를 호출하고 dispatch로 감싸는 작업이 번거로울 수 있음
// // 2. bindActionCreators 함수 사용
// export default connect(
//   (state) => ({ number: state.counter.number }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

// 더 편한 방법
// 3. mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣기
// 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해 줌
export default connect((state) => ({ number: state.counter.number }), {
  increase,
  decrease,
})(CounterContainer);
