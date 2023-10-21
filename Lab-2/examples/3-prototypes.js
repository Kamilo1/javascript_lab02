'use strict'
let book = {
    title: "JavaScript for brave",
    authors: ["Jack Screw"],
    publishingYear : 2020
};
/**
 * Obiekty w JavaScript są budowane na podstawie prototypu, czyli obiektu wzorcowego.
 * Każdy obiekt tworzony w JS posiada także składowe prototypu obok własnych właściwości. 
 */
console.dir(book.toString());                           //zwraca łańuch z wartościami obiektu
console.log(book.hasOwnProperty("title"));              //czy właściwość należy do obiektu
console.log(book.isPrototypeOf({title: "ABC"}));        //czy obiekt jest prototypem innego obiektu 
console.log(book.__proto__);                            //pole z prototypem
console.log(book.constructor);                          //konstruktor   
console.log(book.propertyIsEnumerable("authorsCount")); //czy właściwość obiektu jest w zbiorze, który można przeglądać pętlą for ... in                                       
/**
 * W trakcie życia obiektu można zmienić definicję składowych    
 */
book.toString = function () { return `title: ${this.title}, authors: ${this.authors}, publishingYear: ${this.publishingYear}`};
console.dir(book.toString());
/**
 * JS w trakcie wykonania kodu sprawdza, czy dana właściwość znajduje się w bieżącym obiekcie, a jeśli jej nie ma to poszukuje jej
 * w prototypie, jeśli i tam nie ma to sprawdza w prototypie prototypu (jeśli jest).
 * Prototyp Object nie posiada prototypu.
 */

/**
 * Tworzenie obiektu na podstawie prototypu metodą create
 */
let ebook = Object.create(book);
/**
 *  
 */                
console.log(ebook.title);
ebook.link = "http://ebooks.pl/books/1";        
/**
 * Metoda toString z prototypu nie uwzględnia nowej właściwości 'link'
 */
console.log(ebook.toString());
/**
 * Należy ją zdefiniować na nowo:
 */
ebook.toString = function () { return `title: ${this.title}, authors: ${this.authors}, publishingYear: ${this.publishingYear}, link: ${this.link}` };
console.log(ebook.toString());
/**
 * Każda funkcja posiada właściwość 'prototype'. Jeśli funkcja pełni rolę konstruktora obiektów i zostanie wywołana, to
 * do tej właściwości zostanie przypisany właśnie tworzony obiekt (w polu __proto__).
 * Ustawienie pola 'prototype' funkcji zapewnia, że wszystkie tworzone tą funkcją obiekty będą posiadać prototyp z tego pola.
 * Przypisanie funkcji prototypu realizuje metoda assing prototypu Object.  
 */
function Ebook(link){                                       //funkcja pełniąca rolę konstruktora 
    this.link = link;                
}

Object.assign(Ebook.prototype, book);                       //przypisanie do prototypu konstruktora Ebook obiektu book

let ebookJS = new Ebook("http://ebooks.pl/1");

console.log(ebookJS.toString());
/**
 * Przypisanie prototypu funkcji pełniącej rolę konstruktora realizuje mechanizm dziedziczenia.
 * Zazwyczaj w prototypie definiuje się metody, a pola są definiowane w konstruktorze  
 */
let shape = {
    description: "shape",
    area: function(){},
    perimeter: function(){}
}
function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.area = function(){ this.height * this.width};
    this.perimeter = function() {this.width * 2 + this.height * 2}
}
Object.assign(Rectangle.prototype, shape);
let rect = new Rectangle(10, 20);
console.log(JSON.stringify(rect));
/**
 * Przykład
 */
let abstractMessage = {
    content: "",
    createdAd: new Date(),
    toString: function(){
        return `content: ${this.content}, created: ${this.createdAd} `
    }
};

Object.assign(Email.prototype, abstractMessage);

function Email(from, to, content){
    this.from = from;
    this.to = to;
    Object.getPrototypeOf(this).content = content;
    this.toString = function(){
        return `${Object.getPrototypeOf(this).toString()}, from: ${from}, to: ${to}`; 
    }
}

let emailToAdam = new Email("cs@record-it.pl", "adam@op.pl", "Hello");
console.log(emailToAdam.toString());


