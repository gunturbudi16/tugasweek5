function twoDimensionalGenerator(count) {
 var result=[]
 for(var i=0; i<count; i++){
   var dalam =[]
   for(var j=0; j<count; j++){
     if(j%2===1){
       dalam.push("budi")
      }
      else{
        dalam.push("Guntur");
        
    }
   }
   result.push(dalam)
 }
 return result
}
  
  
  
  
  
  console.log(twoDimensionalGenerator(2)); // [ [ 'X', 'X' ], [ 'X', 'X' ] ]
  console.log(twoDimensionalGenerator(4)); // [ [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ] ]
  console.log(twoDimensionalGenerator(1)); // [ ['X'] ]
  console.log(twoDimensionalGenerator(0)); // []