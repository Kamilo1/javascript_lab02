//Ćwiczenia z lab_01
//Ćwiczenie 1 
let area = 3.14159;
let radius = '';
radius = Radius(area);
console.log(radius)
function Radius(area){
    let radius = (Math.sqrt(area / Math.PI)).toFixed(6);
    return radius;
}
if (radius === '1.000000'){
    console.log("Test passed");
} else {
    console.log("Test failed");
}
//Ćwiczenie 2
let height = 5;
let triangle = '#';
Triangle(height,triangle)
function Triangle(height,triangle){
for(let i = 0; i <= height; i++){
    console.log(triangle.repeat(i));
}
}
//Ćwiczenie 3
let decimalNumber = 10;
let romanNumber = 'IV';
romanNumber = DecimalToRoman(decimalNumber,romanNumber)
function DecimalToRoman(decimalNumber,romanNumber){
switch(decimalNumber){
    case 1:
    romanNumber = 'I';
    break;
    case 2:
    romanNumber = 'II';
    break;
    case 3:
    romanNumber = 'III';
    break;
    case 4:
    romanNumber = 'IV';
    break;
    case 5:
    romanNumber = 'V';
    break;
    case 6:
    romanNumber = 'VI';
    break;
    case 7:
    romanNumber = 'VII';
    break;
    case 8:
    romanNumber = 'VIII';
    break;
    case 9:
    romanNumber = 'IX';
    break;
    case 10:
    romanNumber = 'X';
    break;
    case null:
    romanNumber = 'Decimal number is undefined or null!';
    break;
    case undefined:
    romanNumber = 'Decimal number is undefined or null!';
    break;
    default:
    romanNumber = 'Decimal number is out of range!';    
}
return romanNumber;
}
console.log(romanNumber);
//Ćwiczenie 4
function GenerateRandomString(length)
{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let string = '';
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random()* characters.length);
        string += characters.charAt(randomIndex);
    }
    return string;
}
let length = 5;
let randomString = GenerateRandomString(length);

console.log(randomString);
//Ćwiczenie 5
let n = 20;
let m = 50;
let progressBar ="";
if(n > m ){
 console.log('N nie może być większe od m!');
}
progressBar = Bar(n,m);
console.log(progressBar);
function Bar(n,m){
procent = ~~((n / m) * 100);
let numberOfHash = ~~((n / m) * 50);
let progressBar = ""
let reszta = 50 - numberOfHash;
progressBar += '|'
for(let i = 0; i < numberOfHash; i++)
{
    progressBar += '#';
}
for(let j = 0; j < reszta; j++)
{
    progressBar += ' ';
}
progressBar += "|\n";
progressBar += '0 %';
for(let a = 0; a < 21; a++)
{
    progressBar += ' ';
}
progressBar += (`${procent} %`);
for(let b = 0; b < 19; b++){
    progressBar += ' ';
}
progressBar += '100 %'
return progressBar;
}
//Ćwiczenie 6
let rectWidth = 5;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';
rectString = Border(rectBorderSymbol,rectHeight,rectWidth);
console.log(rectString);
function Border(rectBorderSymbol,rectHeight,rectWidth){
if (rectWidth <= -1 || rectWidth >= 81)
{
    console.log('Złe dane!');
}
else if(rectHeight <= -1 || rectHeight >= 81)
{
    console.log('Złe dane!');
    
}
else if(rectBorderSymbol.length != 1 || rectBorderSymbol == ' ' || rectBorderSymbol == "\n" || rectBorderSymbol == "\t"){
    console.log('Złe dane!');
}
else  {
    let rectString = "";
for(let i = 0; i < rectWidth; i++)
{
    rectString += rectBorderSymbol;
}
rectString += '\n';
for(i = 1; i<rectHeight-1;i++){
    rectString += rectBorderSymbol;
    for(let j = 1; j < rectWidth - 1; j++){
        if(j == 0 || j == rectWidth - 1){
        rectString += rectBorderSymbol;}
        else{
        rectString += ' ';
        }
    }
    rectString += rectBorderSymbol;    
    rectString += '\n';
    }

    for(let i = 0; i < rectWidth; i++)
    {
        rectString += rectBorderSymbol;
    }

return rectString;
}
}