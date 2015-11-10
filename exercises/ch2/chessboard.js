// Part a (for an 8 x 8 board)
line = '# # # #\n';
board = '';
for(x=0; x < 8; x++){
  if(x % 2 == 0)
    board += ' ';
  
  board += line;
}
console.log(board);


// Part b (for any board size)
size = prompt('Enter the size of the board: ');
line = '';
board = '';

// Create a line
for(x = 0; x < size; x++){
  if(x % 2 == 0)
   line += '#';
  else
    line += ' ';
}
line += '\n';

// generate the board
for(x=0; x < size; x++){
  if(x % 2 == 0)
    board += ' ';
  
  board += line;
}

// print the board
console.log(board);
