/*window.onload = function () {
document.querySelector("h2").style.color = "Blue";
};

//window.alert("Hello from js file");
document.write("<h2>Hello <span> Page </span></h2>");
console.log(" Hello from js file ");
console.error("Error");
console.table(["osama","nagham","dalal"]);
console.log("Hello from %cjs %cfile","color: red ; font-size: 40px", "color: Blue ; font-size: 40px");
var myName = "osama";
console.log("Hello " +myName);
console.log(`Hello ${myName}`);
document.querySelector("h1").style.color = "Blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight ="bold";
document.querySelector("h1").style.textAlign ="center";
document.querySelector("h1").style.fontFamily ="Arial";
console.log("%cElzero %cWeb %cschool", "color: red ; font-size: 40px", "color: green ; font-size: 40px ; font-weight:bold","color:Blue ; font-size: 40px");
console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.table(["Elzero","Ahmad","Samah","Gamal","Aya"]);*/
/*console.log("Iam In Console");
document.write("Iam In Page");*/
/*console.log(typeof"osama mohammad");
console.log(typeof 6000);
console.log(typeof 668.90);//Decimal number
console.log(typeof[ 10 , 9 , 8]);//Array => object
console.log(typeof[ "os" , "na" , "ma"]);//Array => objects
console.log(typeof{name:"osama" , age : 17 , country: "Egypt"});//object
console.log(typeof true);//Boolean
console.log(typeof false);
console.log(typeof undefined);//this is not found
console.log(typeof null);//object this is empty
var user = "Nagham" , age = 17;

console.log(user);
console.log(user);
console.log(user);
console.log(age);
console.log(hello);
hello.innerHTML = "Option";
var $_hh$_ = "ppp";
console.log($_hh$_);
var userName = "kkl";//camelcase
console.log(userName);
var yomi ="1";
var yomi ="2";
console.log(yomi);//redeclear , let const no redeclar
console.log('elzero web "school"');
console.log("elzero web 'school'");
console.log("elzero web \"school\"");
console.log('elzero \\web \'school\'');
console.log("elzero \
web \
school");
console.log("elsero\nweb\nschool");
let a ="We love";
let b ="Javascript";
document.write ( a+ " " +b );
console.log (a,b);//concatenation
let j ="We love";
let y ="javascript";
let c ="and";
let r ="programing";
console.log ( j + " "+ y + "\n" + c + " " +r  );
console.log(`${j} ${y} 
${c} ${r}`);
let title = "Elzero";
let desc = "Web School";
let markup = `
<div class="card">
<div class="child">
<h2>${title}</h2>
<p>${desc}</p>
</div>
</div>`;
document.write(markup);
let pagTitle = "Elzero", pagDescription = "Elzero Web School", pagDate="25/10";
let card=`<div>
<h3>Hello ${pagTitle}</h3>
<p>${pagDescription}</p>
<span>${pagDate}</span>
</div>`;
document.write(card.repeat(4));//challenge
var numberOne="10",numberTwo="20";
console.log(numberOne,numberTwo);
console.log (typeof (numberOne,numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log (typeof`${numberOne} ${numberTwo}`);
console.log (numberOne,"\n",numberTwo);
console.log (`${numberOne} \n ${numberTwo}`);
console.log(elzero.innerHTML);
console.log(typeof elzero); // object
let f = 21;
let k = 20;
console.log(`_${f}_${k}${f}_${k}${f}_${k}${f}_${k}_`);*/ // _21_2021_2021_2021_20_
/*console.log(10 +20);// number is blue color
console.log( 10 + "osama");// string is black color
console.log(10-20);
console.log( 10 - "osama");//NAN Not a number
console.log(typeof NaN);//Number
console.log(10*20);
console.log( 10 * -20);
console.log( 20 /5);
console.log( 20/3);
console.log( 2**4);//power of a number
console.log( 10 % 2);
console.log( 11 % 2); //Remove 1
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"osama");
console.log(+"15.5");
console.log(+0xff);//hexadecimal
console.log(+null);
console.log(+true);
console.log(+false);
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"osama");
console.log(-"15.5");
console.log(-0xff);//hexadecimal
console.log(-null);
console.log(-true);
console.log(-false);
console.log(Number("100"));//In the future
let a ="10";
let b = 20 ;
let c = true ;
console.log( a + b);
console.log( +a + b);
console.log( a - b);
console.log( b - a);
console.log( b + c);
console.log(a + b + c);//1020true
console.log(+a + b + c);
console.log(""- 2);
console.log(+"");
console.log(0 - 2);
console.log(false-true);
console.log(+false - +true);//-1
let n = 10;
n = n + 20;
n = n + 70;
n +=100;
n -=50;
n /=50;
console.log(n);
let d = "-100";
let e = "20";
let f = "30";
let g = true ;
console.log ( -d * e);//2000
console.log(++e * ++g + -d + ++f);//173
// Replace ? With Arithmetic Operators
console.log(10 % 20 %15*3 %190 % 10 % 400); // 0
//let num = 3;

// Solution One
//console.log( num = num +3); // 6

// Solution Two
//console.log( num = num + true + true + true); // 6

// Soultion Three
//console.log( num +=3); // 6

// Soultion Four
//console.log( num = num *2); // 6

// Solution Five
//console.log( num +3 ); // 6

// Solution Six
//console.log( num = num *3 -3); // 6
//let points = 10;

// Write Your Code Here

//console.log(++points + 2); // 13

// Write Your Code Here

//console.log(points += true + true +true); // 8;*/
/*console.log(1000000);
console.log(1_000_000);//1000000 million
console.log(1e6);
console.log( 10 ** 6);
console.log(1000000.0);// not a value
console.log(1000000.1);//1000000.1
//console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE +23245373);
console.log((100).toString());//color black not blue this is a string 
console.log(100..toString());//....
console.log(100.10.toString());//Decimal number 100.1
console.log(100.555555.toFixed(2));//100.56 because the number five is in middle
console.log(100.554555.toFixed(2));//100.55 because the number four is in middle
console.log(Number ("100 Osama"));//NAN
console.log(+"100 osama");//NAN
console.log(parseInt("100 osama"));//100
console.log(parseInt("osama 100 osama"));//NAN
console.log(parseInt("100.500 osama"));//100
console.log(parseFloat("100.500 osama"));//100.5
console.log(Number.isInteger("100"));//False
console.log(Number.isInteger(100.555));//False
console.log(Number.isInteger(100));//True
console.log(Number.isNaN("osama"));//False
console.log(Number.isNaN("osama"/20));//True Not a number 
console.log(Math.round(99.2));//99
console.log(Math.round(99.5));//100
console.log(Math.ceil(99.2));//100 ++ positive
console.log(Math.floor(99.9));//99 --negative
console.log(Math.min( 100, 200 , -5 , 8 , -20));//-20
console.log(Math.max(100, 800 , -9 , 77, 88));//800
console.log(Math.pow(2,4));//16
console.log(Math.random());//random number
console.log(Math.trunc(99.5));// not a decimal point
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(Math.round(Math.min(a , b , c, d)));//2
console.log(a** parseInt(d));// a+d 10000
console.log(Math.round(d));//2
console.log(Math.trunc(d));//2
console.log(parseInt(d));//2
console.log(Math.floor(d));//2
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number
let flt = 10.4;
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.round((flt).toString())); // 10
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
let theName = "  Ahmad  ";
console.log(theName);
console.log(theName[1]);
console.log(theName[5]);//undefined
console.log(theName.charAt(1));//h
console.log(theName.charAt(5));//empty
console.log(theName.length);//5
console.log(theName.trim());//removed distance
console.log(theName.toUpperCase());//capital latter
console.log(theName.toLowerCase());//small latter
console.log(theName.trim().charAt(2).toUpperCase());//M*/
/*let a = "Elzero Web School";
console.log(a.indexOf("Web"));//7
console.log(a.indexOf("Web",8));//-1
console.log(a.indexOf("o"));//5
console.log(a.lastIndexOf("o"))//15
console.log(a.slice(0));//Elzero Web School
console.log(a.slice(2));//zero Web School
console.log(a.slice(2 , 7));// only zero
console.log(a.slice(2,8));//zero W
console.log(a.slice(2,6));//zero
console.log(a.slice(-5));//chool
console.log(a.slice(-5 ,-3));//ch
console.log(a.repeat(5));
console.log(a.split());//Array
console.log(a.split(""));//split of all the letters
console.log(a.split(" "));//elzero , web , school
console.log(a.split(" ",2));//elzero, web
console.log(a.split("",6));// e, l , z , e , r , o*/
/*let a = "Elzero Web School";
console.log(a.length);
console.log(a.substring(2));//zero Web school
console.log(a.substring(2, 6));//zero
console.log(a.substring(6, 2));//zero swap
console.log(a.substring(-10));//Elzero Web School
console.log(a.substring(-10,6));//0 _ 6
console.log(a.substring(17));//empty
console.log(a.substring(a.length - 1));//L
console.log(a.substring(a.length - 5));//chool
console.log(a.substring(a.length - 5, a.length - 3));//ch
console.log(a.substr(0));//Elzero Web School
console.log(a.substr(0 , 6));//Elzero
console.log(a.substr(17));//empty
console.log(a.substr(-3));//ool
console.log(a.substr(-5 , 2));//ch
console.log(a.includes("Web"));//true
console.log(a.includes("Web",8));//false
console.log(a.startsWith("E"));//true
console.log(a.startsWith("E",2));// false 2 index
console.log(a.startsWith("z",2));//true
console.log(a.startsWith("zero",2));
console.log(a.endsWith("o"));//false
console.log(a.endsWith("o",6));// true not index this is lenght
console.log(a.endsWith("ro",6));//true
console.log(a.endsWith("l"));//true*/
/*let a = "Elzero Web School";
console.log(a.charAt(2).toUpperCase()+a.slice(3,6));//Zero
console.log(a.charAt(13).toUpperCase().repeat(8));//HHHHHHHH
console.log(a.split(" ",1));//Array Elzero
console.log(a.substr(0,7) + a.substr(11,15));//Elzero School
console.log(a.slice(0 , 1). toLowerCase() + a.slice(1 , 16).toUpperCase() + a.slice(16 , 17).toLowerCase());//eLZERO WEB SCHOOl
let userName = "Elzero";
console.log(a.slice(0, 1).toLowerCase()); // e
console.log(a.substr(0,1).toLowerCase()); // e
console.log(a.substring(0,1).toLowerCase()); // e
console.log(a.charAt(0).toLowerCase()); // e
console.log(a.charAt(0).toLowerCase().repeat(3)); // eee
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True*/
/*console.log( 10 == "10");//compare value only True
console.log(-100 == "-100");//compare value only
console.log( 10 != "10");//false
console.log( 10 === "10");//compare value + typy false
console.log( 10 !== "10");//compare value + typy true
console.log( 10 != 10);//false
console.log( 10 > 20);//false
console.log( 10 > 10);//false
console.log( 10 >= 10);//true
console.log( 10 < 20);//true
console.log( 10 < 10);//false
console.log( 10 <= 10);//true
console.log( "Osama" === "Ahmad");//false
console.log( typeof"Osama" === typeof"Ahmad");//true
console.log(true);//true
console.log(!true);//false
console.log(!(10 == "10"));//false
console.log( 10 == "10" && 10 > 8);//true
console.log( 10 == "10" && 10 > 8 && 10 >= 10);//true
console.log( 10 == "10" && 10 > 8 && 10 > 50);//false
console.log( 10 == "10" || 10 > 8 || 10 > 50);//true
console.log( 10 == "10" || 10 > 80 || 10 > 50);//true
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 < 100 != 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(+ -50 !=  +"-40"); // true
console.log(- 10 != -"-40"); // true
console.log(+ "10" == 10); // true
console.log(+ 20 != false); // true
let num1 = 10;
let num2 = 20;

console.log( 10 < 20 ); // true
console.log( 20 > 10); // true
console.log( 20 >= 10); // true
console.log( 10 <= 20); // true
console.log( 10 != 20); // true
console.log( 10 !== "20"); // true
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a != c || a < b); // true
console.log(a < b != a <= c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

/*let price = 100;
let discount = true;
let discountAmount = 30;
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
console.log(price);//70*/
/*let price = 100;
let discount = false;
let discountAmount = 30;
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
console.log(price);//100
/*let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country==="Egypt")
{
    price -= discountAmount ; //price = price - discountAount
}
console.log(price);//70
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "Egypt";
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country==="Egypt")
{
    price -= 40 ; //price = price - discountAount
}
console.log(price);//70
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country==="Egypt")
{
    price -= 40 ; //price = price - discountAount
}
console.log(price);//60
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "syria";
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country ==="Egypt")
{
    price -= 40 ; //price = price - 40
}
else if( country ==="syria"){
    price -= 50 ; //price = price - 30
}
console.log(price);//50
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country ==="Egypt")
{
    price -= 40 ; //price = price - 40
}
else if( country ==="syria"){
    price -= 50 ; //price = price - 30
}
console.log(price);//100
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country ==="Egypt")
{
    price -= 40 ; //price = price - 40
}
else if( country ==="syria"){
    price -= 50 ; //price = price - 30
}
else{
    price -= 10 ;
}
console.log(price);//90
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";
let student = true;
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country ==="Egypt" && student === true)
{
    price -= discountAmount + 30 ; //price = price - 40
}
else if( country ==="Egypt" && student === false ){
    price -= discountAmount + 10 ; //price = price - 30
}
else{
    price -= 10 ;
}
console.log(price);//90
/*let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;
if ( discount === true){
    price -= discountAmount ; //price = price - discountAount
}
else if( country ==="Egypt")
{
    if( student === true){//Nested of
        price -= discountAmount + 30 ; //price = price - 40
    } else {
        price -= discountAmount + 10 ;
    }
}
else{
    price -= 10 ;
}
console.log(price);//40*/

