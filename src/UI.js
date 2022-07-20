export default class UI {
  static async showScores() {
    // Storage.getScores();
    // const scoresArr = JSON.parse(localStorage.getItem('scoresArr')) || [];
    const id = 'L1Z7c5x8dgBTEjM8pqtd';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const game = await fetch(url);
    const scoresResult = await game.json();
    const scoresArr = scoresResult.result;

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

    player.textContent = `${score.user}: `;
    scorePl.textContent = ` ${score.score}`;
  }

  static clearFields() {
    document.getElementById('name-input').value = '';
    document.getElementById('score-input').value = '';
  }

  static deleteList() {
    const scoreContainer = document.getElementById('scores-list');
    scoreContainer.innerText = '';
    setTimeout(UI.showScores, 1000);
  }

  static showAlert(message, className, timeOut) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const header = document.getElementById('app-title');
    header.appendChild(div);

    setTimeout(() => document.querySelector('.alert').remove(), timeOut);
  }
}