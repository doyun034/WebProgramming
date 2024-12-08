// HTTP 모듈 가져오기
const http = require('http');

// 서버 객체 생성
const server = http.createServer();

// 포트 번호 설정
const port = 3000;

// 서버 실행 및 이벤트 처리
server.listen(port, () => {
    console.log(`웹 서버가 포트 ${port}에서 실행 중입니다.`);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', (socket) => {
    const addr = socket.address();
    console.log(`클라이언트가 연결되었습니다. IP: ${addr.address}, PORT: ${addr.port}`);
});

// 클라이언트 요청 이벤트 처리
server.on('request', (req, res) => {
    console.log('클라이언트 요청을 받았습니다.');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Client!');
});

// 서버 종료 이벤트 처리
server.on('close', () => {
    console.log('서버가 종료되었습니다.');
});

// 10초 후 서버 종료
setTimeout(() => {
    console.log('10초 후 서버 종료...');
    server.close();
}, 10000);
