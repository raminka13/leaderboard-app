export default class Storage {
  static getScores() {
    const scoresArr = JSON.parse(localStorage.getItem('scoresArr')) || [];
    return scoresArr;
  }

  static addScore(score) {
    const scoresArr = Storage.getScores();
    scoresArr.push(score);
    localStorage.setItem('scoresArr', JSON.stringify(scoresArr));
  }
}