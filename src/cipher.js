window.cipher = {
      encode: function(offset, string){
        debugger
         
        let stringCode='';
        for (let i=0; i<string.length; i++){
         
          let letterCodeASCI = string.toUpperCase().charCodeAt(i);
         
          if (letterCodeASCI === 32) {
              let emptySpace =' ';
              stringCode += emptySpace;
           }

          else{
            let letterCodeNumber = (letterCodeASCI-65 + offset)%26 + 65;
            let NewLetter = String.fromCharCode(letterCodeNumber);
            stringCode +=  NewLetter; 
           }
                                 
          }
          return stringCode;
       },
      
       decode: function(offset, string){  
          let stringDecode = ' ';

          for(let i = 0; i<string.length; i++){
         
            let letterCodeASCI = string.toUpperCase().charCodeAt(i);

                if (letterCodeASCI ===32){
                  let emptySpace ='';
                  stringDecode += emptySpace;
                 }

                else{
                  let letterCodeNumber = (letterCodeASCI-65 - offset)%26 + 65;
                  let NewLetter = String.fromCharCode(letterCodeNumber);
                  stringDecode +=  NewLetter; 
                 }
                               
          }
         return stringDecode;
         } 
     
}
