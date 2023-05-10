'use strict';
{

const btn = document.getElementById('btn'); // ボタン
const result = document.getElementById('result'); // おみくじ結果
 btn.addEventListener('click', () => {
    const randomNum = Math.random();
    let rst;
  
    if (randomNum < 1 / 3) {
      rst = '大吉';
    } else if (randomNum < 2 / 3) {
      rst = '中吉';
    } else {
      rst = '凶';
    }
  
    result.textContent = rst;
  });
  
//   // 배열을 사용하는 방법
//   const fortunes = ['大吉', '中吉', '凶'];
  
//   btn.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * fortunes.length);
//     const rst = fortunes[randomIndex];
  
//     result.textContent = rst;
// });
}