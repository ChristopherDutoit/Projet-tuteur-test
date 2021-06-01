//Variable compt_trad pour compter le nombre de clicks sur le bouton pour traduire
var compt_trad=0*1;

//Variable a pour le parcours du nav et autres
var a=0*1;

//La fonction pour traduire en anglais ou re-mettre en français
function trad() {
  //On incrémente 1 au compt_trad
  compt_trad++;

  //Si le compt_trad est impair, on vas deander à traduire en anglais
  if (compt_trad%2!=0) {
    //On modifie le bouton
    document.getElementById("btn-trad").value="Traduction en Français";
    //On reset le a pour le parcours du nav
    a=0;
    //On parcours le nav pour le traduire
    while (a<=5) {
      //Puis on fais un switch car c'est plus propre et optimisé
      switch (a) {
        case 1:
          document.getElementById("nav-"+a).innerHTML="Home";
          break;
        case 2:
          document.getElementById("nav-"+a).innerHTML="Exibitions";
          break;
        case 3:
          document.getElementById("nav-"+a).innerHTML="Efficient infos";
          break;
        case 4:
          document.getElementById("nav-"+a).innerHTML="FAQ";
          break;
        case 5:
          document.getElementById("nav-"+a).innerHTML="Documents";
          break;
      }
      //Et on incrémente a
      a++;
    }
  }

  //Sinon, on re-met en fraçais
  else {
    document.getElementById("btn-trad").value="English Traduction";
    a=0;

    while (a<=5) {
      switch (a) {
        case 1:
          document.getElementById("nav-"+a).innerHTML="Accueil";
          break;
        case 2:
          document.getElementById("nav-"+a).innerHTML="Exposants";
          break;
        case 3:
          document.getElementById("nav-"+a).innerHTML="Info-Pratique";
          break;
        case 4:
          document.getElementById("nav-"+a).innerHTML="FAQ";
          break;
        case 5:
          document.getElementById("nav-"+a).innerHTML="Documents";
          break;
      }
      //Et on incrémente a
      a++;
    }
  }



}

//Variables utilisées

//Whiles
//a
