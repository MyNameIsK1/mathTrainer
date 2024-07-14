var minInterval;
var maxInterval;
var firstNumber;
var secondNumber;
var result;
var interval;
var streak = 0;
var solvedProblems = 0;
var timeSpent;
var totalTime = 0;
var startTime;
var currentTime;
var meanTime = 0;
var operationsText;
var maxStreak = 0;
var mistakes = 0;
var addition = false;
var subtraction = false;
var multiplication = false;

function getOperations(operation) {
    if (operation =="addition") {
        if (addition == false) {
            addition = true;
            document.getElementById(operation+"Button").style.backgroundColor = "lightgreen";
            document.getElementById(operation+"Button").style.borderColor = "lightgreen"; 
            document.getElementById(operation+"Button").style.color = "white"; 
            
        } else {
            addition = false;
            document.getElementById(operation+"Button").style.backgroundColor = "rgb(59, 59, 59)";
            document.getElementById(operation+"Button").style.borderColor = "rgb(255, 145, 255)"; 
            document.getElementById(operation+"Button").style.color = "rgb(255, 145, 255)";
        }
    }
    if (operation == "subtraction") {
        if (subtraction == false) {
            subtraction = true;
            document.getElementById(operation+"Button").style.backgroundColor = "lightgreen";
            document.getElementById(operation+"Button").style.borderColor = "lightgreen"; 
            document.getElementById(operation+"Button").style.color = "white"; 
        } else {
            subtraction = false;
            document.getElementById(operation+"Button").style.backgroundColor = "rgb(59, 59, 59)";
            document.getElementById(operation+"Button").style.borderColor = "rgb(255, 145, 255)"; 
            document.getElementById(operation+"Button").style.color = "rgb(255, 145, 255)";
        }
    }
    if (operation == "multiplication") {
        if (multiplication == false) {
            multiplication = true;
            document.getElementById(operation+"Button").style.backgroundColor = "lightgreen";
            document.getElementById(operation+"Button").style.borderColor = "lightgreen"; 
            document.getElementById(operation+"Button").style.color = "white"; 
        } else {
            multiplication = false;
            document.getElementById(operation+"Button").style.backgroundColor = "rgb(59, 59, 59)";
            document.getElementById(operation+"Button").style.borderColor = "rgb(255, 145, 255)"; 
            document.getElementById(operation+"Button").style.color = "rgb(255, 145, 255)";
        }
    }
}
function correctAnswer() {
    if (parseInt(document.getElementById("insertAnswer").value) == result) {
        return true;
    } else {
        return false;
    }
}
function genNumbers(minInt, maxInt) {
    let mult;
    mult = Math.random();
    if (mult < 0.99) {
        firstNumber = parseInt(minInt + mult*(maxInt-minInt));
    } else {
        firstNumber = parseInt(minInt + maxInt-minIn);
    }
    mult = Math.random();
    if (mult < 0.99) {
        secondNumber = parseInt(minInt + mult*(maxInt-minInt));
    } else {
        secondNumber = parseInt(minInt + maxInt-minInt);
    }
    if (addition == true && subtraction == false && multiplication == false) {
        document.getElementById("challenge").innerText = firstNumber.toString()+" + "+secondNumber.toString(); 
        result = firstNumber + secondNumber;
    } else if (addition == false && subtraction == true && multiplication == false) {
        document.getElementById("challenge").innerText = firstNumber.toString()+" - "+secondNumber.toString(); 
        result = firstNumber - secondNumber;
    } else if (addition == false && subtraction == false && multiplication == true) {
        document.getElementById("challenge").innerText = firstNumber.toString()+" x "+secondNumber.toString(); 
        result = firstNumber * secondNumber;
    } else if (addition == true && subtraction == true && multiplication == false) {
        let operationSortition = Math.random();
        if (operationSortition<= 0.5) {
            document.getElementById("challenge").innerText = firstNumber.toString()+" + "+secondNumber.toString(); 
            result = firstNumber + secondNumber;
        } else {
            document.getElementById("challenge").innerText = firstNumber.toString()+" - "+secondNumber.toString();
            result = firstNumber - secondNumber;
        }
    } else if (addition == true && subtraction == false && multiplication == true) {
        let operationSortition = Math.random();
        if (operationSortition<= 0.5) {
            document.getElementById("challenge").innerText = firstNumber.toString()+" + "+secondNumber.toString(); 
            result = firstNumber + secondNumber;
        } else {
            document.getElementById("challenge").innerText = firstNumber.toString()+" x "+secondNumber.toString();
            result = firstNumber * secondNumber;
        }
    } else if (addition == false && subtraction == true && multiplication == true) {
        let operationSortition = Math.random();
        if (operationSortition<= 0.5) {
            document.getElementById("challenge").innerText = firstNumber.toString()+" - "+secondNumber.toString(); 
            result = firstNumber - secondNumber;
        } else {
            document.getElementById("challenge").innerText = firstNumber.toString()+" x "+secondNumber.toString();
            result = firstNumber * secondNumber;
        }
    } else if (addition == true && subtraction == true && multiplication == true) {
        let operationSortition = Math.random();
        if (operationSortition<= 0.33) {
            document.getElementById("challenge").innerText = firstNumber.toString()+" + "+secondNumber.toString(); 
            result = firstNumber + secondNumber;
        } else if (operationSortition > 0.33 && operationSortition <= 0.67) {
            document.getElementById("challenge").innerText = firstNumber.toString()+" - "+secondNumber.toString();
            result = firstNumber - secondNumber;
        } else {
            document.getElementById("challenge").innerText = firstNumber.toString()+" x "+secondNumber.toString();
            result = firstNumber * secondNumber;
        }
    }
}
function startTraining() {
    if (addition == false && subtraction == false && multiplication == false) {
        alert("Por favor, selecione pelo menos uma operação para o treinamento.");
    } else {
        minInterval = parseInt(document.getElementById("minIntervalInput").value);
        maxInterval = parseInt(document.getElementById("maxIntervalInput").value);
        if (minInterval > maxInterval || minInterval == maxInterval || maxInterval <= 0 || minInterval <= 0 || document.getElementById("minIntervalInput").value == '' || document.getElementById("maxIntervalInput").value == '') {
            alert("Por favor, insira um intervalo válido.");
        } else {
            if (maxInterval > 1000000 || minInterval > 1000000) {
                alert("Quer dizer que temos um novo Ramanujan agora?");
            } if (addition == true && subtraction == false && multiplication == false) {
                operationsText = "adição";
            } else if (addition == false && subtraction == true && multiplication == false) {
                operationsText = "subtração";
            } else if (addition == false && subtraction == false && multiplication == true) {
                operationsText = "multiplicação";
            } else if (addition == false && subtraction == true && multiplication == true) {
                operationsText = "subtração e multiplicação";
            } else if (addition == true && subtraction == false && multiplication == true) {
                operationsText = "adição e multiplicação";
            } else if (addition == true && subtraction == true && multiplication == false) {
                operationsText = "adição e subtração";
            } else if (addition == true && subtraction == true && multiplication == true) {
                operationsText = "adição, subtração e multiplicação";
            }
            document.getElementById("settingsMenu").style.display = "none";
            startCounter();
            document.getElementById("streakDisplay").innerText = "Streak: " + streak.toString();
            document.getElementById("tempDisplay").innerText = "Tempo: ";
            document.getElementById("meanDisplay").innerText = "Média: " + meanTime;
            document.querySelector("main").style.display = "block";
            genNumbers(minInterval, maxInterval);
        }  
    } 
}
function cleanAnswer() {
    document.getElementById("insertAnswer").value = "";
}
function calculateTime() {
    timeSpent = parseFloat((Date.now()-startTime)/1000);
    document.getElementById('tempDisplay').innerText = "tempo: " + timeSpent.toFixed(2) + "s";
}
function calculateMean() {
    meanTime = totalTime/solvedProblems + timeSpent/solvedProblems;
    totalTime += timeSpent;
    document.getElementById("meanDisplay").innerText = "Média: " + meanTime.toFixed(2).toString() + "s";
}

