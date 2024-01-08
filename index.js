function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}
var activePage = "projects";

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showLanguages() {
  hide(activePage);
  show("languages");
  activePage = "languages";
}

function showHOME() {
  hide(activePage);
  show("HOME");
  activePage = "HOME";
}

function showSkills() {
  hide(activePage);
  show("Skills");
  activePage = "Skills";
}
function showprojects() {
  hide(activePage);
  show("projects");
  activePage = "projects";
}
