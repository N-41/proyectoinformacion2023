var last = "xs";
    console.log("Hello world!");
    document.getElementById("xs").addEventListener('click', function(){
        document.getElementById(last).className= "productSize";
        document.getElementById("xs").className= "productSize selected";
        last = "xs";
    });
    document.getElementById("s").addEventListener('click', function(){
        document.getElementById(last).className= "productSize";
        document.getElementById("s").className= "productSize selected";
        last = "s"
    });
    document.getElementById("m").addEventListener('click', function(){
        document.getElementById(last).className= "productSize";
        document.getElementById("m").className= "productSize selected";
        last = "m"
    });
    document.getElementById("l").addEventListener('click', function(){
        document.getElementById(last).className= "productSize";
        document.getElementById("l").className= "productSize selected";
        last = "l";
    });