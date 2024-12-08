// Querystring 모듈을 사용하여 요청 파라미터 처리
const qs = require('querystring'); // Querystring 모듈 가져오기

// URL의 쿼리 부분을 객체로 변환
let param = qs.parse(curURL.query);

// 쿼리 객체와 문자열 변환
console.dir(param); // 요청 파라미터 객체 출력
console.log('요청 파라미터 "query":', param.query); // 특정 파라미터 값 출력
console.log('문자열로 변환된 요청 파라미터:', qs.stringify(param)); // 객체를 문자열로 변환
