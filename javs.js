/*
    function Next(){
        document.getElementById("p1").innerHTML = document.getElementById("p2").innerHTML;
    }
*/

function requiredMaxValidate(){
    var value = document.forms["main"]["name"].value;
    if (value == ""){
        alert("Please Enter Your name!");
        return false;
    }

    // var max = document.forms["main"]["name"].value;
    if (value.length > 25 || value.length < 5){
        alert("Make sure your name is less than 25 characters and more than 5 characters!");
        return false;
    }
}
