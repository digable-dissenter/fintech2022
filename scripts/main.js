function myFunction() {

    var txt;

    if (confirm("Please press a button!")) {

        txt = "You pressed OK!"

    } else {

        txt = "You pressed Cancel!"

    }

    document.getElementsById("demo").innerHTML = txt;
    
} 
