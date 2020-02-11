function Download(name, platform, file) {
  this.name = name;
  this.platform = platform;
  this.file = file;
}

function mouseOut(img) {
  img.src="images/downloadButton.png";
}
function mouseOver(img) {
  img.src="images/downloadButtonPressed.gif";
}

var jumpy_windows = new Download (
  "Jumpy",
  "Windows",
  "JumpyWindows.zip"
);
var jumpy_ubuntu = new Download (
  "Jumpy",
  "Ubuntu",
  "#"
);
var ghostGame = new Download(
  "Fright at the Museum",
  "Windows",
  "GhostGame.zip"
);
var venom = new Download(
  "Venomous",
  "Windows",
  "Venomous.zip"
);
var moldy = new Download(
  "Moldy",
  "Windows",
  "Moldy.zip"
);

var downloads = [jumpy_windows, jumpy_ubuntu, ghostGame, venom, moldy];
for(var i = 0; i < downloads.length; i++) {
    download = downloads[i];
    document.writeln("<div class=\"content\">");
    document.writeln("<div class=\"title\"><h4>" + download.name + "</h4></div>");
    document.writeln("<h6>(" + download.platform + ")</h6>");
    document.writeln("<p><a href=" + download.file + " download> " + " <img src=\"images/downloadButton.png\" class=\"download\" onmouseover=\"mouseOver(this)\" onmouseout=\"mouseOut(this)\"></img>" + "</a></p>");
    document.writeln("</div>");
}