/*let theName = "Mona";
let theGender = "Female";
let theAge = 30;
if (theGender === "Male"){
    console.log("Mr");
} else {
    console.log("Mrs");
}//Mrs
let theName = "Ahmad";
let theGender = "Male";
let theAge = 30;
if (theGender === "Male"){
    console.log("Mr");
} else {
    console.log("Mrs");
}//Mr
//theGender = "Male" ? console.log("Mr") : console.log("Mrs");//Mr
let result = theGender === "Male" ? "Mr":"Mrs";
document.write(result);//Mr
console.log(theGender === "Male" ? "Mr":"Mrs");//Mr
console.log(`Hello ${theGender === "Male" ? "Mr":"Mrs"} ${theName}`);//Hello Mr Ahmad

theAge < 20
  ? console.log(20)
  :theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  :theAge > 60
  ? console.log("Larger than 60")
  : console.log("unknown");// theAge is 30 the result is 20 To 60*/
    
/*let price = 100;
console.log(`The Price Is ${100}`);//The Price Is 100
let price ;
console.log(`The Price Is ${price}`);//The Price Is undefined
let price = null;
console.log(`The Price Is ${price}`);//The Price Is null
let price = null;
console.log(`The Price Is ${price || 200}`);//false value The Price Is 200
let price ;
console.log(`The Price Is ${price || 200}`);//The Prise Is 200
let price = 0;
console.log(`The Price Is ${price || 200}`);//The Price Is 200
let price = false;
console.log(`The Price Is ${price || 200}`);//The Price Is 200
let price = "";
console.log(`The Price Is ${price || 200}`);//The Price Is 200
console.log(Boolean(100));//true
console.log(Boolean(-100));//true
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
let price = null;
console.log(`The Price Is ${price || 200}`);//The price is 200
console.log(`The Price Is ${price ?? 200}`);//The price is 200
let price ;
console.log(`The Price Is ${price || 200}`);//The price is 200
console.log(`The Price Is ${price ?? 200}`);//The price is 200
let price = 0;
console.log(`The Price Is ${price || 200}`);//The price is 200
console.log(`The Price Is ${price ?? 200}`);//The price is 0*/
/*let a = 10;
if ( a < 10){
    console.log(10);
} else if ( a >=10 && a <= 40 ){
    console.log( "10 To 40");
} else if ( a > 40 ){
    console.log("> 40");
} else {
    console.log("unknown");
}
a < 10
? console.log (10)
: a >= 10 && a <= 40
? console.log ( " 10 To 40 ")
: a > 40 
? console.log (">40")
: console.log ("unknown");
let st = "Elzero Web School";
   if( (st.length*2).toString() === "34"){
   console.log("Good");}
   if( st.slice(7, 8).toLowerCase() === "w"){
   console.log("Good");}
   if(  st !== "string"){
   console.log("Good");}
   if ( typeof Number(st) === "number"){
   console.log("Good");}
   if ( st.slice(0,6).repeat(2) ==="ElzeroElzero"){
   console.log("Good")
   }
// Test Case 1
let num = 99; // "009"
  num < 10
  ? console.log("00",num)
  : num > 10 && num <100
  ? console.log("0",num,"0")
  : num >= 10
  ? console.log(num)
  : console.log("unknown");

  let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if ( num1 == str)
console.log("{num1} Is The Same Value As {str}")
if ( num1 !== "str")
console.log("{num1} Is The Same Value As {str} But Not The Same Type")
if ( num1 !== str2)
console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
if ( "str" !== "str2")
console.log("{str} Is The Same Type As {str2} But Not The Same Value")*/

