function amountchange(){
document.getElementById("txtamount").value=document.getElementById("rangeamount").value;



}
function yearchange(){
document.getElementById("txtyears").value=document.getElementById("rangeyears").value;



}
function irchange(){

document.getElementById("ir").value=document.getElementById("rangeir").value;

}

function f1()
{
    var p=parseInt(document.getElementById("txtamount").value);
    var n=parseInt(document.getElementById("txtyears").value*12);
    var r=parseFloat(document.getElementById("ir").value)/12/100;
    var emi=p * r * Math.pow(1 + r,n) / Math.pow(1 + r, n) - 1;
    document.getElementById("result").innerHTML="your montly installment is "+"<br><b>"+Math.round(emi)+"</b>"+" ammount is "+p+" for " +n+"  months  "+"  and interest is "+r/12/100+"</br>"  ;

}