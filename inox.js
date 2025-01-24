function details()
{
    document.getElementById("MovieDetails").style.display="block";
    document.getElementById("get").style.display="none";

    document.getElementById("lblname").innerHTML=document.getElementById("selectmovie").value;
    document.getElementById("lbltheatre").innerHTML=document.getElementById("selecttheatre").value;
    document.getElementById("lbldate").innerHTML=document.getElementById("selectdate").value;


}