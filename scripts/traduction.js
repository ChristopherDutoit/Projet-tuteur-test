//Variable compt_trad pour compter le nombre de clicks sur le bouton pour traduire
var compt_trad=0*1;

//Variable a pour le parcours du nav et autres
var a=0*1;

//Variable b pour le parcours des boutons dans la page des documents
var b=0*1;

//La fonction pour traduire en anglais ou re-mettre en français
function trad(val_trad) {
  //On incrémente 1 au compt_trad
  compt_trad++;

  //Traduction du nav en français/anglais (a part parce que sinon ça vas être chiant)
  //Si le compt_trad est impair, on vas deander à traduire en anglais
  if (compt_trad%2!=0) {
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
      //Page de l'index
      case 1:
        document.getElementById("btn-trad").src="./images/Fr-flag.png";
        document.getElementById("btn-trad").alt="Traduction Française";

        document.getElementById("txt-pres-index").innerHTML="<h3>Our convention is based on Fantastic, Adventure, Horror, Fantasy, Science-Fiction and Epic themes. <br> It groups fiction fans present in the French region of \"Pas-de-Calais\" and its surroundings. <br> It has for goal to present fictions between fans. <br> This convention will be open the 18th of december, 2021 and will be closed the 20th of december, 2021. <br> The convention will  in the building \"Lille Grand Palais\". <br> If you want to present your favorite work of art, the applications for the exibitions are opened </h3>";
        document.getElementById("partenaires-title").innerHTML="Our sponsors";
        break;

      //Page sur les exposants
      case 2:
        document.getElementById("btn-trad").src="../images/Fr-flag.png";
        document.getElementById("btn-trad").alt="Traduction Française";

        document.getElementById("desc_expo_text").innerHTML="At the Fiction Fans convention, everyone can be exposant of the fiction work of art of his/her choise.";
        document.getElementById("desc_expo_link").innerHTML="Be an Exposant";
        document.getElementById("desc_expo_link").style.marginLeft="-143px";
        break;

      //Page sur les documents
      case 3:
        //traduction des boutons de téléchargement
        b=1;
        while (b<7) {
          document.getElementById("btn-dl-"+b).innerHTML="Download";
          document.getElementById("btn-dl-"+b).style.marginLeft="-335px";
          b++;
        }
        document.getElementById("btn-trad").src="../images/Fr-flag.png";
        document.getElementById("btn-trad").alt="Traduction Française";
        break;

      case 4:
        document.getElementById("map-tip").innerHTML="To access the convention, and if you lives in Lille we tip you to join the convention by walking or with the Illevia transport network. <br> It'll be benefic for you and the planet. <br> For the peoples that lives in foreign countries or far away form the convention, we tip you to take the train. <br> The metro and bus are also avalable and not far from the convention. <br> For the metro, you have to get of at the station named \"Lille grand palais\" and to walk several meters. <br> For the bus, there is an bus stop named \"Grand Palais\" (on the line 18) just besides the metro station. <br> For the exposants, our backstages will be opened for several days and even several hours before the beggining of the convention for you to instal your stand. <br> ";
        break;
    }
  }
  //trad en francais
  else {
    switch (val_trad) {
      //Page de l'index
      case 1:
      document.getElementById("btn-trad").src="./images/Engl_US-flag.png";
      document.getElementById("btn-trad").alt="English Translation";

      document.getElementById("txt-pres-index").innerHTML="<h3> Notre convention est basée sur les thèmes Fantastique, Aventures, Horrors, Fantasy, Science Fiction et épopée.<br> Elle rassemble les fans de fiction présent dans le nord pas de calais et ces alentours. <br>Elle a pour but de présenter les fictions entre fans.<br> Elle a lieu du 18 décembre 2021 jusqu'au 20 décembre 2021. <br>Elle prendra place au grand palais de Lille. <br>Si tu veux présenter ton oeuvre préférer les candidatures pour les exposants sont encore ouverte </h3>";
      document.getElementById("partenaires-title").innerHTML="Nos partenaires";
      break;

      //Page sur les exposants
      case 2:
        document.getElementById("btn-trad").src="../images/Engl_US-flag.png";
        document.getElementById("btn-trad").alt="English Translation";

        document.getElementById("desc_expo_text").innerHTML="A la convention des Fiction fans, tout le monde peut devenir exposant de l'oeuvre de fiction de son choix.";
        document.getElementById("desc_expo_link").innerHTML="Devenir un exposant";
        document.getElementById("desc_expo_link").style.marginLeft="-186px";
        break;

      //Page sur les documents
      case 3:
        b=1;
        while (b<7) {
          document.getElementById("btn-dl-"+b).innerHTML="Télécharger";
          document.getElementById("btn-dl-"+b).style.marginLeft="-343px";
          b++;
        }

        document.getElementById("btn-trad").src="../images/Engl_US-flag.png";
        document.getElementById("btn-trad").alt="English Translation";
        break;

      case 4:
        document.getElementById("map-tip").innerHTML="Pour accéder à la convention, si vous habitez à lille ,nous vous conseillons de venir en marchant. <br> Cela aidera la nature et votre physique. <br> Pour ceux qui ont la flemme comme nous ,nous vous conseillons de venir en train pour plus de pratique. <br> Il est aussi possible de venir en bus ou en métro. <br> Pour le métro decender à l'arret Lille grand palais, vous devrez juste marcher quelque mètre a faire.<br> Pour le bus ,un arret de bus est placer juste à coté de l'arret du métro.<br> Pour les exposants les locaux vous seront ouvert quelque jours ou heures <br>avant l'exposition afin de vous permettre votre installation.";
        break;
    }
  }
}

//Variables utilisées

//Whiles
//a
//b

//autres
//val_trad
//compt_trad
