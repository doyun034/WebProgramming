// EventEmitter를 활용한 기본 이벤트 처리 및 리스너 관리
const EventEmitter = require('events');
const emitter = new EventEmitter();

// 기본 이벤트 처리
emitter.on('eventName', () => {
    console.log('eventName 이벤트가 발생했습니다!');
});
emitter.emit('eventName');

// 이벤트 리스너 관리
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.once('welcome', (name) => {
    console.log(`Welcome, ${name}! 이 메시지는 한 번만 표시됩니다.`);
});

emitter.emit('안녕', '홍길동');
emitter.emit('어서와', '영희야');
emitter.emit('어서와', '철수야');
