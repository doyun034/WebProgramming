// Path 모듈을 사용하여 경로 조합
const path = require('path');

let directories = ['users', 'mike', 'docs'];
let docsDirectory = directories.join(path.sep); // 경로 구분자를 사용해 조합
console.log('문서 디렉토리 경로:', docsDirectory);

let curPath = path.join('/Users/mike', 'nodepad.exe'); // 경로 조합
console.log('파일 경로:', curPath);
