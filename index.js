var randomNumber1=Math.floor(Math.random()*6)+1;
// cant multiply by 7 since the range then will be 0-6 but we want the range to be 1-6
function imageLeft(randomNumber){
  var imagesList=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  // setting the name of image as "images/dice"+randomNumber+".png" is smarter
  // as you cant create an array if you have many images.
  for(var i=0; i<6; i++){
    if (randomNumber===(i+1)){
      document.querySelector(".img1").setAttribute("src", imagesList[i]);
                              }
                        }
                                }

imageLeft(randomNumber1);

var randomNumber2=Math.floor(Math.random()*6)+1;
function imageRight(random_Number){
  var imagesList=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  for(var i=0; i<6; i++){
    if (random_Number===(i+1)){
      document.querySelector(".img2").setAttribute("src", imagesList[i]);
      // could select image 1 and 2 from query selectorall method and then indexing
                              }
                        }
                                }
imageRight(randomNumber2);


if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins!<img class='winner-flag' src='images/red-flag.png'>";
}
else {
  document.querySelector("h1").innerHTML="<img class='winner-flag' src='images/red-flag.png'>Player 1 Wins!";
}
