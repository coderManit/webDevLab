//Q1)
num = prompt("Please enter the number: ");
 
if(num%2) console.log("Number is odd");
else console.log("The number is even");
 
//Q2)
let num = prompt("Enter the number");
for(let i = 1; i<= 10; i++){
  console.log(i+ '*' + num + ' = ' + i*num);
}
 
//Q3)
function fact(num){
    let ans = 1;
    for(let i = 1;i<=num;i++){
      ans*=i;
    }
  
    return ans;
}
 
num = prompt("Enter the number");
console.log(fact(num));
 
//Q4)
function fib(num){
  if(num <= 1) return num;
  return fib(num-1)+fib(num-2);
}
 
 
n = prompt("Enter the number");
for(let i = 0; i<n;i++){
  console.log(fib(i));
}
 
//Q5)
let score = [100, 80, 88, 93, 69];
//rules: 
//max marks == 100
//A->90% or above
//B->80% to 89%
//C->60% to 79%
 
function getGrade(score){
  if(score>=90) return 'A';
  if(score>=80) return 'B';
  if(score>=60) return 'C';
}
 
let len = score.length;
 
for(let i =0;i<len;i++){
    let m = i+1;
    console.log("The percentage and grade of "+m+"th subject is: " + score[i]+"%"+" "+getGrade(score[i]));
}

//Q6
s = prompt("Enter the string 1");
isPalin = 1;
for(let i=0;i<s.length/2;i++){
  if(s[i] != s[s.length-i-1]){
    isPalin = 0;
    break;
  }
}

if(isPalin) console.log("String is palindrome");
else console.log("String is not palindrome");
