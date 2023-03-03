document.getElementById("sonuc").style.width="500px";
document.getElementById("sonuc").style.height="500px";
document.getElementById("sonuc").style.backgroundColor= `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`; //ters string işareti 
document.getElementById("sonuc").innerHTML="<b> Merhaba Dünya </b>";
console.log(Math.random());

// var sayi1=document.getElementById("sayi1").value; //sayıyı yakalar
// var sayi2=document.getElementById("sayi2").value; //value sayesinde nesneyi takalar

var sayi1=document.getElementById("sayi1");  //en başta nesnemizin içi boş olduğu için nesnenin kendisi tutarız
var sayi2=document.getElementById("sayi2"); 
var sonuc=document.getElementById("sonuc");
//işlem yapılırken nesneyi tuttuğumuz için içindeki veriye erişmek için value kullanılır

    // console.log(sayi2);
    // console.log(Number(sayi1)+parseInt(sayi2));
    //Number ve parseInt sayesinde number ifadeyi Integer yaparız
    //parseFloat => virgüllü sayı için kullanılır


function hesapla(type)
{
    var sonucText="";

    switch(type)
    {
        case "+":
            sonucText=Number(sayi1.value)+Number(sayi2.value);
            break;

        case "-":
            sonucText=Number(sayi1.value)-Number(sayi2.value);
            break;
            
        case "*":
            sonucText=Number(sayi1.value)*Number(sayi2.value);
            break;
        
        case "/":
            sonucText=Number(sayi1.value)/Number(sayi2.value);
            break;    
    }
   
    sonuc.innerHTML=sonucText;

}

