function showMe() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("open");
}

const tvxhttp = new XMLHttpRequest();
tvxhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("television").innerHTML = this.responseText;
  }
};
tvxhttp.open("GET", "/includes/tv.html", true);
tvxhttp.send();
