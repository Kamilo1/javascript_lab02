/**
 * Dana jest poniższa funkcja wyższego rzędu filtrująca tablicę.
 * Drugi argument jest funkcją.
 */
function selectItems(arr, filter) {
    let result = [];
    if (filter instanceof Function) {
        for (let item of arr) {
            if (filter(item)) {
                result.push(item);
            }
        }
    }
    return result;
}
/**
 * Uzupełnij poniższe wywołania funkcji selectItems o drugi parametr funkcyjny, aby
 * - otrzymać tablicę imion o długości 3 znaków
 * - otrzymać tablicę imion zaczynających się literą A 
 */
function filterByLength3(name) {
    return name.length === 3;
}
function filterByStartsWithA(name) {
    return name.charAt(0) === "A";
}
let names = ["Adam", "Ewa", "Karol", "Robert", "Franciszek", "Ala", "Tom", "Arkadiusz"];
let threeLetersNames = selectItems(names,filterByLength3);         //dodaj drugi arguemnt
let startsWithANames = selectItems(names,filterByStartsWithA);         //dodaj drugi argument


//Testy
if (threeLetersNames.length == 3 &&  threeLetersNames.includes("Ewa", "Tom", "Ala")){
    console.log("Test 31 passed");
} else {
    console.log("Test 31 failed");
}
if (startsWithANames.length === 3 && startsWithANames.includes("Adam", "Ala", "Arkadiusz")) {
    console.log("Test 32 passed");
} else {
    console.log("Test 32 failed");
}



