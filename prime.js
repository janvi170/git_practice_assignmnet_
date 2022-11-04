function checkPrime(num){
let factor=0;
for(i=1;i<=num;i++){
if(num%i==0){
factor++;
}
if(factor==2){
return true;
}
return false;
}
let ans=checkPrime(7);

if(ans==true){
console.log("Prime Number");
}else{
console.log("Not a Prime Number");
}