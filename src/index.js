import './styles.css';
import UI from './UI';
import API from './API';

document.addEventListener('DOMContentLoaded', UI.showScores);

document.querySelector('#form-section').addEventListener('submit', (e) => {
  // Prevent submit
  e.preventDefault();

  const name = document.getElementById('name-input').value;
  const points = document.getElementById('score-input').value;

  // Validation
  if (name === '' || points === '') {
    UI.showAlert('Please fill in all fields', 'danger', 1500);
  } else {
    // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: 'Duel of Fates',
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.result));
    // Start a new Score
    API.sendData(name, points);
    UI.showAlert('Score Added', 'success', 1500);
    // Clear fields
    UI.clearFields();
    setTimeout(UI.deleteList, 2000);
  }
});

const refresh = document.getElementById('refresh-btn');

refresh.addEventListener('click', () => {
  UI.showAlert('Loading Scores', 'loading', 2700);
  setTimeout(UI.deleteList, 1000);
});
