//Variable compt_trad pour compter le nombre de clicks sur le bouton pour traduire
var compt_trad=0*1;

//Variable a pour le parcours du nav et autres
var a=0*1;

//La fonction pour traduire en anglais ou re-mettre en français
function trad(val_trad) {
  //On incrémente 1 au compt_trad
  compt_trad++;

  //Traduction du nav en français/anglais (a part parce que sinon ça vas être chiant)
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
    document.getElementById("btn-trad").value="English Translation";
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
  //trad en anglais
  if (compt_trad%2!=0) {
    switch (val_trad) {
      case 2:
        document.getElementById("desc_expo_text").innerHTML="At the Fiction Fans convention, everyone can be exposant of the fiction work of art of his/her choise.";
        document.getElementById("desc_expo_link").innerHTML="Be an Exposant";
        document.getElementById("expo-DS").innerHTML="FromSoftware <br> DARK SOULS <br> 2011-2016 <br> Hidetaka Miyazaki <br> All platforms <br> Félix Viart";
        document.getElementById("expo-FF").innerHTML="Sqaure Enix <br> Final Fantasy <br> 1987-2020 <br> Hironobu Sakaguchi <br> All platforms <br> Théo Abrassart";
        break;

      case 3:
        
        break;
    }
  }
  //trad en francais
  else {
    switch (val_trad) {
      case 2:
        document.getElementById("desc_expo_text").innerHTML="A la convention des Fiction fans, tout le monde peut devenir exposant de l'oeuvre de fiction de son choix.";
        document.getElementById("desc_expo_link").innerHTML="Devenir un exposant";
        document.getElementById("expo-DS").innerHTML="FromSoftware <br> DARK SOULS <br> 2011-2016 <br> Hidetaka Miyazaki <br> Toutes plateformes <br> Félix Viart";
        document.getElementById("expo-FF").innerHTML="Sqaure Enix <br> Final Fantasy <br> 1987-2020 <br> Hironobu Sakaguchi <br> Toutes plateformes <br> Théo Abrassart";
        break;

      case 3:
        alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        break;
    }
  }
}

//function de trad
//valeur propre par pages
//Switch de la valeur
//et on traduit avec le nav en premier hors du switch

//Variables utilisées

//Whiles
//a
