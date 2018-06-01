window.cipher = {
      encode: function(offset, string){
       let stringCode='';
       let NewLetter='';
       let letterCodeNumber=''
       stringCode=stringcode+NewLetter;

        for (let i=0; i<string.length; i++){
          let letterCodeASCI = string.toUpperCase().charCodeAt(i);
         
          if (letterCodeASCI===32) {
              stringcode='';
           }
      
          else{
            letterCodeNumber=(letterCodeASCI-65 + offset)%26 + 65;
            NewLetter=string.fromCharcode(letterCodeNumber);
           }
           return stringCode
          }
         
       }

}
