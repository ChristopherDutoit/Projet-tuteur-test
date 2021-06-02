var images=[];
images[0]="images/ConventionFond.jpg";
images[1]="images/ConventionFond2.jpg";
images[2]="images/ConventionFond3.jpg";
 var i= -1;
 var timer=5000;
var suiv;

 function imagesuiv(stop){


if(i== -1){
   console.log(i);
  timer = 35000;
  document.getElementById('imagediapo').style.display = "none";
  document.getElementById('pub').style.display = "block";
  document.getElementById('pub').src="https://www.youtube.com/embed/9R1K0BzetwA?rel=0&autoplay=1";


} else{
      timer = 5000;
      document.getElementById('pub').src="";
        document.getElementById('pub').style.display = "none";
         console.log(i);
      document.getElementById('imagediapo').src = images[i];
      document.getElementById('imagediapo').style.display = "block";


    }
if(i<images.length-1){
    i++;}
    else{
      i=-1;
    }

  if (stop == false){
    console.log(stop)
    console.log(timer);
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

function fullscreen(){
  var urlimg=document.getElementById('imagediapo').src;
  document.getElementById('imagepopup').src = urlimg;
  document.getElementById('overlay').style.display ='block';


}

function closeFullscreen(){
document.getElementById('overlay').style.display ='none';

}
 window.onload=imagesuiv(false);
