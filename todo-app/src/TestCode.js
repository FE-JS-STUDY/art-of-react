// 불변성 예시 코드
const array = [1, 2, 3, 4, 5];

const nextArrayBad = array; // 배열을 복사하는 것이 아니라 똑같은 배열을 가리킵니다.
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // 완전히 같은 배열이기 때문에 true

const nextArrayGood = [...array]; // 배열 내부의 값을 모두 복사합니다.
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); // 다른 배열이기 때문에 false

const object = {
  foo: 'bar',
  value: 1,
};

const nextObjectBad = object; // 객체가 복사되지 않고, 똑같은 객체 가리킴
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad); // 같은 객체이기 때문에 true

const nextObjectGood = {
  ...object, // 기존에 있던 내용을 모두 복사해서 넣음
  value: object.value + 1, // 새로운 값을 덮어 쓰기
};
console.log(object === nextObjectGood); // 다른 객체이기 때문에 false

// 전개 연산자(...문법)를 사용하여 객체나 배열 내부의 값 복사하면 얕은 복사를 하게 됨.
const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // 아직까지는 똑같은 객체를 가리키기 때문에 true

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};
console.log(todos[0] === nextTodos[0]); // 새로운 객체를 할당해 주었기에 false

// 객체 안에 있는 객체라면 불변성을 지키면서 새 값을 할당해야 함
const complexObject = {
  foo: 'bar',
  value: 1,
  objectInside: {
    name: object,
  },
};

const nextComplexObject = {
  ...complexObject,
  objectInside: {
    ...complexObject.objectInside,
    enabled: false,
  },
};
console.log(complexObject === nextComplexObject); // false
console.log(complexObject.objectInside === nextComplexObject.objectInside); // false
