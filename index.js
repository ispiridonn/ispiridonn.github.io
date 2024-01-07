function showLanguages() {
  document.getElementById("Skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("HOME").style.display = "none";

  var page = document.getElementById("languages");
  page.style.display = "block";
}

function showHOME() {
  document.getElementById("Skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function showSkills() {
  document.getElementById("HOME").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function showprojects() {
  document.getElementById("Skills").style.display = "none";
  document.getElementById("HOME").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}
