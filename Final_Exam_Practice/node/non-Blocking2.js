// 비동기적 실행 - 이전 작업과 관계없이 다음 코드 실행
function longRunningTask() {
  console.log('종료'); // 작업 종료 시 출력
}

console.log('시작'); // 첫 번째 출력
setTimeout(longRunningTask, 0); // 비동기로 작업 실행 (즉시 실행 예약)
console.log('다음'); // longRunningTask 실행 전에도 출력됨
