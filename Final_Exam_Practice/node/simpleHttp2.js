// 기본적인 HTTP 서버 생성 및 실행
const http = require('http'); // HTTP 모듈 가져오기

const hostname = '127.0.0.1'; // 서버 호스트 이름
const port = 3000; // 서버 포트 번호

// 서버 생성
const server = http.createServer((req, res) => {
    res.statusCode = 200; // 상태 코드 설정
    res.setHeader('Content-Type', 'text/plain'); // 응답 헤더 설정
    res.end('Hello World'); // 응답 본문
});

// 서버 실행
server.listen(port, hostname, () => {
    console.log(`시스템 실행 중 http://${hostname}:${port}/`); // 서버 실행 확인
});
