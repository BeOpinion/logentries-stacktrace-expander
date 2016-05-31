var matches = document.getElementsByClassName("le-msg");
for (var i = 0; i < matches.length; ++i) {
  var item = matches[i];
  item.innerHTML = item.innerHTML.replace(/\\n/g, "<br>");
}
