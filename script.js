/* ==================================
   OPENING COUNTDOWN
================================== */

document.addEventListener("DOMContentLoaded", function () {

    const countdown = document.getElementById("countdown");
    const openButton = document.getElementById("openButton");

    if (countdown && openButton) {

        let number = 3;

        countdown.textContent = number;

        const timer = setInterval(function () {

            number--;

            if (number > 0) {

                countdown.textContent = number;

            } else {

                clearInterval(timer);

                countdown.textContent = "❤️";

                openButton.disabled = false;

                openButton.textContent =
                    "💌 Open My Surprise";

                openButton.onclick = function () {

                    window.location.href =
                        "birthday.html";

                };

            }

        }, 1000);
    }


    /* ==================================
       TYPING MESSAGE
    ================================== */

    const typingElement =
        document.getElementById("typingMessage");

    if (typingElement) {

        const message = `
Nuvvu natho vunna anni rojulu,
manam kottukunna, tittukunna,
nuvvu eppudu mammalni vadili vellaledu. ❤️

Honestly, I am very happy and lucky
to have you in my life.

Nuvvu manatho unte aa happiness
words lo cheppalenu. 🥹❤️

Nuvvu nee life lo chala success avvali.
Prathi vishayam lo mundhuku vellali.

Nee dreams anni nijam avvali.
Always keep smiling and stay happy. ❤️✨

And whatever happens,
never forget that you have people
who genuinely care about you. 💕
        `;

        let index = 0;

        function typeMessage() {

            if (index < message.length) {

                typingElement.innerHTML +=
                    message.charAt(index);

                index++;

                setTimeout(
                    typeMessage,
                    35
                );

            }

        }

        typeMessage();
    }

});


/* ==================================
   PAGE NAVIGATION
================================== */

function goToMemories() {

    window.location.href =
        "memories.html";
}


function goToFinal() {

    window.location.href =
        "final.html";
}