function startCounter() {
    startTime = Date.now();
    interval = setInterval(calculateTime, 70);
}
document.getElementById("insertAnswer").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        goNext();
    }
});
function goNext() {
    if (correctAnswer() == true) {
        streak++;
        solvedProblems++;
        calculateMean();
        if (streak > maxStreak) {
            maxStreak = streak;
        }
        startTime = Date.now();
        cleanAnswer();
        genNumbers(minInterval, maxInterval);
        document.getElementById("streakDisplay").innerText = "streak: " + streak.toString();
        document.getElementById("mistakeWarning").style.display = "none";
    } else {
        cleanAnswer();
        document.getElementById("mistakeWarning").style.display = "block";
        mistakes++;
        streak = 0;
        document.getElementById("streakDisplay").innerText = "streak: " + streak.toString();
    }
}
function restartGame() {
    streak = 0;
    maxStreak = 0;
    mistakes = 0;
    solvedProblems = 0;
    meanTime = 0;
    clearInterval(interval);
    startCounter();
    document.getElementById("streakDisplay").innerText = "streak: " + streak.toString();
    genNumbers(minInterval, maxInterval);
}
function exitGame() {
    document.querySelector("main").style.display = "none";
    document.getElementById('operationsReport').innerText = solvedProblems.toString() + " contas aritméticas de " + operationsText + ".";
    document.getElementById('streakReport').innerText = maxStreak.toString() + " acertos consecutivos.";
    document.getElementById('timeReport').innerText = meanTime.toFixed(2).toString() + " segundos.";
    if (mistakes == 1) {
        document.getElementById('mistakesReport').innerText = mistakes.toString() + " vez."
    } else {
        document.getElementById('mistakesReport').innerText = mistakes.toString() + " vezes."
    }
    document.getElementById('intervalReport').innerText = minInterval.toString() + " e " + maxInterval.toString() + ".";
    document.getElementById('resultsFromGame').style.display = "block";
}
function returnToMenu() {
    document.querySelector("main").style.display = "none";
    document.getElementById('resultsFromGame').style.display = "none";
    document.getElementById('settingsMenu').style.display = "block";
    streak = 0;
    maxStreak = 0;
    mistakes = 0;
    solvedProblems = 0;
    meanTime = 0;
    clearInterval(interval);
    addition = false;
    document.getElementById('additionButton').style.backgroundColor = "rgb(59, 59, 59)";
    document.getElementById('additionButton').style.borderColor = "rgb(255, 145, 255)"; 
    document.getElementById('additionButton').style.color = "rgb(255, 145, 255)";
    subtraction = false;
    document.getElementById('subtractionButton').style.backgroundColor = "rgb(59, 59, 59)";
    document.getElementById('subtractionButton').style.borderColor = "rgb(255, 145, 255)"; 
    document.getElementById('subtractionButton').style.color = "rgb(255, 145, 255)";
    multiplication = false;
    document.getElementById('multiplicationButton').style.backgroundColor = "rgb(59, 59, 59)";
    document.getElementById('multiplicationButton').style.borderColor = "rgb(255, 145, 255)"; 
    document.getElementById('multiplicationButton').style.color = "rgb(255, 145, 255)";
    document.getElementById('minIntervalInput').value = "";
    document.getElementById('maxIntervalInput').value = "";
}
