// HTTP 서버 생성 - 브라우저에서 요청 시 "Hello World!" 응답
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 응답 헤더 설정
    res.end('Hello World!'); // 응답 본문
});

server.listen(8080, () => {
    console.log('서버가 http://localhost:8080 에서 실행 중입니다.');
});
