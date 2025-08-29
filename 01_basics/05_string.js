const name = 'dipto'
const repocount = 50
// console.log(name + repocount+"value"); [not recommanded]
console.log(`hello my name is ${name} & my repo count is ${repocount}`);

const gameName = new String("dipto")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newstr ="            hiko               "

console.log(newstr.trim());

const url = "https://dipto.com/biswas%20ad"
url.replace("20%","-")
console.log(url.includes("jonas"));

const loo = new String("dipto-hc-ro")
console.log(loo.split("-"));

