window.onload = function(){
    var passform = document.getElementById("passform");
    passform.onsubmit = function(){
        var passwd = document.getElementById("passwd").value;
        var answer = 1234;
        var result = document.getElementById("result").innerHTML="";

        if(passwd == answer){
            alert("ok");
            result = "비밀번호가 일치합니다.";
        }
        else{
            alert("nope");
            passwd="";
            return false;
        }
    }
}