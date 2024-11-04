// multi.js
onmessage = function (e) {
  // 시작 숫자와 끝 숫자를 객체로부터 가져옴
  let from = parseInt(e.data.from);
  let to = parseInt(e.data.to);
  let multiple = 0;

  multiple = from * to;
  // 계산된 합을 메인 스크립트로 전송
  postMessage(multiple);
};
