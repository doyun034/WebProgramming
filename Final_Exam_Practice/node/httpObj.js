// HTTP 요청을 외부 서버로 보내고 응답 데이터를 처리
const http = require('http');

const options = {
    hostname: 'www.example.com', // 요청할 서버
    port: 80, // 포트
    path: '/', // 경로
    method: 'GET' // HTTP 메서드
};

// 요청 보내기
const req = http.request(options, (res) => {
    console.log(`상태 코드: ${res.statusCode}`); // 응답 상태 코드 출력

    // 데이터 이벤트 수신
    res.on('data', (chunk) => {
        console.log(`응답 본문: ${chunk}`); // 수신된 데이터 출력
    });

    res.on('end', () => {
        console.log('응답 종료');
    });
});

// 요청 오류 처리
req.on('error', (error) => {
    console.error(`요청 오류: ${error.message}`);
});

// 요청 종료
req.end();
