var images=[];
images[0]="images/ConventionFond.jpg";
images[1]="images/ConventionFond2.jpg";
images[2]="images/ConventionFond3.jpg";
images[3]="images/ConventionFond4";
 var i=0;
 var timer=5000;
var suiv;

 function imagesuiv(stop){
   console.log(i);
   document.getElementById('imagediapo').src = images[i];
    if(i<images.length-1){
      i++;
    }
    else{
      i=0;
    }

console.log(stop)
  if (stop == false){
  suiv = setTimeout("imagesuiv(false)", timer);
  }
 }

 function imageprec(){
   if(i>0){
     i--;
   }
   else{
     i=3;
   }
   console.log(i);
   document.getElementById('imagediapo').src = images[i];
}


 window.onload=imagesuiv(false);
