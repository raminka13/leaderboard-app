export default class Storage {
  static async getScores() {
    const id = 'L1Z7c5x8dgBTEjM8pqtd';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const game = await fetch(url);
    const scoresResult = await game.json();
    const scoresArr = scoresResult.result;

    // localStorage.setItem('scoresArr', JSON.stringify(scoresArr));
    return scoresArr;
  }

  static addScore(score) {
    const scoresArr = Storage.getScores();
    scoresArr.push(score);
    localStorage.setItem('scoresArr', JSON.stringify(scoresArr));
  }
}