// 동기식 파일 읽기 - 파일을 읽을 때 프로그램이 대기
const fs = require('fs');

try {
    var contents = fs.readFileSync('a.txt', 'utf8'); // 파일 읽기
    console.log('파일 내용:', contents);
    var result = doAdd(10, 10); // 이후 작업 수행
    console.log('결과:', result);
} catch (err) {
    console.error('파일 읽기 중 오류:', err);
}
