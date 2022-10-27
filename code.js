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
