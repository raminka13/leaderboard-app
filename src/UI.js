import Storage from './Storage.js';

export default class UI {
  static showScores() {
    const scoresArr = Storage.getScores();

    scoresArr.forEach((score) => UI.addScoresToList(score));
  }

  static addScoresToList(score) {
    const scoreContainer = document.getElementById('scores-list');
    const scoreLi = document.createElement('li');

    scoreContainer.appendChild(scoreLi);
    scoreLi.className = 'score';

    const player = document.createElement('p');
    const scorePl = document.createElement('p');

    scoreLi.appendChild(player);
    scoreLi.appendChild(scorePl);

    player.textContent = score.name;
    scorePl.textContent = score.score;
  }

  static clearFields() {
    document.getElementById('name-input').value = '';
    document.getElementById('score-input').value = '';
  }

  static deleteList() {
    const scoreContainer = document.getElementById('scores-list');
    scoreContainer.innerText = '';
    UI.showScores();
  }
}