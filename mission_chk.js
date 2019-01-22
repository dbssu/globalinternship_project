window.onload = function(){
    var passform = document.getElementById("passform");
    passform.onsubmit = function(){
        var passwd = document.getElementById("passwd").value;
        var answer = 1234;

        if(passwd == answer){
            alert("ok");
        }
        else{
            alert("nope");
            passwd="";
            return false;
        }
    }
}