// Edit What You Want Here

/*let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;


  Do Not Edit Below This Line
  Needed Output
  True 7 Times


// Condition 1

if (num1 >= num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 >= num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 >= num2 && num1 !== num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) <= num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) != num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) > num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 !== 21) {
  console.log("True");
} else {
  console.log("False");
}*/
/*let day = 0 ;
switch (day) {
    case 0:
        console.log("saturday")
        break;
}//saturday
switch (day) {
    case 0:
        console.log("saturday")
        break;
    case 0:
        console.log("sunday")
        break;
}// only one sturday
switch (day) {
    case 0:
        console.log("saturday")
       // break;
    case 0:
        console.log("sunday")
        break;
}//saturday sunday
let day = 2;
switch (day) {
    case 0:
        console.log("saturday")
        break;
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("Monday")
        break;
}//Monday
let day = 5;
switch (day) {
    case 0:
        console.log("saturday")
        break;
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    default:
        console.log("unknown day")
}//unknown day*/
/*let day = 3;
switch (day) {
    case 0:
        console.log("saturday")
        break;
    case 1:
        console.log("sunday")
        break;
    case 2:
    case 3:
        console.log("Monday")
        break;
    default:
        console.log("unknown day")
}// 2 3 case result it Monday
// if default is first (default + break)
let job = "Manger";
let salary = 0;
switch (job){
    case "manager" :
        salary = 8000;
        console.log(`The salary is ${salary}`);
        break;

    case "IT" :
    case "support" :
        salary = 6000;
        console.log(`The salary is ${salary}`);
        break;

    case "Developer" :
    case "Designer" :
        salary = 7000;
        console.log(`The salary is ${salary}`);
        break;
        
    default:
        salary = 4000;
        console.log(`The salary is ${salary}`);

}

//Arrays
let myFriends = ["Ahmad", "Mohammad" , "Sayed" ,["Marwan" , "Ali"]];
console.log(`Hello ${myFriends[0]}`);//Hello Ahmad
console.log(`Hello ${myFriends[2]}`);//Hello Sayed
console.log(`${myFriends[1][2]}`);//h in Mohammad
console.log(`Hello ${myFriends[3]}`);//Hello Marwn,Ali
console.log(`Hello ${myFriends[3][1]}`);//Hello Ali
console.log(`${myFriends[3][1][2]}`);// output i //Ali
console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);// swap Mohammad and Gamal
myFriends[3] = "Sameh";
console.log(myFriends);//swap Marwan , Ali and sameh
myFriends[3] =["sameh" , "Ameer"];
console.log(myFriends);
console.log( typeof myFriends);//object
console.log(Array.isArray(myFriends));// typy of input array //output true

let myFriends = ["Ahmad", "Mohamad" , "Sayed" , "Alaa"]
console.log(myFriends.length);//4
myFriends[6] = "Gamal";
console.log(myFriends);// empty*2 
console.log(myFriends.length);//7
let myFriends = ["Ahmad", "Mohamad" , "Sayed" , "Alaa" , "osama"]
myFriends [myFriends.length] = "Gamal";
console.log (myFriends);//length is 6 
let myFriends = ["Ahmad", "Mohamad" , "Sayed" , "Alaa" , "osama"]
myFriends [myFriends.length - 1] = "Gamal";
console.log (myFriends);//swap osama and  Gamal
let myFriends = ["Ahmad", "Mohamad" , "Sayed" , "Alaa"]
myFriends.length = 3;
console.log (myFriends);// print Ahmad Sayed Alaa
let myFriends = ["Ahmad", "Mohamad" , "Sayed" , "Alaa"];
console.log(myFriends);
myFriends.unshift("osama" , "Nabil");
console.log(myFriends);//start of an array
myFriends.push("samah" , "Eman");
console.log(myFriends);//end of an array
myFriends.shift();
console.log(myFriends);//Removes the first element from an array .. osama is remove 
let first = myFriends.shift();
console.log(myFriends);
console.log(`First Name is ${first}`);//First Name is osama Removes
let last = myFriends.pop();
console.log(myFriends);
console.log(`Last Name is ${last}`);//Remove the last name from an array .. last name is Eman
//Search of the element from an array
let myFriends = ["Ahmad", "Mohamad" , "Sayed" , "Alaa" ,"Ahmad"];
console.log(myFriends);
console.log(myFriends.indexOf("Ahmad"));// output index 0
console.log(myFriends.indexOf("Ahmad",2));// begin search from sayed output index 4
console.log(myFriends.lastIndexOf("Ahmad"));//4
console.log(myFriends.lastIndexOf("Ahmad",-2));//0 mean -1 Ahmad -2 Alaa
console.log(myFriends.includes("Ahmad"));//true
console.log(myFriends.includes("Ahmad",2));//true
if (myFriends.indexOf("osama"=== -1)){
    console.log("Not Found");
}//Not Found
if (myFriends.lastIndexOf("osama"=== -1)){
    console.log("Not Found");
}//Not Found
console.log(myFriends.indexOf("osama"));//-1
console.log(myFriends.lastIndexOf("osama"));//-1
let myFriends = [ 10 , "sayed" , "Mohammad" , "90" ,1000 , 100 , 20 , "10", -20 ,-10 ]
console.log(myFriends);
console.log(myFriends.sort());//-10 -20 10 "10" 100 1000 20 "90" "Mohammad" "sayed"
let myFriends = [ 10 , "sayed" , "Mohammad" , "90" ,9000,1000 , 100 , 20 , "10", -20 ,-10 ]
console.log(myFriends);
console.log(myFriends.sort());//"90" 9000
console.log(myFriends.reverse());
console.log(myFriends.sort().reverse());*/
/*let myFriends = ["Ahmad" , "Sayed" , "Ali" , "Osama" , "Gamal" , "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));//return the new array 
console.log(myFriends.slice(1,3));//Not inclouding end 3 output sayed , ali
console.log(myFriends.slice(-3));// Osama Gamal Ameer
console.log(myFriends.slice(1 , -2));//sayed ali osama
console.log(myFriends.slice(-4 , -2));//Ali Osama
console.log(myFriends);//return the same array 856 
/*myFriends.splice(0 , 0 , "Smer" ,"Samara");
console.log(myFriends);//outpu the start array smer samara....*/
/*myFriends.splice(0 , 1 , "Smer" ,"Samara");//Deleet Ahmad 
console.log(myFriends);
myFriends.splice(1 , 2 , "Smer" ,"Samara");
console.log(myFriends);// start Ahmad smer samara osama ....
let myFriends = ["Ahmad" , "Sayed" , "Ali" , "Osama" , "Gamal" , "Ameer"];
let myNewFriends = ["samar" , "Sameh"];
let schoolFriends = ["Haytham" , "Shady"];
/*let allFriends = myFriends.concat(myNewFriends);
console.log(allFriends);//output array myFriends + myNewFriends
let allFriends = myFriends.concat(myNewFriends,schoolFriends);
console.log(allFriends);//output array myFriends + myNewFriends + schoolFriends
let allFriends = myFriends.concat(myNewFriends,schoolFriends ,"Gameel",[1 , 2]);
console.log(allFriends);//output array myFriends + myNewFriends + schoolFriends + "Gameel" 1,2]
console.log(allFriends.join());// Between ,
console.log(allFriends.join(""));//No space
console.log(allFriends.join(" @ "));//Between @
console.log(allFriends.join("|"));//Between |
console.log(allFriends.join("|").toUpperCase());//Capital latter
let zero = 0;
let counter = 3;
let my = ["Ahmad" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];
console.log(my.slice(zero,++counter).reverse());//Osama Elham Mazero Ahmad
console.log(my.slice(++zero,-(--counter)).reverse());//Elham Mazero
console.log(my[--counter].slice(--zero,counter)+my[++zero].slice(counter));//Elzero
console.log(my[zero].slice(-counter,-zero)+(my[zero].slice(-(--counter))).toUpperCase());//rO
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
let lest = myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

let first = friends.shift();
let last = friends.pop();
console.log(friends); // ["Eman", "Osama"]*/
// For Loop 
/*for( let i = 0 ; i < 10 ; i++){
    console.log(i);
}// 0 until 9
let myFriends = ["Osama" , "Ahmad" , "Sayed" , "Ali" , "Amera"];
console.log(myFriends[0]);//Osama
console.log(myFriends[1]);//Ahmad
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
for (let i = 0; i <5 ; i++){
    console.log(i);
}//output of index 0 1 2 3 4
for (let i = 0; i <5 ; i++){
    console.log(myFriends[0]);
}//osama five times 
for (let i = 0; i <5 ; i++){
    console.log(myFriends[i]);
}//output osama ahmad sayed ali amera
let myFriendss = ["Osama" , "Ahmad" , "Sayed" , "Ali"];
for (let i = 0; i <5 ; i++){
    console.log(myFriendss[i]);
}//output places four undefined
for (let i = 0 ; i < myFriendss.length ; i++){
    console.log(myFriendss[i]);
}// output osama ahmad sayed ali */
let myFriends = [ 1 , 2 , "Osama" , "Ahamad" , 3 , 4 , "Sayed" , 6 , "Ali"];
let onlyNames = [];

