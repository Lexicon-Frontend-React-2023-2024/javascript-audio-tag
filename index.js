const h2s = document.querySelectorAll("h2");
console.log(h2s);

const iframe = document.querySelector("iframe");
console.log(iframe);

console.log(iframe.contentDocument);

const h2 = iframe.contentDocument.querySelector("h2");
h2.innerText = "Changed content";
console.log(h2.innerText);
