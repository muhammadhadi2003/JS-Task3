// Chapter 12-13

// 1)
/*var char=prompt("Enter value")
if (char >= "A" && char <="Z"){
    alert(char + " is Uppercase")
}
else if (char >= "a" && char <= "z") {
    alert(char + " is Lowercase");
}
else if (char >= "0" && char <= "9") {
    alert(char + " is a Number");
}
else{
    alert("The character is neither number nor alphabet")
}*/

//2)
/*var a=+prompt("Enter Num1")
var b=+prompt("Enter Num2")
if(a==b){
    alert("num1 is equal to num2")
}
else if(a>b){
    alert("num1 is greater than num2")
}
else{
    alert("num2 is greater than num1")
}*/

//3)
/*var num=+prompt("Enter number")
if (num==0){
    alert("Number is Zero")
}
else if(num>0){
    alert("Number is Positive")
}
else{
    alert("Number is Negative")
}*/

//4)
/*var char = prompt("Enter character");
var vowels=char.toLowerCase()

if (vowels == "a" || vowels == "e" ||vowels == "i" ||vowels == "o" ||vowels == "u"){
    alert(char+" is a vowel");
}
else {
    alert(char+" is not a vowel");
}
*/

//5)
/*var corpass="SaylaniMassIT"
var inppass=prompt("Enter Password")
if (inppass.length==0){
    alert("Enter password")
}
else if(inppass==corpass){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect Password")
}*/

//6)
/*var greeting;
var hour = 13;
if (hour < 18) {
    alert(greeting = "Good day");
}
else{
    alert(greeting = "Good evening");
}*/

//7)
/*var time = prompt("Enter time in 24hr format(1900=7pm)");
if (time.length < 4) {
    alert("Enter time in given form");
} 
else if (time >= 0000 && time < 1200) {
    alert("Good Morning");
} 
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} 
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} 
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
} 
else {
    alert("Invalid time");
}*/

// chapter 14-16

//1)
//var snames=[]
//2)
//var snames={}
//3)
//var string=["Saylani","Mass","IT","Program"]
//4)
//var num=[1,2,3,4]
//5)
//var bool=[true,false]
//6)
// var mix=[true,"Hello",3,false,5,"hi"]
//7)
/*var qual=["SSC","HSC","BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:")
document.write("<br>")
for (let i=0;i<qual.length;i++){
    document.write((i+1)+")"+qual[i])
    document.write("<br>")
}*/
//8)
/*var sname=["Michael","John" ,"Tony"]
var marks=[320,230,480]
var tmarks=500
for(let i=0;i<sname.length;i++){
    document.write("Score of "+sname[i]+" is "+marks[i]+" .Percentage: "+((marks[i]/tmarks)*100)+"%")
    document.write("<br>")
}*/

//9)
/*var color=["red","green","blue"]
document.write(color)
document.write("<br>")
var addbegin=prompt("Enter color to add in beginning")
color.unshift(addbegin)
document.write(color)
document.write("<br>")
var addend=prompt("Enter color to add in end")
color.push(addend)
document.write(color)
document.write("<br>")
color.unshift("yellow","aqua")
document.write(color)
document.write("<br>")
color.shift();
document.write(color);
document.write("<br>")
color.pop();
document.write(color)
document.write("<br>")
var inpind=+prompt("Enter index to input color")
var inpindcol=prompt("Enter color to add at the index")
color.splice(inpind,0,inpindcol)
document.write(color)
document.write("<br>")
var delind=+prompt("Enter index to delete colors")
var delcolnum=+prompt("Enter amount of colors to delete")
color.splice(delind,delcolnum)
document.write(color)*/

//10)
/*var s_scores=[320,230,480,120]
document.write("Scores of student: ",s_scores)
document.write("<br>")
s_scores.sort()
document.write("Ordered scores of student: ", s_scores)*/

//11)
/*var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selcities=[]
for (let i = 0; i < 3; i++) {
    if (i < cities.length) {
    selcities.push(cities[i]);
    }
}
document.write(cities)
document.write("<br>")
document.write(selcities)*/

//12)
/*var arr = ["This","is","my","cat"]
document.write("Array:")
document.write("<br>")
document.write(arr)
document.write("<br>");
document.write("String:")
document.write("<br>")
document.write(arr.join(" "))*/

//13)
/*var devices=[]
devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Monitor")
document.write("Devices:")
document.write("<br>")
document.write(devices)
document.write("<br>")
// either this
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
document.write("<br>")
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
document.write("<br>")
document.write("Out:")
document.write("<br>");
document.write(devices.shift())
document.write("<br>")
document.write("Out:")
document.write("<br>");
document.write(devices.shift())*/
// or this
/*for (let i=0;i<devices.length;i++){
    document.write("Out:")
    document.write("<br>")
    document.write(devices[i])
    document.write("<br>");*/

//14)
/*var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("Devices:");
document.write("<br>");
document.write(devices);
document.write("<br>");
// either this 
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
document.write("<br>");
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
document.write("<br>");
document.write("Out:");
document.write("<br>");
document.write(devices.pop());
document.write("<br>");
document.write("Out:");
document.write("<br>");
document.write(devices.pop());*/
// or this
/*for (let i=(devices.length)-1;i>=0;i--){
    document.write("Out:");
    document.write("<br>")
    document.write(devices[i])
    document.write("<br>");
}*/

// 15)
/*var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write(
        "<option>" + manufacturers[i] + "</option>"
    );
}
document.write("</select>");*/

