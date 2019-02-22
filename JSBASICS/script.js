/*//decision making
var age=18;
if(age<13){
    console.log("minor");
}
else{
    console.log("major");
}
//con?true:false
age>=18?console.log("major"):console.log("minor");
//function
function kruthi(fname,lname){
    console.log(fname+' '+lname);
}
kruthi('Kruthi','Y M');
//array--similar data type not necessary
var names=['kruthi','anjali','anouksha'];
console.log(names[2]);
console.log(names.length);

names.push("Ajay");
names.unshift("Arun");
names.pop();
console.log(names);
*/
//Challenge 1
var markmass,johnmass,markheight,johnheight;
markmass=50;
johnmass=30;
markheight=160;
johnheight=160;
var bmimark=markmass/(markheight*markheight);
var bmijohn=johnmass/(johnheight*johnheight);
var bmi=bmimark>bmijohn;
console.log(bmi);
if(bmimark>bmijohn)
console.log("Is marks bmi greater than johns?True");

//Challenge 2
var hotel1=124;
var hotel2=48;
var hotel3=268
var tip;
function tipcalculator(bill){
if(bill<50){
tip=0.2*bill;
}
else if(50<bill<200){
    tip=0.15*bill;
}
else{
    tip=0.1*bill;
}
return tip;
}
tip1=tipcalculator(hotel1);
tip2=tipcalculator(hotel2);
tip3=tipcalculator(hotel3);
var tips=[tip1,tip2,tip3];
var bills=[hotel1+tip1,hotel2+tip2,hotel3+tip3]
console.log(tips);
console.log(bills);



