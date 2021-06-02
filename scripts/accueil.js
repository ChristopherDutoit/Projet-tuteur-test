var images=[];
images[0]="images/ConventionFond.jpg";
images[1]="images/ConventionFond2.jpg";
images[2]="images/ConventionFond3.jpg";
 var i= -1*1;
 var timer=5000;
var suiv;

 function imagesuiv(stop){
   console.log(i);

if(i==-1){
  timer = 15000;
  document.getElementById('imagediapo').style.display = "none";
  document.getElementById('pub').style.display = "block";
  document.getElementById('pub').src="https://www.youtube.com/embed/Olj-4K5qf00?rel=0&autoplay=1";
  stop = "false";
}
    if(i<images.length-1){
      i++;
      timer = 5000;
      document.getElementById('pub').src="";
        document.getElementById('pub').style.display = "none";
      document.getElementById('imagediapo').src = images[i];
      document.getElementById('imagediapo').style.display = "block";

    }
    else{
      i= -1*1;

    }

console.log(stop)
  if (stop == false){
   setTimeout("imagesuiv(false)", timer);
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
