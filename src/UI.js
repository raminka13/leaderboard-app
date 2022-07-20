export default class UI {
  static async showScores() {
    const id = 'L1Z7c5x8dgBTEjM8pqtd';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const game = await fetch(url);
    const scoresResult = await game.json();
    const scoresUnsorted = scoresResult.result;
    const scoresArr = scoresUnsorted.sort((a, b) => b.score - a.score);
    for (let i = 0; i < scoresArr.length; i += 1) {
      scoresArr[i].id = i + 1;
    }

    scoresArr.forEach((score) => UI.addScoresToList(score));
  }

  static addScoresToList(score) {
    const scoreContainer = document.getElementById('scores-list');
    const scoreLi = document.createElement('li');
    const indexBox = document.createElement('h4');

    scoreLi.appendChild(indexBox);
    indexBox.textContent = score.id;
    indexBox.className = 'index-show';

    scoreContainer.appendChild(scoreLi);
    scoreLi.className = 'score';

    const player = document.createElement('p');
    const scorePl = document.createElement('p');

    scoreLi.appendChild(player);
    scoreLi.appendChild(scorePl);

    player.textContent = `${score.user}:`;
    scorePl.textContent = `\xa0\xa0${score.score}💎`;
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