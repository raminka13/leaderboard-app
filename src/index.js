import './styles.css';
import UI from './UI.js';
import Storage from './Storage.js';
import Score from './Score.js';

document.addEventListener('DOMContentLoaded', UI.showScores);

document.querySelector('#form-section').addEventListener('submit', (e) => {
  // Prevent submit
  e.preventDefault();

  const name = document.getElementById('name-input').value;
  const points = document.getElementById('score-input').value;

  // Validation
  if (name === '' || points === '') {
    // UI.showAlert('Please fill in all fields', 'danger', 1500);
  } else {
    // Start a new Score
    const score = new Score(name, points);

    // Add Score to UI
    UI.addScoresToList(score);
    // UI.showAlert('Task Added', 'success', 1500);

    // Add Score to LocalStorage
    Storage.addScore(score);

    // Clear fields
    UI.clearFields();
  }
});

const refresh = document.getElementById('refresh-btn');

refresh.addEventListener('click', () => {
  UI.deleteList();
});