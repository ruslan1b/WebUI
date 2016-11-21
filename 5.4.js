
var child = document.createElement('li');
var text = document.createTextNode('New Item');
child.appendChild(text);

var parent = document.getElementById('test');
for(i=0;i<3;i++){
parent.appendChild(child);}