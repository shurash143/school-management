
  document.addEventListener('DOMContentLoaded', () => {
    // Example assignment data
    const assignments = [
      { title: 'Math Homework 1', description: 'Algebra practice due Friday' },
      { title: 'Science Project', description: 'Build a model of the solar system' }
    ];

    const scores = [
      { title: 'Math Homework 1', score: '85%' },
      { title: 'Science Quiz', score: '92%' }
    ];

    // Populate assignments
    const assignmentList = document.getElementById('assignment-list');
    assignments.forEach(assignment => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${assignment.title}</strong>: ${assignment.description}`;
      assignmentList.appendChild(li);
    });

    // Populate scores
    const scoreTable = document.querySelector('#score-table tbody');
    scores.forEach(score => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${score.title}</td><td>${score.score}</td>`;
      scoreTable.appendChild(row);
    });
  });
