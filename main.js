function isNumber(event) {
   // var pattern= /^[-]*/;
    if (event.keyCode < 48 || event.keyCode > 57 && !event.keyCode.match(pattern)) {
        return false;
    }
    return true;
}

function formvalidation() {
    var persion= /^[\u0600-\u06FF\s]+$/;
    var email =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass =/^[a-zA-Z0-9-+!#$*= ]*/;
    var birth= /['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][/]/;
    var name = document.getElementsByName("uiname")[0].value;
    var family = document.getElementsByName("uifamily")[0].value;
    var enuser = document.getElementsByName("uiename")[0].value;
    var emailaddress = document.getElementsByName("uiemail")[0].value;
    var Address = document.getElementsByName("uiaddress")[0].value;
    var nationalcode = document.getElementsByName("uicode")[0].value;
    var password = document.getElementsByName("uipass")[0].value;
    var passagain = document.getElementsByName("uiagain")[0].value;
    var birthdate = document.getElementsByName("uidate")[0].value;
    

    var selectedStatus= null;
    for (var i=0; i < document.getElementsByName("uistatus").length; i++) {
        if (document.getElementsByName("uistatus")[i].checked) {
            selectedStatus = document.getElementsByName("uistatus")[i].value;
        }
    }

    var s = document.getElementsByName("uigender")[0];
    var SelectedgenderCode = s.options[s.selectedIndex].value;


    var errorMessage = "";
    
    if(name!="" && !name.match(persion)){
        errorMessage+= "الفبای ورودی فارسی کاربر<br/>";
    }

    if (family!= "" && !family.match(persion)){
        errorMessage+="  الفبای ورودی فارسی فامیلی <br/>";
    }
    
    if(enuser!= "" && enuser.match(persion))
        errorMessage+=  "الفبای ورودی انگلیسی کاربر <br/>";


    if(emailaddress!= "" && !emailaddress.match(email))
        errorMessage+= "طبق الگوی ایمیل وارد کنید <br/>";

    
    if(Address!="" && !Address.match(persion))
         errorMessage+= "الفبای ورودی فارسی آدرس <br/>";

    if (nationalcode!="" && nationalcode.length != 12){
        errorMessage+= " کد ملی ۱۰ رقم و طبق الگو<br/>";
    }
     
    if(password!="" && !password.match(pass) && password.match(persion)){
        errorMessage+= "رمز عبور نامعتبر <br/>";
    }
    
   if(passagain!="" && passagain!=password){
        errorMessage+= "عدم تایید رمز عبور <br/>";
    }
    
    if(birthdate!="" && birthdate.match(birth)){
        errorMessage+= "الفبای انگلیسی تاریخ تولد  و در بازه۱۳۱۰ تا ۱۳۹۰ <br/>";
    }

    /*else if(birthdate.value <1310 || birthdate.value >1390){
        errorMessage+= "سال تولد بین ۱۳۱۰ و ۱۳۹۰ <br/>";
    }*/
    

    if (errorMessage!= ""){
        document.getElementById("uimessage1").innerHTML = errorMessage;
        alert("Sorry, You have some errors.. Check the error messages on top of the page." +"\n");
        return false;
        
        
    }
    
    return true;
    
    
}
