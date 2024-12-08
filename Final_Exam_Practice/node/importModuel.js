// 외장 모듈 nconf를 사용하여 환경 변수 관리
const nconf = require('nconf');

// 환경 변수 설정 및 확인
nconf.env();
console.log('OS 환경 변수:', nconf.get('OS'));
