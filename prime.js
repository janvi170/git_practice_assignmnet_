function checkPrime(num){
for(i=1;i<=num;i++){
if(num%i){
return true;
}
}
return false;
}
checkPrime(7);