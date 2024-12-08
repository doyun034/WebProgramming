// 파일 쓰기 - 비동기식 I/O 방식
const fs = require('fs');

fs.writeFile('../output.txt', 'Hello, world!\n', (err) => {
    if (err) {
        console.error('에러:', err); // 에러 처리
    } else {
        console.log('파일이 성공적으로 작성되었습니다.'); // 성공 메시지
    }
});
