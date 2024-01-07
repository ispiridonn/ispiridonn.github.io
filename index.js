function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showLanguages() {
  hide("HOME");
  hide("Skills");
  hide("projects");

  var page = document.getElementById("languages");
  page.style.display = "block";
}

function showHOME() {
  hide("languages");
  hide("Skills");
  hide("projects");

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function showSkills() {
  hide("HOME");
  hide("projects");
  hide("languages");

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function showprojects() {
  hide("Skills");
  hide("HOME");
  hide("languages");

  var page = document.getElementById("projects");
  page.style.display = "block";
}
