console.log("I'm a secret log :D")

function clickClick(){

    alert("you have clicked a button");
}


//we will try variables here 

let yuuri = "yuuri likes chito"; 
likes = true; 
console.log(yuuri)

if (likes){

    yuuri += ", and chito hates yuuri"
    console.log(yuuri)
}



document.getElementById("para1").innerHTML = "oh by the way, " + yuuri 

let nickname;

document.getElementById("myButton").onclick = function(){

    nickname = document.getElementById("myUser").value;
    console.log(nickname);
    document.getElementById("myLabel").innerHTML = "Hello, " + nickname;

}

let a;
let b;
let c;




document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a)
    
    b = document.getElementById("bTextBox").value;
    b = Number(b)
   
    c = Math.sqrt((Math.pow(a,2)) + (Math.pow(b,2)))
    
    
    document.getElementById("sideC").innerHTML = "Side C: " + c
}

let count = 0;
document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("countSymbol").innerHTML = count;


}
document.getElementById("resetButton").onclick = function(){
    count=0;
    document.getElementById("countSymbol").innerHTML = count;


}
document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("countSymbol").innerHTML = count;
    
}



let fullname;
let firstname;
let lastname; 

document.getElementById("userSubmit").onclick = function(){

    fullname = document.getElementById("usernameInput").value.replace(" ", "-").toUpperCase();
    console.log(fullname)
    //fullAbrev = fullname.replace(" ", "-");
    document.getElementById("userShow").innerHTML = fullname;


    firstname = fullname.slice(0, fullname.indexOf(" "));
    lastname = fullname.slice(fullname.indexOf(" ") + 1);
    console.log(firstname);
    console.log(lastname);


}