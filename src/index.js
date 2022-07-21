import './styles.css';
import UI from './UI';
import API from './API';

document.addEventListener('DOMContentLoaded', () => {
  UI.showAlert('Loading Scores', 'loading', 700);
  UI.showScores();
  // API.getGameId();
});

document.querySelector('#form-section').addEventListener('submit', (e) => {
  // Prevent submit
  e.preventDefault();

  const name = document.getElementById('name-input').value;
  const points = document.getElementById('score-input').value;

  // Validation
  if (name === '' || points === '') {
    UI.showAlert('Please fill in all fields', 'danger', 1000);
  } else {
    // Start a new Score
    API.sendData(name, points);
    UI.deleteList();
    UI.showAlert('Score Added', 'success', 1500);
    // Clear fields
    UI.clearFields();
  }
});

const refresh = document.getElementById('refresh-btn');

refresh.addEventListener('click', () => {
  UI.deleteList();
  UI.showAlert('Loading Scores', 'loading', 2700);
});
