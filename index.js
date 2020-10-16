var randomNumber1=Math.floor(Math.random()*6)+1; //Selecting number 1 to 6;
var randomImageSource1="images/"+"dice"+randomNumber1+".png"; //Selecting dice 1 to 6;
var image1=document.querySelectorAll("img")[0]; //Selecting the player1 dice image;
image1.setAttribute("src",randomImageSource1); //Setting the random dice image;



var randomNumber2=Math.floor(Math.random()*6)+1; //Selecting number 1 to 6;
var randomImageSource2="images/"+"dice"+randomNumber2+".png"; //Selecting dice 1 to 6;
var image2=document.querySelectorAll("img")[1]; //Selecting the player2 dice image;
image2.setAttribute("src",randomImageSource2); //Setting the random dice image;

//Changing the title
if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Match Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="⛳Play 1 Wins!";
}else{
    document.querySelector("h1").innerHTML="Play 2 Wins!⛳";
}