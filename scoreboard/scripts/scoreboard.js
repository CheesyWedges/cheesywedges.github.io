

let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let hScore = 0
let aScore = 0

function add1PointH() {
    hScore += 1
    homeScore.textContent = hScore
}

function add2PointsH() {
    hScore += 2
    homeScore.textContent = hScore
}

function add3PointsH() {
    hScore += 3
    homeScore.textContent = hScore
}

function add1PointA() {
    aScore += 1
    awayScore.textContent = aScore
}

function add2PointsA() {
    aScore += 2
    awayScore.textContent = aScore
}

function add3PointsA() {
    aScore += 3
    awayScore.textContent = aScore
}

function resetHomeScore() {
    hScore = 0
    homeScore.textContent = hScore
}

function resetAwayScore() {
    aScore = 0
    awayScore.textContent = aScore
}