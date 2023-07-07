import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useActions } from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    // 비구조화 할당
    input: todos.input,
    todos: todos.todos,
  }));

  // useActions 사용해서 액션 생성 함수를 디스패치 함수로 변환해주기
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove], // 첫 번째 파라미터 : 액션 생성 함수로 이루어진 배열
    [], // 두 번째 파라미터 : deps 배열
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
// connect 함수일 때는 부모 컴포넌트가 리렌더링 될 때 해당 컨테이너의 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화 됨
// useSelector를 사용하여 리덕스 상태를 조회했을 때는 React.memo를 통해서 성능 최적화를 해줘야 함.
