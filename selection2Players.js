// // Version 2 joueurs Affichage des avatars
 initializeAvatar2players(avatarNumber)
 function initializeAvatar2players(avatarNumber){
     for (j=1; j<3; j++){
         for (let i=1; i<=avatarNumber; i++){
         divAvatar = document.createElement("li");
         avatarUrl = `url(avatars/${i}.png)`;
         console.log(avatarUrl);
         divAvatar.style.backgroundImage = avatarUrl;
         divAvatar.style.backgroundPosition = "center center";
         divAvatar.setAttribute("onclick", `selecter${j}(${i})`);
         divAvatar.setAttribute("id","avatar"+i);
         divAvatar.style.height = "150px";
         divAvatar.style.width = "150px";
         document.getElementById("avatarSelector"+j).appendChild(divAvatar);
     }}}

// // Avatars clickables 2 joueurs
 function selecter1(channelNumber){
     let listAvatar1 = document.getElementById("avatarSelector1").getElementsByTagName("li");
        for (let i = 0; i< avatarNumber; i++){
         listAvatar1[i].className = i+1 == channelNumber ? "selected":""; }
         choosenAvatarPlayer1 = document.getElementById("avatarSelector1").getElementsByClassName("selected")[0].id
         console.log(choosenAvatarPlayer1)
     }   
// CA FONCTIONNE BORD** DE M****
let choosenAvatarPlayer1;
let choosenAvatarPlayer2;
 function selecter2(channelNumber){
     let listAvatar2 = document.getElementById("avatarSelector2").getElementsByTagName("li");
     for (let i = 0; i< avatarNumber; i++){
        listAvatar2[i].className = i+1 == channelNumber ? "selected":""; }
         choosenAvatarPlayer2 = document.getElementById("avatarSelector2").getElementsByClassName("selected")[0].id
         console.log(choosenAvatarPlayer2)
         } 

  // Cree variable username et avatar en fonction de l'entrée (1joueur)
  // Variables playerName1, playerName2, avatarPlayer1, avatarPlayer2
let userName1;
let userName2;
let avatarPlayer1;
let avatarPlayer2;
document.getElementById("submitNameAvatar2Players").addEventListener('click', (e)=>{   
     if (choosenAvatarPlayer1 === undefined ||choosenAvatarPlayer2 === undefined){
         alert("Choisissez un avatar !")
    } else if (document.getElementById("userNamePlayer1").value === "" ||document.getElementById("userNamePlayer2").value === ""){
        alert("On a besoin de vos p'tits noms")
    } else if (choosenAvatarPlayer1 === avatar3 || choosenAvatarPlayer2 === avatar3){
        isKennyDead === true
        return gameOver()
    } else {
        document.getElementById("divPseudoAvatarSelector2Players").style.display = "none";
        playerName1 = document.getElementById("userNamePlayer1").value;
        playerName2 = document.getElementById("userNamePlayer2").value;
        avatarPlayer1 = document.getElementById("avatarSelector1").getElementsByClassName("selected")[0].id
        avatarPlayer2 = document.getElementById("avatarSelector2").getElementsByClassName("selected")[0].id
        console.log(avatarPlayer1);
        console.log(avatarPlayer2);
        console.log(playerName1);
        console.log(playerName2);
        board = newGame(5, 5, true);
        decompte();
        document.getElementById("board").appendChild(board);
    }
});        