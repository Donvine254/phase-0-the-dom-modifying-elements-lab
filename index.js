
const element = document.getElementById("main").remove()
const newHeader=document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);

