var headerContainer = document.querySelector("#header-container");
headerContainer.style.background = "#00cc66";

var container = document.querySelector("#container");
container.style.background = "#F5F5F5";

var urgenteBackground = document.querySelectorAll(".emergency-tasks h3");
urgenteBackground[0].style.background = "#e600e6";
urgenteBackground[1].style.background = "#e600e6";

var naoUrgenteBackground = document.querySelectorAll(".no-emergency-tasks h3");
naoUrgenteBackground[0].style.background = "black";
naoUrgenteBackground[1].style.background = "black";

var rodapeTrybe = document.querySelector("#footer-container div");
rodapeTrybe.style.background = "#006600";

// -------------------------------------------------------------------------------------------

var urgenteBackgroundColuna = document.querySelectorAll(".emergency-tasks div");
urgenteBackgroundColuna[0].style.background = "#fcbcb5";
urgenteBackgroundColuna[1].style.background = "#fcbcb5";

var naoUrgenteBackgroundColuna = document.querySelectorAll(".no-emergency-tasks div");
naoUrgenteBackgroundColuna[0].style.background = "#ffff00";
naoUrgenteBackgroundColuna[1].style.background = "#ffff00";
