/**
 * Włączenie trybu ścisłego (rygorystycznego). Starsze przeglądarki ignorują. Nowsze nie przetwarzają
 * kodu JS jeśli nie spełnia on szeregu warunków:
 * - nie można używać niezadeklarowanych zmiennych,
 * - nie można powielać parametrów np. function myFun(p, p, p)
 * - literały w kodzie ósemkowym sa niedozwolone np. let a = 010;
 * - kody escape ósemkowe sa niedozwolone np. "\011"
 * - nie można usuwać funkcji, zmiennych np. let a = 1; delete a;
 * - zapis do właściwości typu tylko do odczytu np.
 * - nie można deklarować zmiennej o nazwie eval
 * - nie można deklarować zmiennej o nazwie arguments
 * - słowo this odnosi się zawsze do obiektu, który wywoła funkcję
 * - nie można deklarować zmiennych o nazwach zarezerwowanych na przyszłość: interface, implements, let, package, private, protected, public, static, yield
 * - oraz kilka innych dotyczącyć eval
 * Tryb ścisły można mieć charakter globalny lub dotyczyć wybranej funkcji
 */
'use strict';                           //charakter globalny
let a = 10;
'use strict';                           //tryb tylko dla funkcji
function myFunction() {

}

/**
 * Definicja funkcji
 * function nazwa-funkcji([lista-parametrów]){
 *      [lista-deklaracji-zmiennych-stałych]
 *      [lista-instrukcji]
 *      [return] | [return wartość-zwracana]
 * }
 */
/**
 * Przykład funkcji z dwoma arguemntami i zwracającej wartość
 */
function add(a, b) {
    return a + b;
}

/**
 * Przykład funkcji bezargumentowej i nie zwracającej wartości
 */
function printHello() {
    console.log("Hello");
}

/**
 * Wywołanie funkcji
 * [zmienna =] nazwa-funkcji(lista-argumentów);
 */
/**
 * Przykłady wywołań zdefiniowanych wyżej funkcji
 */
let result = add(4, 5, 6);
printHello();
printHello(4,5);
/**
 * Funkcja anonimowa może być przypisana do zmiennej. Nie posiada nazwy, a wywołanie odbywa się przez zmienną
 */
let operation = function (a, b) {
    return a + b;
}
console.log(operation(1, 2));

/**
 * Funkcja o zmiennej liczbie argumentów, argument przed operatorem ... jest tablicą
 */
function sum(first, second, ...items) {
    let sum = 0;
    if (first) {
        sum = first;
    }
    if (second) {
        sum += second;
    }
    for (let item of items) {
        sum += item;
    }
    return sum;
}

console.log(sum("1", "2"));
console.log(sum(1, 2, 3, 7, 4));

/**
 * Tablica argumentów (choć nie jest dokładnie tablicą, ale zachowuje się jak tablica) funkcji.
 * Pozwala na definiowanie funkcji o zmiennej liczbie argumentów.
 */
function sendEmail(from, to, subject, content) {
    console.log(`sending email...
                 from: ${arguments[0] ?? "brak"}        //arguments[0] to parametr 'from'
                 to: ${arguments[1] ?? "brak"}          //arguments[1] to parametr 'to'
                 subject: ${arguments[2] ?? "brak"}     //arguments[2] to parametre 'subject'
                 content: ${arguments[3]} ?? "brak`);
}

sendEmail('student@wsei.edu.pl', 'rektor@wsei.edu.pl', 'prolongata', 'Prośba');
sendEmail('student@wsei.edu.pl');

/**
 * Parametry domyślne, przy braku argumentu przyjmowana jest wartość domyślna
 */
function Counter(initValue = 0, step = 1) {
    this.init = initValue;
    this.step = step;
}

let counter = new Counter();
console.log(counter);
/**
 * Funkcja strzałkowa (arrow function) jest odpowiednikiem lambd w C#
 * - służy do definiowania funkcji anonimowych o ograniczonych możliwościach w stosunku do zwykłych funkcji
 * - nie posiada własnego this tzn. this wskazuje na obiekt zewnętrzny, nie może być konstruktorem obiektu
 * - nie można wywołać na nich call, apply czy bind
 * -
 * - jeśli ciało funkcji jest wyrażeniem nie wymagane jest słowo return
 */
let validOp = (a, b) => a + b;
let invalidOp = (a, b) => this.a + this.b;      //ta funkcja nie jest kosntruktorem!!!
/**
 * Można, ale nie zaleca się wykorzystywania funkcji sttrzałkowych jako metod obiektów
 */
let calculator = {
    a: 1,
    b: 2,
    operation: invalidOp                //ta funkcja strzakowa zadziala, bo posiada this, ktore do obiektu
};

try {
    let obj = new invalidOp();
    console.log(obj);
} catch (e) {
    console.log("Próba utworzenia obiektu na podstawie funkcji strzałkowej");
}

let addOP = validOp;                    //funkcje strzalkowe tez moga byc przypisywane do zmiennych
let complexArrowFunction = () => {      //funkcje strzalkowe moga byc tez rozbudowane i zawierac dowolna liczbe instrukcji
    for (let i = 0; i < 10; i++) {
        console.log(i + i);
    }
}


