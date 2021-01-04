"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
//array (type[])
var items;
items = ["foo", "bar"];
var values; // anotação generic
values = [1, 2, 3];
//tuple
var title;
title = [1, "foo", "bar"];
// enum
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any (qualquer coisa) NÃO É LEGAL!
var coisa;
coisa = [1];
//void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error("error");
}
//object
var cart;
cart = {
    key: "fi"
};
//Type Inference
var message2 = "mensagem definida";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
