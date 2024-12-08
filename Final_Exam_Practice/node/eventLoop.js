// 이벤트 루프와 비동기 작업 처리 예제
function run() {
  console.log('3초 후 시작'); // 3초 후 실행
}

console.log('시작'); // 첫 번째 출력
setTimeout(run, 3000); // 3초 후에 run 함수 호출
console.log('종료'); // 두 번째 출력
