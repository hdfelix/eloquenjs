var x = 0;
var output = '';

for(x=1; x<8; x++){
  output = '';
  do{
    output += 'x';
  }while(output.length < x);
  console.log(output);
}
