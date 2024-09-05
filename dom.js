/*
console.log("Document elements")
console.log(window.document)
console.log(document) //doctype and HTML
console.log(document.head)
console.log(document.body)
console.log(document.documentElement) //HTML
console.log(document.doctype)
console.log(document.characterSet) //UTF 8 
console.log(document.title)
console.log(document.links) //ITS NOT AN ARRAY
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts) //1 = dom, 2 = liveServer
setTimeout(() => {
    console.log(document.getSelection().toString) //What I select
}, 2000);

//Obsolete
document.write("<h2>Hello World from DOM</h2>")
*/
//old buh
console.log(document.getElementsByTagName("li")) //all li, it is not an array
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("name")) // example forms


//new
console.log(document.querySelector("#menu")) //id but USE #, class, tags
console.log(document.getElementById("menu")) //its fast
console.log(document.querySelector("a")) //tag 
console.log(document.querySelectorAll("a")) //tag 
document.querySelectorAll("a").forEach(el => console.log(el)) //tag 
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelectorAll("#menu li")) //All <li> </li> in menu
console.log(document.querySelector("#menu li"))
//node list, NOT AN ARRAY

