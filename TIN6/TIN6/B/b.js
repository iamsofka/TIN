addParagraph = function() {
    var body = document.getElementById("info");
    var p = document.createElement("p");
    var text = "       I like potatoes!";
    p.innerText = text;
    body.appendChild(p);
}
delay = function(func, ms) {
    setTimeout(() => func.apply(this, arguments), ms);
} 
delay(addParagraph, 5000);