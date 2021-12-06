const username = document.querySelector('#username')
const finalScore = document.querySelector('#finalscore')
const recentScore  = document.querySelector('#mostRecentScore')
const scoreBtn = document.querySelector('#score-btn')
const highScores = JSON.parse(localStorage.getItem('highScores'))
const MaxHighScores = 5
finalScore.innerText = mostRecentScore
username.addEventListener('keyup',()=>{
    scoreBtn = !username.value
})
saveHighScore = e => {
    e.preventDefault ()

    const score = {
        score : recentScore ,
        name:username.value
    }
    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    highScores.splice(4)
    localStorage.setItem('highScores',JSON.stringify(highScores))
    window.location.assign('/')
}