const h1 = document.createElement('h1');
h1.innerHTML = "hello from js";

const div = document.getElementById("root")
div.appendChild(h1)

// document.body.appendChild(h1)

console.log(h1)