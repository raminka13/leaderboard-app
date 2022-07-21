import UI from './UI';

export default class API {
  static sendData(name, gameScore) {
    const id = 'DdarivdkFNcymp2Fi4zG';
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

  // CREATE A NEW GAME
  static getGameId() {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Renaicement',
      }),
    })
      .then((res) => res.json())
      .then((data) => UI.showAlert(data.result, 'success', 15000));
  }
}
