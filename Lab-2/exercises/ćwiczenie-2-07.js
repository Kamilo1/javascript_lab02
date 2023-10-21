/**
 * Definiuj obiekt z getterem i setterem właściwości `level`
 * Odczyt pola powienien zwracać łańcuch z wartością pola _level i dodaną jednostką pojemności w litrach np. "10 l"
 * Zapis do pola powinien być możliwy tylko, gdy wartość argumentu jest między 0 a capacity włącznie
 * Setter powinien "pilnować", aby w _level nie było wartości ujemnej i większęj od pola capacity. 
 */
let tank = {
    capacity: 100,
    _level: 10,             //pole na którym działają getter i setter level
    //dodaj setter i getter o nazwie 'level'
    get level() {
        return `${this._level} l`;
    },

    set level(value) {
        if (value >= 0 && value <= this.capacity) {
            this._level = value;
        }
    }
}
console.log(tank.level);    //powinien powjaiwć się napis "10 l"
tank.level = 20;
console.log(tank.level);    //"20 l"
tank.level = 120;
console.log(tank.level);    //nadal "20 l", bo nie można poziomu zwiększyć powyżej capacity

//Testy
{
    tank.level = 10;
    tank.level = -1;
    if (tank.level === "10 l") {
        console.log("Test 71 passed");
    } else {
        console.log("Test 71 failed");
    }
    tank.capacity = 100;
    tank.level = 200;
    if (tank.level === "10 l") {
        console.log("Test 72 passed");
    } else {
        console.log("Test 72 failed");
    }
    tank.level = 54;
    if (tank.level === "54 l") {
        console.log("Test 73 passed");
    } else {
        console.log("Test 73 failed");
    }
}