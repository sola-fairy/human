const navxhttp = new XMLHttpRequest();
navxhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("navigation").innerHTML = this.responseText;
  }
};
navxhttp.open("GET", "/includes/navigation.html", true);
navxhttp.send();

const headerxhttp = new XMLHttpRequest();
headerxhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("header").innerHTML = this.responseText;
  }
};
headerxhttp.open("GET", "/includes/header.html", true);
headerxhttp.send();

const playButton = document.querySelector("#play-button");
/*playButton.innerText = "Play";*/
const tvScreen = document.querySelector("#tv-screen");
tvScreen.setAttribute("src", "/assets/tv-static.gif");
const buttonIcon = document.querySelector("#tv-icon");
buttonIcon.setAttribute("src", "/assets/play.png");

const channelChanger = document.querySelector("#channel-changer");
const channelNumber = document.querySelector("#channel-no-icon");
channelNumber.setAttribute("src", "/assets/no-channel.png");

const filterButton = document.querySelector("#filter-button");
const colorIcon = document.querySelector("#color-icon");
colorIcon.setAttribute("src", "/assets/bolt.png");

function pressPlay() {
  tvScreen.setAttribute("src", "/assets/angy.gif");
  document.getElementById("tv-screen").style.filter = "none";
  playButton.setAttribute("onclick", "pressStop()");
  buttonIcon.setAttribute("src", "/assets/pause.png");
  channelNumber.setAttribute("src", "/assets/one.png");
  channelChanger.setAttribute("onClick", "changeChannel()");
  filterButton.setAttribute("onClick", "colorOff()");
}

function pressStop() {
  tvScreen.setAttribute("src", "/assets/tv-static.gif");
  playButton.setAttribute("onclick", "pressPlay()");
  buttonIcon.setAttribute("src", "/assets/play.png");
  channelNumber.setAttribute("src", "/assets/no-channel.png");
  channelChanger.setAttribute("onClick", "");
  filterButton.removeAttribute("onClick", "colorOn()");
  colorIcon.setAttribute("style", "filter: none;");
}

function changeChannel() {
  tvScreen.setAttribute("src", "/assets/books.gif");
  channelNumber.setAttribute("src", "/assets/two.png");
  channelChanger.setAttribute("onClick", "channelTwo()");
}

function channelTwo() {
  tvScreen.setAttribute("src", "/assets/opinion.gif");
  channelNumber.setAttribute("src", "/assets/three.png");
  channelChanger.setAttribute("onClick", "channelOne()");
}

function channelOne() {
  tvScreen.setAttribute("src", "/assets/angy.gif");
  channelNumber.setAttribute("src", "/assets/one.png");
  channelChanger.setAttribute("onClick", "changeChannel()");
}

function colorOff() {
  document.getElementById("tv-screen").style.filter = "grayscale(1)";
  filterButton.setAttribute("onClick", "colorOn()");
  document.getElementById("color-icon").style.filter = "grayscale(1)";
}

function colorOn() {
  document.getElementById("tv-screen").style.filter = "none";
  filterButton.setAttribute("onClick", "colorOff()");
  document.getElementById("color-icon").style.filter = "none";
}

const context = document.getElementById("context");
context.addEventListener("mouseover", (event) => {
  document.getElementById("content").style.visibility = "visible";
});
context.addEventListener("mouseleave", (event) => {
  document.getElementById("content").style.visibility = "hidden";
});
