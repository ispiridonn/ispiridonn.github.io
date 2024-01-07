function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showLanguages() {
  hide("HOME");
  hide("Skills");
  hide("projects");

  show("languages");
}

function showHOME() {
  hide("languages");
  hide("Skills");
  hide("projects");

  show("HOME");
}

function showSkills() {
  hide("HOME");
  hide("projects");
  hide("languages");

  show("Skills");
}
function showprojects() {
  hide("Skills");
  hide("HOME");
  hide("languages");

  show("projects");
}
