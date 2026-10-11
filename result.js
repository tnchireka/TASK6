function gettotal(m1,m2,m3){
    return m1+m2+m3;
}
function getaverage(total){
    return total/3;
}
function calculate(){
    let sname=prompt("Enter student name:");
    let m1=Number(prompt("Enter Marks In Subject 1:"));
    let m2=Number(prompt("Enter Marks In Subject 2:"));
    let m3=Number(prompt("Enter Marks In Subject 3:"));
if (!(m1>=0&&m1<=100)||!(m2>=0&&m2<=100)||!(m3>=0&&m3<=100)){
    alert("Error:marks must be between 0 and 100");
}
let total=gettotal(m1,m2,m3);
let average=getaverage(total);
let grade;
if (average>=90){
    grade="A";
}
else if(average>=75){
    grade="B";
}
else if(average>=50){
    grade="C";
}
else{
    grade="F"
}
alert("Name:" + sname +"\nTotal:" + total + "\nAverage:" + average + "\nGrade:" + grade);
}
calculate();
if(confirm("Do you want to calculate another student's result?")){
    calculate();
}