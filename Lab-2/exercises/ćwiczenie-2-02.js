/**
 * Zdefiniuj funkcję konstruktora budującego obiekt Car o strukturze
 * weight   - liczba
 * model    - łańcuch
 * power    - liczba
 * mileage  - liczba
 * drive    - funkcja przyjmujaca dwa parametry speed (km/h) i time (h), która oblicza przebytą trasę i
 * powiększa o nią mileage. Zwróć uwagę na poprawność parametrów!!! 
 * Funkcja budująca powinna posiadać tylko trzy parametry: weight, model i power. Pole mileage powinno być równe 0 
 * dla nowo utworzonego obiektu.
 * Przykłady
 * let car = new Car(1000, "BMW A4", 200)
 * console.log(car.mileage);            //stan licznika: 0
 * car.drive(100, 1);                   //jedziemy przez godzinę z prędkością 100 km/h
 * console.log(car.mileage);            //stan licznika: 100
 */
function Car(weight, model, power){
    this.weight = weight;
    this.model = model;
    this.power = power;
    this.mileage = 0;
    
    this.drive = function(speed, time) {
        if (typeof speed === 'number' && typeof time === 'number' && speed >= 0 && time >= 0) {
            const distance = speed * time;
            this.mileage += distance;
        }
    };
}

//Testy
let car = new Car(1000, "BMW A4", 200);
if (car instanceof Car 
    && "weight" in car 
    && "model" in car 
    && "power" in car 
    && "mileage" in car
    && "drive" in car
    && car.drive instanceof Function){
    console.log("Test 1 passed!");
    car.power = 20;
    car.weight = 2000;
    car.model = ""
    if (car.power === 20 && car.weight === 2000 && car.model === ""){
        console.log("Test 2 passed!");
    } else{
        console.log("Test 2 failed!");    
    }
    let m1 = car.mileage;
    car.drive(100, 4);
    if (car.mileage - m1 === 400){
        console.log("Test 3 passed!");
    } else {
        console.log("Test 3 failed!");
    }
    let m2 = car.mileage;
    car.drive(100, -4);
    if (car.mileage === m2) {
        console.log("Test 4 passed!");
    } else {
        console.log("Test 4 failed!");
    }
} else {
    console.log("Test 1 failed! Fix object to run other test!");
}