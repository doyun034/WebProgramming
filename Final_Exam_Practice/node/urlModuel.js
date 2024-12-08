// URL 모듈을 사용하여 주소 문자열 처리
const url = require('url'); // URL 모듈 가져오기

// 주소 문자열을 URL 객체로 변환
let curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&s=m&type=web&query=Node.js');

// URL 객체를 다시 문자열로 변환
let curStr = url.format(curURL);

// 결과 출력
console.log('주소 문자열:', curStr); // 주소 문자열 출력
console.dir(curURL); // URL 객체의 속성 출력
