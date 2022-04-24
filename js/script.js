var randNum = Math.floor(Math.random()*100+1);
let guesses = 9;

let input = document.getElementById("typeNumber");

input.addEventListener("keyup", function(event) {
    if(event.keyCode==13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

document.getElementById("btn").onclick = function() {

        document.getElementById("lab2").innerHTML = guesses;
        let guess = document.getElementById("typeNumber").value;
        if(guesses==0)
        {
            alert("ИЗГУБИВТЕ ПРОБАЈТЕ УШТЕ ЕДНАШ");
            location.reload();
        }
        else if(guess==randNum)
        {
            alert("ЧЕСТИТКИ ПОГОДИВТЕ...ИГРАТА ЗАВРШИ");
            location.reload();
        }
        else if(guess>randNum)
        {
            alert("ПРОБАЈ ПОМАЛ БРОЈ");
            guesses-=1;
        }
        else if(guess<randNum)
        {
            alert("ПРОБАЈ ПОГОЛЕМ БРОЈ");
            guesses-=1;
        }
       
}