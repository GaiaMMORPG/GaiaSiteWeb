var ajax = new XMLHttpRequest();
ajax.open("GET", "navbar.htm", false);
ajax.send();
document.body.innerHTML += ajax.responseText;
