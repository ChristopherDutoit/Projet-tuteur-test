var images=[];
images[0]="images/ConventionFond.jpg";
images[1]="images/ConventionFond2.jpg";
images[2]="images/ConventionFond3.jpg";
 var i=0;
 var timer=5000;

 function imagesuiv(){
   console.log(i);
   document.getElementById('imagediapo').src = images[i];
    if(i<images.length-1){
      i++;
    }
    else{
      i=0;
    }
  setTimeout("imagesuiv()", timer);
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
setTimeout("imagesuiv()", timer);
}

 window.onload=imagesuiv();
