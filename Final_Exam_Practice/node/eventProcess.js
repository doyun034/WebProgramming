// process 객체를 활용한 시스템 이벤트 처리
process.on('exit', () => {
  console.log('프로세스가 종료됩니다.');
});

setTimeout(() => {
  console.log('2초 후 시스템 종료 시도...');
  process.exit();
}, 2000);

// 사용자 정의 이벤트 처리
process.on('tick', (count) => {
  console.log('tick 이벤트 발생: %s', count);
});

setTimeout(() => {
  console.log('2초 후 tick 이벤트 전달 시도...');
  process.emit('tick', '2');
}, 2000);
