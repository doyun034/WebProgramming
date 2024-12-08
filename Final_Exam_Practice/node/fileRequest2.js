// 비동기식 파일 읽기 - 파일 읽기가 끝난 후 콜백 함수 호출
const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err, contents) => {
    if (err) {
        console.error('파일 읽기 중 오류:', err);
        return;
    }
    console.log('파일 내용:', contents);
    doShow(contents); // 파일 내용을 이용한 함수 호출
});

var result = doAdd(10, 10); // 파일 읽기와 동시에 다른 작업 수행
console.log('결과:', result);

// 도우미 함수들
function doShow(data) {
    console.log('내용 표시:', data);
}

function doAdd(a, b) {
    return a + b;
}
