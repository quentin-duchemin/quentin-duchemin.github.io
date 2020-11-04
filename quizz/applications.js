function myFunction(int) {
  	document.getElementById("TRUE"+int).style.backgroundColor =  '#00FF00' ;
  	document.getElementById("FALSE"+int).style.backgroundColor =  '#D3D3D3' ;
    var x = document.getElementById("true"+int).value;
    document.getElementById("demo"+int).innerHTML = "";
    $("#demo"+int).append(x);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]) 
}
function myFunction2(int) {

    document.getElementById("FALSE"+int).style.backgroundColor ='#FF0000';
    document.getElementById("TRUE"+int).style.backgroundColor =  '#D3D3D3' ;

    var x = document.getElementById("false"+int).value;
    document.getElementById("demo"+int).innerHTML = "";
    $("#demo"+int).append(x);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]) 
}
