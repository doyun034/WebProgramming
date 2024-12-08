// console.time()과 console.timeEnd()로 실행 시간 측정
let result = 0;
console.time('duration'); // 실행 시간 측정 시작

for (let i = 1; i <= 1000; i++) {
    result += i;
}

console.timeEnd('duration'); // 실행 시간 측정 종료
console.log('1 ~ 1000 합계: %d', result); // 결과 출력
