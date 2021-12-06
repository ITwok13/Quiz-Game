const highScoreList = document.querySelector ('.high-score')
consthighScores = JSON.parse(localStorage.getItem('high-score')) || []
highScoreList.innerHTML =
highScores.map(score =>{
    return '<li class="high-score">${score.name} - ${score.score}</li>'}).join('')
