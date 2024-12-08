// HTTP와 FS 모듈 가져오기
const http = require('http');
const fs = require('fs');

// HTTP 서버 생성
const server = http.createServer((req, res) => {
    // 응답할 파일 이름 설정
    const filename = 'index.html';

    // 파일 읽기
    fs.readFile(filename, (err, data) => {
        if (err) {
            // 파일 읽기 오류 처리
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
        } else {
            // 파일 내용을 클라이언트에 응답
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
});

// 서버 실행
server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
