


function whatsApp_send_datas(){
    const nom = document.getElementById("nom").value;
    const prénom = document.getElementById("prénom").value;
    const sexe = document.getElementById("sexe").value;
    const adresse = document.getElementById("adresse").value;
    const téléphone = document.getElementById("téléphone").value;
    const email = document.getElementById("email").value;
    const numerowhatsApp = "+242065737226";
    const url =  "https://wa.me/" + numerowhatsApp + "?text="
    +"Nom :" + nom + "%0a"
    +"Prénom :" + prénom+ "%0a"
    +"Sexe :" + sexe + "%0a"
    +"Adresse :" + adresse + "%0a"
    +"Téléphone :" + téléphone + "%0a"
    +"Email :" + email + "%0a";

    window.open(url, "_blank").focus()



}