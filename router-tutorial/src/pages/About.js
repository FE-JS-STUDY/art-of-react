// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const About = () => {
  // const location = useLocation(); // location 객체를 반환(사용자가 보고있는 페이지 정보)
  const [searchParams, setSearchParams] = useSearchParams(); // 배열 타입의 값을 반환.
  // 첫 번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환.
  // 두 번째 원소는 쿼리파라미터를 객체 형태로 업데이트 할 수 있는 함수 반환

  const detail = searchParams.get("detail"); // get 메서드로 특정 쿼리파라미터 조회. set 메서드로 쿼리 업데이트 가능
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true }); // 쿼리파라미터 조회시 문자열로 조회됨.
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      {/* <p>쿼리스트링: {location.search}</p> */}
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
