window.cipher = {
      encode: function(offset, string){
        debugger
       let stringCode='';
       let NewLetter='';
       let letterCodeNumber=''
       let emptySpace ='';
       

        for (let i=0; i<string.length; i++){
          let letterCodeASCI = string.toUpperCase().charCodeAt(i);
         
          if (letterCodeASCI === 32) {
              emptySpace=' ';
              stringCode += emptySpace;
           }

          else{
            letterCodeNumber=(letterCodeASCI-65 + offset)%26 + 65;
            NewLetter=String.fromCharCode(letterCodeNumber);
            stringCode +=  NewLetter; 
           }
                                 
          }
          
       },
      
       decode: function(offset, string){  
       
     
     }
}
