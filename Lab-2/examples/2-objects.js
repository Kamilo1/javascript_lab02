'use strict';
/**
 * Definicja obiektu
 */
let rectangle = {
    width: 10,
    height: 5,
    area: function () {
        return this.width * this.height
    },
    "not-valid-property-name": "Prostokąt"
};
console.log(rectangle.width);                           //dostęp do właściwości
console.log(rectangle.area());                          //wywołanie metody
console.log(rectangle["not-valid-property-name"]);      //dostęp do składowej poprzez indeksowanie, dla nazw właściwości niezgodnych z nazewnictwem JS
/**
 * Testowanie czy obiekt posiada daną składową
 */
console.log("width" in rectangle);
console.log("perimeter" in rectangle);
console.log(rectangle.hasOwnProperty("height"));        //forma testowania istnienia właściwości opaarta na metodach prototypu
console.log(rectangle.perimeter ? "property is present" : "property is absent");
//można odwołać się do właściwośc i sprawdzić, czy zostanie zwrócone undefined
console.log(rectangle.perimeter ?? "default value of perimeter is 0");
//wywołanie operatora koalescencji, pozwala w sytuacji braku właściwości zastosować wartość domyślną
console.log(Object.entries(rectangle));                 //tablica właściwości obiektu
console.log(Object.keys(rectangle));                    //tablica nazw właściwości
/**
 * Dodawanie, usuwanie i zmiana właściwości
 */
rectangle.border = {                                    //dodanie właściwości
    stroke: 2,
    color: 0xFFBBAA
};
console.log(rectangle.area());
console.log(Object.keys(rectangle));
console.log(delete rectangle.border);                   //usuwanie właściwości
console.log(Object.keys(rectangle));
console.log(rectangle.area());
rectangle.area = function () {                            //zmiana definicji metody
    return this.height * this.width + 2;
}
console.log(rectangle.area());

/**
 * this - jest wskaźnikiem na konkteks wywołania funkcji, i wskazuje na jakim obiekcie funckja pracuje
 */
function perimeterFunction() {
    return (this.width + this.height) * 2;              //funkcja, która nie jest właściwością obiektu rectangle, this odwołuje się do jakiegokolwiek obiektu,
                                                        // który ma własciwości height i width
}

rectangle.perimeter = perimeterFunction;                //dodanie metody składowej perimeter i przypisanie do niej funkcji perimeterFunction
console.log(rectangle.perimeter());
let coloredRectangle = {};
/**
 * Tworzenie kopii obiektu.
 */
Object.assign(coloredRectangle, rectangle);
coloredRectangle.width = 20;
rectangle.width = 50;
console.log("coloredRegtangle.width = " + coloredRectangle.width + ", rectangle.width " + rectangle.width);
/**
 * Wywołanie metod w kontekście obiektów.
 */
delete coloredRectangle.perimeter;
let coloredRectanglePerimeter = perimeterFunction.apply(coloredRectangle, {});
console.log(coloredRectanglePerimeter);

/**
 * Funkcja jako konstruktor obiektów.
 */
function Circle(radius, center) {
    this.x = center.x;
    this.y = center.y;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    let x = 10;
};
let circle = new Circle(10, {x: 2, y: 5});
console.log(circle);
console.log(circle.area());
/**
 * Definiowanie getterow i setterow.
 */
let person = {
    _firstName: "adam",
    get firstName() {
        return this._firstName.toUpperCase("PL");
    },
    set firstName(value) {
        if (value && value.length > 2) {
            this._firstName = value;
        }
    }
}
person.firstName = "łukasz";
console.log(person.firstName);
