var words = ["loaf", "esophagus", "handle", "crumple", "infuse", "supercilious", "sere", "crass"];
var shownword = [];
var gsdltrs = [];
var guesses = 7;
var wins = 0;
function startGame(){
    word = words[Math.floor(Math.random() * words.length)];

    gsdltrs = [];
    guesses = 7;
    document.getElementById("pool").innerHTML = gsdltrs;
    document.getElementById("guessesremaining").innerHTML = guesses;
    document.getElementById("correct?").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("lose").innerHTML = "";

    shownword = [];
    for(var i = 0; i < word.length; i++){
        shownword.push("_ ");
    }
    printWord();
}

function guessLetter(){
    if(guesses < 2){
        document.getElementById("lose").innerHTML = "You lose! The word was " + word + ".";
        printWord();
    }

    var guessedletter = document.getElementById("guess").value;
    guessedletter = guessedletter.toLowerCase();
    if(guessedletter.length !== 1){
        document.getElementById("correct?").innerHTML = "Enter one letter.";
    }else {
        gsdltrs.push(guessedletter);
        document.getElementById("pool").innerHTML = gsdltrs;
        if (word.indexOf(guessedletter) == -1) {
            document.getElementById("correct?").innerHTML = "Wrong";
            guesses = guesses - 1;
        }
        if (word.indexOf(guessedletter) !== -1) {
            var x = word.indexOf(guessedletter);
            var y = word.lastIndexOf(guessedletter);

            shownword[x] = guessedletter;
            shownword[y] = guessedletter;
            document.getElementById("correct?").innerHTML = "Correct";
        }
        printWord();
        document.getElementById("guessesremaining").innerHTML = guesses;
    }

}
function printWord(){
    shownword.toString();
    shownwordtwo = "";
    for(var i = 0; i < shownword.length; i++){
        if(shownword[i] !== ","){
            shownwordtwo = shownwordtwo + shownword[i];
        }
    }
    document.getElementById("showword").innerHTML = shownwordtwo;
    if(shownwordtwo.indexOf("_") == -1){
        document.getElementById("winner").innerHTML = "You win!";

    }
}