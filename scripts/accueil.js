
var images=[];
images[0]="<iframe id='pub' width='90%'height='auto'src='https://www.youtube.com/embed/9R1K0BzetwA?rel=0&autoplay=1'  title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'   allowfullscreen></iframe>";
images[1]="<img id='imagediapo' src='images/ConventionFond.jpg 'alt='image de convention' onclick='fullscreen()'>";
images[2]="<img id='imagediapo' src= 'images/ConventionFond2.jpg' alt='image de convention' onclick='fullscreen()'>";
images[3]="<img id='imagediapo' src='images/ConventionFond3.jpg'calt='image de convention' onclick='fullscreen()'>";
 var i= 0;
 var timer=35000;
var suiv;

 function imagesuiv(){
   console.log(i);
    document.getElementById('image_diapo').innerHTML = images[i];
    suiv = setTimeout("imagesuiv()", timer);
   if(i<images.length-1){
      timer=5000;
           i++;}
  else{
      i=0;
      timer=35000;
    }

console.log(timer);
console.log(i);
 }

function btnSuiv(){
  clearTimeout(suiv);
  imagesuiv();
}

 function imageprec(){
   clearTimeout(suiv);
   if (i>1){
     i-=2;}
        else{
          if (i == 0){
            i=images.length-2;
          }else{
       i= images.length-1;}
     }
   imagesuiv();

  }



function fullscreen(){
  var urlimg=document.getElementById('imagediapo').src;
  document.getElementById('imagepopup').src = urlimg;
  document.getElementById('overlay').style.display ='block';


}

function closeFullscreen(){
document.getElementById('overlay').style.display ='none';

}
 window.onload=imagesuiv();
