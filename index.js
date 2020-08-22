

$(".icon").click(function(){
    result();
});






function result(){

    var randomNumber=Math.floor(Math.random()*100)+1;
    var name1=document.querySelector(".input1").value;
    var name2=document.querySelector(".input2").value;
    document.querySelector("h3").innerHTML="'Your Love percentage: " +randomNumber+ "% ";
    if(randomNumber <= 30 ){
        document.querySelector("p").innerHTML="Dont worry a computer cannot decide ur love";
     }
    else if(randomNumber >30 && randomNumber <=80){
        document.querySelector("p").innerHTML="your love is like a ocean: Never ending ";
        document.querySelector(".para").innerHTML='' +name1+ ' and ' +name2+  ' are like flowers and bees!';
    } 
    else if(randomNumber >80 && randomNumber <=99){
        document.querySelector("p").innerHTML="Living examples of Romeo & Juliet";
        document.querySelector(".para").innerHTML='' +name1+ ' and ' +name2+  ' are made for each other!';
    }
    else{
        document.querySelector("p").innerHTML="Enough da! its time to marry";
    }

}