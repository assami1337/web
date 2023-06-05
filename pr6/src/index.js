import * as d from "../src/data.json" assert { type: "json" };

let data = d.default;
console.log(data);

let source = document.getElementById("template").innerHTML;
console.log(source);

let template = Handlebars.compile(source);
console.log(template);
document.getElementById("root").innerHTML = template(data);
