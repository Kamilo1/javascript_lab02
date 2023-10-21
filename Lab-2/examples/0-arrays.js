'use strict';
/**
 * Tablice w JS nie są typami prostymi, sa obiektami typu Array.
 * Indeksami są tylko wartości całkowite, pierszy element ma indeks 0.
 */
/**
 * Przykłady deklaracji tablic i ich inicjacji
 */
let emptyArray = [];
let neEmptyArray = new Array();
let names = ["Adam", "Ewa", "Karol"];
let newNames = new Array("Adam", "Ewa", "Karol");
let newNumbersArray = new Array(1, 2, 3, 4, 5);
let emptySizedArray = new Array(10);        //UWAGA!!! to utworzy tablicę o rozmiarze 10 komórek, a nie tablicę z jedną 10 
let matrix = [[1, 1], [2, 2], [3, 3], [4, 4]];
/**
 * Dostęp do elementów
 */
console.log(emptyArray[0]);                 //dostaniemy undefined, bo brak elementów w tablicy
emptyArray[0] = 10;                         //możemy dodawać elementy do tablicy odwołując się do  'nieistniejących' indeksów  
emptyArray[10] = 11;
console.log(emptyArray[0]);
console.log(emptyArray[2]);
console.log(emptyArray);                    //teraz tablica ma 11 elementów, z czego 9 jest undefined
console.log(matrix[0][0]);                  //dostęp do tablicy dwuwymiarowej
console.log(matrix[0]);                     //tablica dwuwymiarowa to tablica tablic
console.log(names.at(-1));                  //dostęp do elementu przy pomocy ujemnych indeksów, -1 oznacza ostatni element, a -length pierwszy
console.log(names.at(-names.length));
/**
 * Testowanie czy zmienna jest tablica
 */
console.log(typeof emptyArray === 'Array'); //typeof dla tablic zwraca 'object'
console.log(Array.isArray(emptyArray));     //w ECMAScript15 jest metoda isArray w klasie Array
console.log(emptyArray instanceof Array);   //testowanie operatorem instanceof 
/**
 * Metody tworzenie tablic
 */
let copyNames = Array.from(names);          //utworzenie kopii tablicy, argumentem może być dowolny iterowalny obiekt
console.log(copyNames);
let anotherNumbersArray = Array.of(1, ...newNumbersArray);
//utworzenie tablicy złożonej z podanych elementów i innej tablicy 
console.log(anotherNumbersArray);
let nextNumberArray = [1, ...newNumbersArray];
//to samo co wyżej
/**
 * Wybrane metody protopytu Array
 */
let arrLenght = names.length;
/**
 * Metody mutujące tablicę, na której wywołujemy metody
 */
console.log(names.push("Beata"));           //dodanie elementu na koniec tablicy, zwraca aktualną długość tablicy
console.log(names.unshift("Robert"));       //wstawienie elementu na początek tablicy, zwraca aktualną długość tablicy
console.log(names.pop());                   //zwrócenie i usunięcie ostatniego elementu tablicy
console.log(names.shift());                 //zwrócenie i usunięcie pierwszego elementu tablicy
console.log("Sortowanie domyślne, leksykograficzne:");
console.log(names.sort());                  //sortowanie tablicy, opcjonalnie można podać komparator
console.log("Sortowanie wg rosnących długości imion:");
console.log(names.sort((s1, s2) => s1.length == s2.length ? 0 : s1.length < s2. length ? -1 : 1));
console.log(names.reverse());               //odraca kolejność elementów tablicy i zwraca referencję do tablicy
console.log(names);
console.log(names.splice(0, 1, "Feliks"));  //usuwa elementy od podanego indeksu określoną licznę elementów i opcjonalnie w to miejsce wstawia nowe, zwraca tablicę usuniętych elementów 
console.log(names);
console.log(names.fill("noname", 0, 1));    //wypełnia tablicę podanym elementem w zakresie podanych indeksów
/**
 * Metody zwracające kopię lub nowe tablice, ale nie zmieniające zawartość tablicy, na której wywołano metodę
 */
console.log(names.join("; "));              //tworzy łańcuch z elementów tablicy rozdzielonych podanym znakiem
console.log(names.concat(["Leszek", "Pawel"], "Róża"));
//tworzy nową tablice poprzez połączenie bieżącej z podanymi elementami lub tablicami
console.log(names.slice(1, -1));            //utworzenie kopii fragmentu tablicy od indeksu początkowego do końcoweg, można używać ujemnych indeksów


