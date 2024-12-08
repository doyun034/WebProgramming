// process.argv를 사용하여 명령줄 인수 출력
console.log('명령줄 인수 개수:', process.argv.length); // 인수 개수
console.dir(process.argv); // 인수 배열 출력

// 각 인수 순회하며 출력
process.argv.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});
