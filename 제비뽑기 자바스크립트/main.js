'use strict';
{

const btn = document.getElementById('btn'); // ボタン
const result = document.getElementById('result'); // おみくじ結果
 btn.addEventListener('click', () => {
    const randomNum = Math.random();
  
    result.style.color = "red";
    result.style.fontSize = "48px";
  
    if (randomNum < 1 / 10) {
      result.textContent = '大吉';
    } else if (randomNum < 3 / 10) {
      result.textContent = '中吉';
    } else if (randomNum < 6 / 10) {
      result.textContent = '小吉';
    } else {
      result.textContent = '凶';
      result.style.color = 'black';
      result.style.fontSize = "60px";
    }
  });
  
//   // 배열을 사용하는 방법
//   const fortunes = ['大吉', '中吉', '小吉','凶'];
  
//   btn.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * fortunes.length);
//     const rst = fortunes[randomIndex];
  
//     result.textContent = rst;
// });
}