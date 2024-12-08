// HTTP 모듈 가져오기
const http = require('http');

// HTTP 서버 생성
const server = http.createServer((req, res) => {
    // 응답 헤더 설정
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // HTML 내용 작성 및 응답
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('    <title>응답 페이지</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('    <h1>Node.js 서버 응답</h1>');
    res.write('</body>');
    res.write('</html>');

    // 응답 종료
    res.end();
});

// 서버 실행
server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
