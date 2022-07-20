export default class API {
  static sendData(name, gameScore) {
    const id = 'L1Z7c5x8dgBTEjM8pqtd';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: name,
        score: gameScore,
      }),
    });
  }
}
