var randNum = Math.floor(Math.random()*100+1);
let guesses = 9;

document.getElementById("btn").onclick = function() {

        document.getElementById("lab2").innerHTML = guesses;
        let guess = document.getElementById("typeNumber").value;
        if(guesses==1)
        {
            alert("ИЗГУБИВТЕ ПРОБАЈТЕ УШТЕ ЕДНАШ...РЕФРЕШНЕТЕ ЈА СТРАНАТА");
            
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