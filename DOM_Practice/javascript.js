const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("paragraph");
para.style.color = "red";
para.textContent = "Hey, I'm red!"

container.appendChild(para);

const threehead = document.createElement("h3");
threehead.classList.add("threehead");
threehead.style.color = "blue";
threehead.textContent = "I'm a blue h3!"

container.appendChild(threehead);

const blackdiv = document.createElement("div");
blackdiv.classList.add("blackdiv");
blackdiv.style.borderBlockColor = "black";
blackdiv.style.backgroundColor = "pink";

container.appendChild(blackdiv);

const anotherheader = document.createElement("h1");
anotherheader.classList.add("anotherheader");
anotherheader.textContent = "I'm in a div."

blackdiv.appendChild(anotherheader);

const anotherParagraph = document.createElement("p");
anotherParagraph.classList.add("anotherParagraph");
anotherParagraph.textContent = "ME TOO!"

blackdiv.appendChild(anotherParagraph);