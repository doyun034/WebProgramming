// 동기적 실행 - 이전 작업이 끝날 때까지 기다림
function longRunningTask() {
  console.log('종료'); // 작업 종료 시 출력
}

console.log('시작'); // 첫 번째 출력
longRunningTask(); // 블로킹 함수 호출
console.log('다음'); // longRunningTask가 끝난 뒤 실행
