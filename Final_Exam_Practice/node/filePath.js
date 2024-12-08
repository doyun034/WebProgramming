// 파일 경로를 분석하여 디렉토리명, 파일명, 확장자 추출
const filename = 'C:\\Users\\mike\\notepad.exe';

const dirname = path.dirname(filename); // 디렉토리명 추출
const basename = path.basename(filename); // 파일명 추출
const extname = path.extname(filename); // 확장자명 추출

console.log('디렉토리 이름 =', dirname);
console.log('파일 이름 =', basename);
console.log('확장자 이름 =', extname);
