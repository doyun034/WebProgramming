// OS 모듈을 사용하여 시스템 정보 출력
const os = require('os');

console.log('호스트 이름:', os.hostname()); // 호스트 이름
console.log('메모리 정보: 사용 가능 메모리 %d / 총 메모리 %d', os.freemem(), os.totalmem()); // 메모리 정보
console.log('CPU 정보:'); 
console.dir(os.cpus()); // CPU 정보 출력
console.log('네트워크 인터페이스:'); 
console.dir(os.networkInterfaces()); // 네트워크 인터페이스 정보
