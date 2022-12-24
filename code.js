function Atoi(str, n)
    {
        
         if (str.match(/^[0-9A-Za-z]+$/)) {
         return 0;
         }
        if (n == 1)
        {
            return str[0].charCodeAt() - '0'.charCodeAt();
        }
        return (10 * Atoi(str, n - 1) + str[n - 1].charCodeAt() - '0'.charCodeAt());
    }
     
    let str = “1234”;
    let n = str.length;
      
   console.log(myAtoiRecursive(str, n));






function lagr(num) {
  let maxPrie = -1;
  while (num%2 == 0){
    maxPrie = 2;
    num /= 2;
  }
  for(let i = 3; i<= Math.sqrt(num); i += 2){
    while(num%i == 0){
      maxPrie = i;
      num /= i
    }
  }
  if(num > 2){
    maxPrie = num
  }
  return maxPrie
}



console.log(lagr(13195))
