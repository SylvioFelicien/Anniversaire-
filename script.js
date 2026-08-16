/* =========================
   ÉCRAN D'ACCUEIL
========================= */

const startButton =
    document.getElementById("startButton");

const intro =
    document.getElementById("intro");

const envelopeScreen =
    document.getElementById("envelopeScreen");


startButton.addEventListener("click", function () {
  music.play();

            musicPlaying = true;

            musicButton.innerHTML =
                "🔊";
   
    intro.classList.remove("active");

    envelopeScreen.classList.add("active");

});


/* =========================
   ENVELOPPE
========================= */

const envelope =
    document.getElementById("envelope");

const continueButton =
    document.getElementById("continueButton");


envelope.addEventListener("click", function () {

    envelope.classList.toggle("open");


    if (envelope.classList.contains("open")) {

        /*
         * Création des cœurs
         */

        for (let i = 0; i < 35; i++) {

            setTimeout(
                createHeart,
                i * 100
            );

        }


        /*
         * Afficher le bouton
         */

        setTimeout(function () {

            continueButton.classList.add("show");

        }, 1800);

    }

});


/* =========================
   ÉCRAN FINAL
========================= */

const finalScreen =
    document.getElementById("final");


continueButton.addEventListener(
    "click",
    function () {

        envelopeScreen.classList.remove(
            "active"
        );

        continueButton.classList.remove(
            "show"
        );

        finalScreen.classList.add(
            "active"
        );


        /*
         * Grande pluie de cœurs
         */

        for (let i = 0; i < 60; i++) {

            setTimeout(
                createHeart,
                i * 80
            );

        }

    }
);


/* =========================
   CRÉER UN COEUR
========================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floatingHeart";


    const hearts = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "💘"

    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    /*
     * Position horizontale
     */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
     * Taille
     */

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";


    /*
     * Mouvement horizontal
     */

    heart.style.setProperty(

        "--move",

        (Math.random() * 200 - 100) + "px"

    );


    /*
     * Vitesse
     */

    heart.style.animationDuration =

        (4 + Math.random() * 3) + "s";


    document.body.appendChild(
        heart
    );


    /*
     * Supprimer après animation
     */

    setTimeout(function () {

        heart.remove();

    }, 8000);

}


/* =========================
   ÉTOILES
========================= */

const stars =
    document.getElementById("stars");


for (let i = 0; i < 70; i++) {

    const star =
        document.createElement("div");


    star.className =
        "star";


    star.innerHTML =
        "✦";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.fontSize =
        (5 + Math.random() * 12) + "px";


    star.style.animationDelay =
        Math.random() * 2 + "s";


    stars.appendChild(
        star
    );

}


/* =========================
   MUSIQUE
========================= */

const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function () {

        const music =
            document.getElementById(
                "music"
            );


        /*
         * Aucun fichier audio
         */

        if (!music) {

            alert(
                "Ajoute ton fichier musique.mp3 dans le dossier du site ❤️"
            );

            return;
        }


        /*
         * Pause
         */

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicButton.innerHTML =
                "🎵";

        }


        /*
         * Lecture
         */

        else {

            music.play();

            musicPlaying = true;

            musicButton.innerHTML =
                "🔊";

        }

    }
);
