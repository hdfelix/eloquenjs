var x = 0;
var fizz, buzz = false;
for(x=1; x <=100; x++){
  fizz = false;
  buzz = false;
  if(x % 3 === 0) {
    fizz = true;
  }
  
  if(x % 5 === 0) {
    buzz = true;
  }
  
  if (fizz === true && buzz === false){
    console.log('Fizz')  ;
  }else if(fizz === false && buzz === true){
    console.log('Buzz');
  }else if(fizz && buzz){
    console.log('FizzBuzz');
  }else{
    console.log(x);
  }
}

for(x=1; x <=100; x++){
  fizz = false;
  buzz = false;
  if(x % 3 === 0){
    fizz = true;
  }
  
  if(x % 5 === 0){
    buzz = true;
  }
  
  if (fizz && !buzz){
    console.log('Fizz');
  }else if(!fizz && buzz){
    console.log('Buzz');
  }else if(fizz && buzz){
    console.log('FizzBuzz');
  }else{
    console.log(x);
  }
}
