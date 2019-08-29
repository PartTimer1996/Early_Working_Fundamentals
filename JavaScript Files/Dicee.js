function randomdicejs() {

  var lowerlimit = 1;
  var upperlimit = 6;
  var randomNumber1 = Math.floor(Math.random() * (1 + upperlimit - lowerlimit) + lowerlimit);
  var randomNumber2 = Math.floor(Math.random() * (1 + upperlimit - lowerlimit) + lowerlimit);

switch (randomNumber1){
  case 1:
  document.querySelector(".img1").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice1.png");
  break;
  case 2:
  document.querySelector(".img1").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice2.png");
  break;
  case 3:
  document.querySelector(".img1").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice3.png");
  break;
  case 4:
  document.querySelector(".img1").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice4.png");
  break;
  case 5:
  document.querySelector(".img1").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice5.png");
  break;
  case 6:
  document.querySelector(".img1").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice6.png");
  break;
}

  switch (randomNumber2){
    case 1:
    document.querySelector(".img2").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice1.png");
    break;
    case 2:
    document.querySelector(".img2").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice2.png");
    break;
    case 3:
    document.querySelector(".img2").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice3.png");
    break;
    case 4:
    document.querySelector(".img2").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice4.png");
    break;
    case 5:
    document.querySelector(".img2").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice5.png");
    break;
    case 6:
    document.querySelector(".img2").setAttribute("src", "C:\Users\/Ryan Duffy\/Documents\/Atom Projects\/Ryan's Webpage\/Dicee Challenge Files\/images\/dice6.png");
    break;
}
    var name1 = document.getElementById("PlayerOne").innerHTML;
    var name2 = document.getElementById("PlayerTwo").innerHTML;

    if (randomNumber1 > randomNumber2){
      document.getElementById("title").innerHTML = name1 + " Wins!"
    }
    else if (randomNumber2 > randomNumber1 ){
      document.querySelector("#title").innerHTML = name2 + " Wins!"
    }
    else {
      document.querySelector("#title").innerHTML = "Draw!"
    }
}



function playernames(){
  var name1 = prompt("Please Enter the Name for Player one");
  var name2 = prompt("Please Enter the Name for Player Two");

   document.getElementById("PlayerOne").innerHTML = name1;
   document.getElementById("PlayerTwo").innerHTML = name2;

}