for(let i = 0 ; i < myFriends.length ; i++){
    if(typeof myFriends[i] === "string"){
        onlyNames.push(myFriends[i]);
    }
}

console.log(onlyNames);// osama ahmad sayed ali .. only string
/*let products =["Keyborad", "Mouse" ,"Pen" , "Pad" , "Monitor"];

let colors =["Red" , "Green" , "Black"];

let models =[2020 , 2021];

for (let i=0 ; i <products.length ; i++){
    console.log(products[i]);
}// output all products

for (let i=0 ; i <products.length ; i++){
    console.log("#" .repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#" .repeat(15));
    console.log("Colors:");
    for(let j=0 ; j <colors.length ; j++){
        console.log(`- ${colors[j]}`);
    }
    console.log("Models:");
    for(let k=0 ; k <models.length ; k++){
        console.log(`- ${models[k]}`);
    }
}
let products =["Keyborad", "Mouse" ,"Pen" , "Pad" , "Monitor"];

let colors =["Red" , "Green" , "Black"];

for (let i=0 ; i <products.length ; i++){
    if(products[i] === "Pen"){
    break;
    }
    console.log(products[i]);//output keyboard mouse
}
for (let i=0 ; i <products.length ; i++){
    console.log(products[i]);
    if(products[i] === "Pen"){
    break;
    }//output keyborad mouse pen 
}
//break stop of the loop 
let products =["Keyborad", "Mouse" , 10 , 20 , "Pen" , "Pad" , 30 , 40 ,  "Monitor"];

let colors =["Red" , "Green" , "Black"];

for (let i=0 ; i <products.length ; i++){
    if( typeof products[i] === "number"){
    continue;
    }
    console.log(products[i]);//output only string 
}
for (let i=0 ; i <products.length ; i++){
    console.log(products[i]);
    if( typeof products[i] === "number"){
    continue;
    }//output all array 
}
let products =["Keyborad", "Mouse" ,"Pen" , "Pad" , "Monitor"];

let colors =["Red" , "Green" , "Black"];

mainLoop : for (let i =0 ; i < products.length ; i++){
    console.log(products[i]);
    nestedLoop : for( let j =0 ; j < colors.length ; j++){
        console.log(`-${colors[j]}`);
        if (colors[j] === "Green") {
            break nestedLoop;
        }
    }
}// output all of the array products and array colors until Green
mainLoop : for (let i =0 ; i < products.length ; i++){
    console.log(products[i]);
    nestedLoop : for( let j =0 ; j < colors.length ; j++){
        console.log(`-${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}// output only keyboard and Red and Green
let products =["Keyborad", "Mouse" ,"Pen" , "Pad" , "Monitor"];

let colors =["Red" , "Green" , "Blue"];

let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for(let i = 0 ;  i <showCount ; i++){
    document.write(`<div>`);
    document.write(`<h3> [${i+1}]${products[i]}</h3>`);// i+1 begin number 1 not zero
    for(let j = 0 ; j <colors.length ; j++){
        document.write(`<p> ${colors[j]} </p>`);
    }
    document.write(`<p> ${colors.join(" | ")} </p>`);//one line Red | Green | Blue
    document.write(`</div>`);
}
let products =["Keyborad", "Mouse" ,"Pen" , "Pad" , "Monitor", "iphone"];

let index = 0 ;
/*while (index < 10){
    console.log(index);
    index += 1;
}//output 0 until 9 
while (index < 10){
    console.log(index);
    index += 1;
    if(index === 3){
        break;
    }
}//output 0 1 2
while ( index < products.length){
    console.log(products[index]);
    index +=1;
}// output this array */
let products =["Keyborad", "Mouse" ,"Pen" , "Pad" , "Monitor", "iphone"];

let i = 0 ;

do {
    console.log(i);
    i++;
} while (false);

console.log(i);//output 0 1
    



