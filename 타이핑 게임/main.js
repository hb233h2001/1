'use strict';

{
  const words = ['apple', 'sky', 'blue', 'middle', 'set'];
  let currentWordIndex = getRandomIndex(words.length);
  let loc = 0;
  let score = 0;
  let miss = 0;
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');
  const resultContainer = document.getElementById('result');
  const resultScoreLabel = document.getElementById('result-score');
  const resultMissLabel = document.getElementById('result-miss');
  let currentWord = words[currentWordIndex];
  target.textContent = currentWord;

  let timeLimit = 60; // 기본 시간 제한 (60초)
  let timerId = null; // 타이머 ID
  let remainingTime = timeLimit; // 남은 시간

  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + currentWord.substring(loc);
  }

  function startTimer() {
    timerId = setInterval(() => {
      remainingTime--;
      timerLabel.textContent = remainingTime;

      if (remainingTime === 0) {
        // 시간 종료
        clearInterval(timerId);
        target.textContent = 'Time Up';
        window.removeEventListener('keydown', handleKeydown);
        showResult();
      }
    }, 1000);
  }

  function showResult() {
    resultScoreLabel.textContent = score;
    resultMissLabel.textContent = miss;
    resultContainer.classList.remove('hidden');
  }

  function handleKeydown(e) {
    if (e.key === currentWord[loc]) {
      loc++;
      if (loc === currentWord.length) {
        // 현재 단어를 모두 입력했을 때
        score++;
        scoreLabel.textContent = score;

        // 다음 랜덤 단어로 이동
        currentWordIndex = getRandomIndex(words.length);
        currentWord = words[currentWordIndex];
        loc = 0;
      }

      updateTarget();
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  }

  window.addEventListener('keydown', handleKeydown);

  startTimer();

  // 함수: 주어진 범위 내에서 랜덤한 인덱스를 반환
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
}
