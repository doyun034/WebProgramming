// 이벤트 기반 호출 스택 예제 - 함수 호출 순서를 확인
function first() {
  second(); // second 함수 호출
  console.log('first() 호출 완료');
}

function second() {
  third(); // third 함수 호출
  console.log('second() 호출 완료');
}

function third() {
  console.log('third() 호출 완료');
}

// 첫 번째 함수 실행
first();
