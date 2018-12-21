* Bulgarian phone numbers validation:

function isPhone(val) {
   var regExp = /^[0-9]+$/;
   if(regExp.test(val)){
       if(val.length < 3) return false;
       if(val.substring(0,1) != "0") return false;
       if(val.substring(0,2) == "00") return false;
       var code = val.substring(0,3);
       if( code == "087" || code == "088" || code == "089" || code == "098")
           return (val.length == 10)?true:false;
       return true;
   }
   else{
       return false;
   }
}