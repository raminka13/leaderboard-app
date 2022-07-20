export default class Storage {
  static async getScores() {
    const id = 'tpbH0M4HiGifjDCgz6QP';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const game = await fetch(url);
    const scoresArr = await game.json();

    localStorage.setItem('scoresArr', JSON.stringify(scoresArr));
    return scoresArr;
  }

  static addScore(score) {
    const scoresArr = Storage.getScores();
    scoresArr.push(score);
    localStorage.setItem('scoresArr', JSON.stringify(scoresArr));
  }
}