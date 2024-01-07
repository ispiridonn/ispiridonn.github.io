function showLanguages() {
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("HOME");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("Skills");
  oldPage.style.display = "none";

  var page = document.getElementById("languages");
  page.style.display = "block";
}

function showHOME() {
  var oldPage = document.getElementById("projescts");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("languages");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("Skills");
  oldPage.style.display = "none";

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function showSkills() {
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("HOME");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("languages");
  oldPage.style.display = "none";

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function showprojects() {
  var oldPage = document.getElementById("languages");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("HOME");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("Skills");
  oldPage.style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}
