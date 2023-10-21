/**
 * Zdefiniuj funkcję, która zwróci najdłuższy wyraz łańcucha
 * Przykład
 * let word = longestWord("Programowanie w JavaScript jest super")
 * w word powinno być słowo "Programowanie"
 * Załóż, że w łańcuchu są słowa oddzielone tylko spacją (brak kropek, przecinków itd.)
 */

function longestWord(sentence){
    if (typeof sentence !== 'string' || sentence.trim() === "") {
        return "";
    }
    const words = sentence.split(" "); // Rozbij łańcuch na słowa
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}


//Testy
if (longestWord("Is this a fox") === "this"){
    console.log("Test 41 passed")
} else {
    console.log("Test 41 failed")
}
if (longestWord("") === ""){
    console.log("Test 42 passed")
} else {
    console.log("Test 42 failed")
}
if (longestWord() === ""){
    console.log("Test 43 passed")
} else {
    console.log("Test 43 failed")
}