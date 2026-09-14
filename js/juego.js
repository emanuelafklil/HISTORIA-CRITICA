/* =========================================================
   DESAFÍO DE LA DESCOLONIZACIÓN
   JAVASCRIPT COMPLETO
========================================================= */


/* =========================================================
   ESTADO DEL JUEGO
========================================================= */

const game = {

    score: 0,

    streak: 0,

    maxStreak: 0,

    lives: 3,

    challenge: 0,

    correct: 0,

    sound: true,

    tfIndex: 0,

    matchingDone: 0,

    selectedSchool: [],

    rouletteSpun: false

};


/* =========================================================
   ELEMENTOS
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const finalScreen =
    document.getElementById("finalScreen");

const scoreElement =
    document.getElementById("score");

const streakElement =
    document.getElementById("streak");

const livesElement =
    document.getElementById("lives");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const challengeNumber =
    document.getElementById("challengeNumber");

const challengeTitle =
    document.getElementById("challengeTitle");

const toast =
    document.getElementById("toast");


/* =========================================================
   DATOS — RULETA
========================================================= */

const rouletteData = [

    {
        category: "CONCEPTOS",

        question:
            "¿Qué busca principalmente la descolonización de la educación?",

        answers: [
            "Repetir únicamente conocimientos extranjeros",
            "Valorar y recuperar saberes propios",
            "Eliminar toda forma de cultura",
            "Evitar la participación comunitaria"
        ],

        correct: 1
    },

    {
        category: "HISTORIA",

        question:
            "¿Qué experiencia educativa es reconocida como antecedente importante de la educación comunitaria en Bolivia?",

        answers: [
            "Escuela Ayllu de Warisata",
            "Universidad de París",
            "Escuela Industrial de Chicago",
            "Academia de Atenas"
        ],

        correct: 0
    },

    {
        category: "EDUCACIÓN",

        question:
            "¿Qué característica corresponde a una educación descolonizadora?",

        answers: [
            "Ignorar los conocimientos de la comunidad",
            "Separar completamente la escuela de su contexto",
            "Relacionar los aprendizajes con la realidad",
            "Utilizar una sola forma de conocimiento"
        ],

        correct: 2
    },

    {
        category: "LEY 070",

        question:
            "La Ley 070 plantea una educación con carácter:",

        answers: [
            "Exclusivamente individual",
            "Descolonizador y comunitario",
            "Únicamente memorístico",
            "Separado de la sociedad"
        ],

        correct: 1
    },

    {
        category: "SABERES",

        question:
            "¿Qué significa valorar los saberes locales?",

        answers: [
            "Considerarlos parte válida del proceso educativo",
            "Reemplazar toda ciencia por tradición",
            "Evitar investigar nuevos conocimientos",
            "Utilizarlos solamente fuera de la escuela"
        ],

        correct: 0
    }

];


/* =========================================================
   DATOS — VERDADERO / FALSO
========================================================= */

const trueFalseData = [

    {
        statement:
            "La educación descolonizadora busca valorar los saberes y conocimientos propios.",

        answer: true,

        explanation:
            "Correcto. La descolonización educativa busca reconocer y fortalecer conocimientos, identidades y saberes propios."
    },

    {
        statement:
            "La interculturalidad significa que una sola cultura debe imponerse sobre las demás.",

        answer: false,

        explanation:
            "Correcto. La interculturalidad promueve el diálogo y la convivencia respetuosa entre diferentes culturas."
    },

    {
        statement:
            "La educación descolonizadora puede relacionarse con la realidad y el contexto de la comunidad.",

        answer: true,

        explanation:
            "Correcto. El contexto sociocultural y los saberes de la comunidad pueden formar parte del proceso educativo."
    },

    {
        statement:
            "El plurilingüismo significa utilizar solamente una lengua en la educación.",

        answer: false,

        explanation:
            "Correcto. El plurilingüismo reconoce la presencia y uso de varias lenguas."
    },

    {
        statement:
            "La participación de la comunidad puede contribuir a una educación sociocomunitaria.",

        answer: true,

        explanation:
            "Correcto. La participación comunitaria es fundamental dentro del enfoque sociocomunitario."
    }

];


/* =========================================================
   DATOS — CONECTAR CONCEPTOS
========================================================= */

const matchingData = [

    {
        id: "intraculturalidad",

        concept: "Intraculturalidad",

        definition:
            "Fortalecimiento de la identidad y cultura propias."
    },

    {
        id: "interculturalidad",

        concept: "Interculturalidad",

        definition:
            "Diálogo respetuoso entre diferentes culturas."
    },

    {
        id: "plurilinguismo",

        concept: "Plurilingüismo",

        definition:
            "Reconocimiento y uso educativo de varias lenguas."
    },

    {
        id: "comunitaria",

        concept: "Educación comunitaria",

        definition:
            "Participación y relación de la escuela con la comunidad."
    }

];


/* =========================================================
   DATOS — IDEA COLONIAL
========================================================= */

const colonialData = [

    {
        text:
            "El docente incorpora relatos, conocimientos y experiencias de la comunidad.",

        correct: false
    },

    {
        text:
            "Los estudiantes pueden relacionar los contenidos con su realidad cultural.",

        correct: false
    },

    {
        text:
            "El docente considera que solamente los conocimientos de otros países son válidos y rechaza los saberes locales.",

        correct: true
    },

    {
        text:
            "La escuela promueve el respeto y diálogo entre diferentes culturas.",

        correct: false
    }

];


/* =========================================================
   DATOS — ESCUELA
========================================================= */

const schoolData = [

    {
        id: "saberes",

        icon: "fa-book-open",

        title: "Saberes locales",

        description:
            "Reconocer conocimientos de la comunidad.",

        correct: true
    },

    {
        id: "lenguas",

        icon: "fa-language",

        title: "Lenguas",

        description:
            "Valorar la diversidad lingüística.",

        correct: true
    },

    {
        id: "comunidad",

        icon: "fa-people-group",

        title: "Comunidad",

        description:
            "Participación comunitaria.",

        correct: true
    },

    {
        id: "produccion",

        icon: "fa-seedling",

        title: "Producción",

        description:
            "Aprendizaje vinculado a la producción.",

        correct: true
    },

    {
        id: "interculturalidad",

        icon: "fa-handshake",

        title: "Interculturalidad",

        description:
            "Diálogo y respeto cultural.",

        correct: true
    },

    {
        id: "memorizar",

        icon: "fa-repeat",

        title: "Solo memorizar",

        description:
            "Aprender contenidos sin relacionarlos con la realidad.",

        correct: false
    }

];


/* =========================================================
   SONIDO
========================================================= */

let audioContext = null;


function initAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}


function playSound(type) {

    if (!game.sound) return;

    initAudio();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.connect(gain);

    gain.connect(audioContext.destination);


    if (type === "correct") {

        oscillator.frequency.setValueAtTime(
            520,
            audioContext.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            850,
            audioContext.currentTime + .12
        );

        gain.gain.setValueAtTime(
            .001,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            .16,
            audioContext.currentTime + .02
        );

        gain.gain.exponentialRampToValueAtTime(
            .001,
            audioContext.currentTime + .3
        );

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + .3
        );

    }


    else if (type === "wrong") {

        oscillator.frequency.setValueAtTime(
            180,
            audioContext.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            90,
            audioContext.currentTime + .2
        );

        gain.gain.setValueAtTime(
            .12,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            .001,
            audioContext.currentTime + .25
        );

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + .25
        );

    }


    else if (type === "spin") {

        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            250,
            audioContext.currentTime
        );

        gain.gain.setValueAtTime(
            .04,
            audioContext.currentTime
        );

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + .08
        );

    }


    else if (type === "win") {

        const notes = [
            523,
            659,
            784,
            1046
        ];

        notes.forEach((frequency, index) => {

            const osc =
                audioContext.createOscillator();

            const g =
                audioContext.createGain();

            osc.connect(g);

            g.connect(
                audioContext.destination
            );

            osc.frequency.value = frequency;

            g.gain.setValueAtTime(
                .001,
                audioContext.currentTime + index * .12
            );

            g.gain.exponentialRampToValueAtTime(
                .15,
                audioContext.currentTime +
                index * .12 +
                .03
            );

            g.gain.exponentialRampToValueAtTime(
                .001,
                audioContext.currentTime +
                index * .12 +
                .3
            );

            osc.start(
                audioContext.currentTime +
                index * .12
            );

            osc.stop(
                audioContext.currentTime +
                index * .12 +
                .3
            );

        });

    }

}


/* =========================================================
   ACTUALIZAR HUD
========================================================= */

function updateHUD() {

    scoreElement.textContent =
        String(game.score).padStart(4, "0");

    streakElement.textContent =
        game.streak;

    livesElement.textContent =
        "❤️".repeat(game.lives) +
        "🖤".repeat(3 - game.lives);

    progressText.textContent =
        `${game.challenge} / 5`;

    progressFill.style.width =
        `${(game.challenge / 5) * 100}%`;

}


/* =========================================================
   PUNTOS
========================================================= */

function addPoints(base) {

    const streakBonus =
        Math.max(0, game.streak - 1) * 5;

    const total =
        base + streakBonus;

    game.score += total;

    return total;

}


function correctAnswer(points = 20) {

    game.correct++;

    game.streak++;

    if (game.streak > game.maxStreak) {
        game.maxStreak = game.streak;
    }

    const gained =
        addPoints(points);

    updateHUD();

    playSound("correct");

    showToast(`+${gained} puntos`);

    return gained;

}


function wrongAnswer() {

    game.streak = 0;

    if (game.lives > 0) {
        game.lives--;
    }

    updateHUD();

    playSound("wrong");

    showToast("Respuesta incorrecta");

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

    clearTimeout(toastTimeout);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 1800);

}


/* =========================================================
   CAMBIAR DESAFÍO
========================================================= */

function showChallenge(number) {

    document
        .querySelectorAll(".challenge-panel")
        .forEach(panel => {

            panel.classList.remove("active");

        });

    const panel =
        document.getElementById(
            `challenge${number}`
        );

    if (panel) {
        panel.classList.add("active");
    }

    game.challenge = number;

    challengeNumber.textContent =
        String(number).padStart(2, "0");

    const titles = {

        1: "Ruleta del saber",

        2: "¿Verdadero o falso?",

        3: "Conecta los conceptos",

        4: "Detecta la idea colonial",

        5: "Construye una escuela"

    };

    challengeTitle.textContent =
        titles[number];

    updateHUD();

}


/* =========================================================
   DESAFÍO 1 — RULETA
========================================================= */

const roulette =
    document.getElementById("roulette");

const spinButton =
    document.getElementById("spinButton");

const rouletteResult =
    document.getElementById("rouletteResult");

const rouletteQuestion =
    document.getElementById("rouletteQuestion");

const rouletteQuestionText =
    document.getElementById("rouletteQuestionText");

const rouletteAnswers =
    document.getElementById("rouletteAnswers");


let rouletteRotation = 0;


spinButton.addEventListener("click", () => {

    if (game.rouletteSpun) return;

    game.rouletteSpun = true;

    spinButton.disabled = true;

    spinButton.style.opacity = ".5";

    playSound("spin");

    const selected =
        Math.floor(
            Math.random() * rouletteData.length
        );

    const segmentSize = 360 / 6;

    const targetAngle =
        360 * 5 +
        (selected * segmentSize) +
        segmentSize / 2;

    rouletteRotation +=
        targetAngle;

    roulette.style.transform =
        `rotate(${rouletteRotation}deg)`;


    setTimeout(() => {

        const data =
            rouletteData[selected];

        rouletteResult.textContent =
            data.category;

        rouletteResult.classList.add("pop");

        setTimeout(() => {

            rouletteResult.classList.remove("pop");

        }, 400);


        rouletteQuestion.classList.remove(
            "hidden"
        );

        rouletteQuestionText.textContent =
            data.question;

        rouletteAnswers.innerHTML = "";


        data.answers.forEach(
            (answer, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "answer-button";

                button.textContent =
                    answer;

                button.addEventListener(
                    "click",
                    () => {

                        if (
                            rouletteAnswers
                                .dataset
                                .answered
                        ) return;

                        rouletteAnswers.dataset.answered =
                            "true";

                        const buttons =
                            rouletteAnswers
                                .querySelectorAll(
                                    ".answer-button"
                                );

                        buttons.forEach(
                            b => b.disabled = true
                        );


                        if (
                            index ===
                            data.correct
                        ) {

                            button.classList.add(
                                "correct"
                            );

                            correctAnswer(30);

                            showToast(
                                "+30 · ¡Excelente!"
                            );

                        } else {

                            button.classList.add(
                                "wrong"
                            );

                            buttons[
                                data.correct
                            ].classList.add(
                                "correct"
                            );

                            wrongAnswer();

                        }


                        setTimeout(
                            () => {

                                game.challenge = 1;

                                showChallenge(2);

                                loadTrueFalse();

                            },
                            1400
                        );

                    }
                );

                rouletteAnswers.appendChild(
                    button
                );

            }
        );

    }, 4200);

});


/* =========================================================
   DESAFÍO 2 — VERDADERO / FALSO
========================================================= */

const tfStatement =
    document.getElementById("tfStatement");

const tfNumber =
    document.getElementById("tfNumber");

const tfFeedback =
    document.getElementById("tfFeedback");

const nextTF =
    document.getElementById("nextTF");

let currentTF = null;


function loadTrueFalse() {

    currentTF =
        trueFalseData[game.tfIndex];

    tfStatement.textContent =
        currentTF.statement;

    tfNumber.textContent =
        `AFIRMACIÓN ${String(game.tfIndex + 1).padStart(2,"0")}`;

    tfFeedback.className =
        "feedback hidden";

    tfFeedback.textContent = "";

    nextTF.classList.add("hidden");

    document
        .querySelectorAll(".tf-button")
        .forEach(button => {

            button.disabled = false;

            button.style.opacity = "1";

        });

}


document
    .querySelectorAll(".tf-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (
                tfFeedback.classList.contains(
                    "answered"
                )
            ) return;


            tfFeedback.classList.add(
                "answered"
            );


            const selected =
                button.dataset.answer ===
                "true";


            document
                .querySelectorAll(".tf-button")
                .forEach(b => {

                    b.disabled = true;

                    b.style.opacity =
                        ".65";

                });


            if (
                selected ===
                currentTF.answer
            ) {

                button.style.opacity = "1";

                correctAnswer(20);

                tfFeedback.className =
                    "feedback correct answered";

                tfFeedback.innerHTML =
                    `<strong>✓ Correcto.</strong> ${currentTF.explanation}`;

            } else {

                button.style.opacity = "1";

                wrongAnswer();

                tfFeedback.className =
                    "feedback wrong answered";

                tfFeedback.innerHTML =
                    `<strong>✕ No exactamente.</strong> ${currentTF.explanation}`;

            }


            nextTF.classList.remove(
                "hidden"
            );

        });

    });


nextTF.addEventListener("click", () => {

    game.tfIndex++;

    if (
        game.tfIndex >=
        trueFalseData.length
    ) {

        showChallenge(3);

        loadMatching();

    } else {

        loadTrueFalse();

    }

});


/* =========================================================
   DESAFÍO 3 — CONECTAR CONCEPTOS
========================================================= */

const conceptsList =
    document.getElementById("conceptsList");

const definitionsList =
    document.getElementById("definitionsList");

const matchFeedback =
    document.getElementById("matchFeedback");

const finishMatching =
    document.getElementById("finishMatching");


let selectedConcept = null;

let selectedDefinition = null;


function shuffle(array) {

    return [...array].sort(
        () => Math.random() - .5
    );

}


function loadMatching() {

    conceptsList.innerHTML = "";

    definitionsList.innerHTML = "";

    game.matchingDone = 0;

    selectedConcept = null;

    selectedDefinition = null;

    matchFeedback.className =
        "feedback hidden";

    finishMatching.classList.add(
        "hidden"
    );


    const shuffledDefinitions =
        shuffle(matchingData);


    matchingData.forEach(item => {

        const element =
            createMatchItem(
                item,
                "concept"
            );

        conceptsList.appendChild(
            element
        );

    });


    shuffledDefinitions.forEach(item => {

        const element =
            createMatchItem(
                item,
                "definition"
            );

        definitionsList.appendChild(
            element
        );

    });

}


function createMatchItem(item, type) {

    const div =
        document.createElement("div");

    div.className =
        "match-item";

    div.draggable = true;

    div.dataset.id =
        item.id;

    div.dataset.type =
        type;

    div.textContent =
        type === "concept"
            ? item.concept
            : item.definition;


    div.addEventListener(
        "click",
        () => {

            if (
                div.classList.contains(
                    "matched"
                )
            ) return;

            if (
                type === "concept"
            ) {

                document
                    .querySelectorAll(
                        '.match-item[data-type="concept"]'
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );

                selectedConcept =
                    div;

                div.classList.add(
                    "selected"
                );

            } else {

                document
                    .querySelectorAll(
                        '.match-item[data-type="definition"]'
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "selected"
                            )
                    );

                selectedDefinition =
                    div;

                div.classList.add(
                    "selected"
                );

            }


            tryMatch();

        }
    );


    div.addEventListener(
        "dragstart",
        event => {

            event.dataTransfer.setData(
                "text/plain",
                item.id
            );

            event.dataTransfer.setData(
                "type",
                type
            );

        }
    );


    div.addEventListener(
        "dragover",
        event => {

            event.preventDefault();

        }
    );


    div.addEventListener(
        "drop",
        event => {

            event.preventDefault();

            const draggedId =
                event.dataTransfer.getData(
                    "text/plain"
                );

            const draggedType =
                event.dataTransfer.getData(
                    "type"
                );


            if (
                draggedType ===
                "concept" &&
                type ===
                "definition"
            ) {

                selectedConcept =
                    document.querySelector(
                        `.match-item[data-type="concept"][data-id="${draggedId}"]`
                    );

                selectedDefinition =
                    div;

                tryMatch();

            }

        }
    );


    return div;

}


function tryMatch() {

    if (
        !selectedConcept ||
        !selectedDefinition
    ) return;


    const conceptId =
        selectedConcept.dataset.id;

    const definitionId =
        selectedDefinition.dataset.id;


    if (
        conceptId ===
        definitionId
    ) {

        selectedConcept.classList.remove(
            "selected"
        );

        selectedDefinition.classList.remove(
            "selected"
        );

        selectedConcept.classList.add(
            "matched"
        );

        selectedDefinition.classList.add(
            "matched"
        );

        selectedConcept.draggable =
            false;

        selectedDefinition.draggable =
            false;

        game.matchingDone++;

        correctAnswer(25);

        showToast(
            "¡Conexión correcta! +25"
        );


        selectedConcept = null;

        selectedDefinition = null;


        if (
            game.matchingDone ===
            matchingData.length
        ) {

            matchFeedback.className =
                "feedback correct";

            matchFeedback.textContent =
                "¡Todas las conexiones son correctas! Has comprendido las relaciones entre los conceptos.";

            finishMatching.classList.remove(
                "hidden"
            );

        }

    } else {

        selectedConcept.classList.add(
            "wrong-match"
        );

        selectedDefinition.classList.add(
            "wrong-match"
        );

        wrongAnswer();

        setTimeout(() => {

            selectedConcept?.classList.remove(
                "wrong-match"
            );

            selectedDefinition?.classList.remove(
                "wrong-match"
            );

        }, 400);


        selectedConcept.classList.remove(
            "selected"
        );

        selectedDefinition.classList.remove(
            "selected"
        );

        selectedConcept = null;

        selectedDefinition = null;

    }

}


finishMatching.addEventListener(
    "click",
    () => {

        showChallenge(4);

        loadColonialScenarios();

    }
);


/* =========================================================
   DESAFÍO 4 — IDEA COLONIAL
========================================================= */

const colonialScenarios =
    document.getElementById(
        "colonialScenarios"
    );

const colonialFeedback =
    document.getElementById(
        "colonialFeedback"
    );

const nextColonial =
    document.getElementById(
        "nextColonial"
    );


function loadColonialScenarios() {

    colonialScenarios.innerHTML = "";

    colonialFeedback.className =
        "feedback hidden";

    nextColonial.classList.add(
        "hidden"
    );


    colonialData.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "scenario-card";

            card.innerHTML = `

                <span class="scenario-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <p>
                    ${item.text}
                </p>

            `;


            card.addEventListener(
                "click",
                () => {

                    if (
                        colonialFeedback.classList
                            .contains("answered")
                    ) return;


                    colonialFeedback.classList.add(
                        "answered"
                    );


                    document
                        .querySelectorAll(
                            ".scenario-card"
                        )
                        .forEach(
                            c =>
                                c.style.pointerEvents =
                                "none"
                        );


                    if (item.correct) {

                        card.classList.add(
                            "selected-correct"
                        );

                        correctAnswer(30);

                        colonialFeedback.className =
                            "feedback correct answered";

                        colonialFeedback.innerHTML =
                            "<strong>✓ ¡Encontrada!</strong> Esta situación rechaza los saberes locales y considera válido únicamente un tipo de conocimiento.";

                        nextColonial.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.classList.add(
                            "selected-wrong"
                        );

                        wrongAnswer();

                        colonialFeedback.className =
                            "feedback wrong answered";

                        colonialFeedback.innerHTML =
                            "<strong>✕ Esa situación no es la respuesta.</strong> Busca la que rechaza los saberes propios o impone una única forma de conocimiento.";

                        setTimeout(() => {

                            card.classList.remove(
                                "selected-wrong"
                            );

                            colonialFeedback.className =
                                "feedback hidden";

                            colonialFeedback.classList.remove(
                                "answered"
                            );

                            document
                                .querySelectorAll(
                                    ".scenario-card"
                                )
                                .forEach(
                                    c =>
                                        c.style.pointerEvents =
                                        "auto"
                                );

                        }, 1300);

                    }

                }
            );

            colonialScenarios.appendChild(
                card
            );

        }
    );

}


nextColonial.addEventListener(
    "click",
    () => {

        showChallenge(5);

        loadSchool();

    }
);


/* =========================================================
   DESAFÍO 5 — CONSTRUIR ESCUELA
========================================================= */

const schoolOptions =
    document.getElementById(
        "schoolOptions"
    );

const schoolElements =
    document.getElementById(
        "schoolElements"
    );

const finishSchool =
    document.getElementById(
        "finishSchool"
    );


function loadSchool() {

    schoolOptions.innerHTML = "";

    schoolElements.innerHTML =
        "<span>Selecciona elementos...</span>";

    game.selectedSchool = [];


    shuffle(schoolData).forEach(
        item => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "school-option";

            button.dataset.id =
                item.id;

            button.innerHTML = `

                <i class="fa-solid ${item.icon}"></i>

                <strong>
                    ${item.title}
                </strong>

                <small>
                    ${item.description}
                </small>

            `;


            button.addEventListener(
                "click",
                () => {

                    toggleSchoolElement(
                        item,
                        button
                    );

                }
            );


            schoolOptions.appendChild(
                button
            );

        }
    );

}


function toggleSchoolElement(
    item,
    button
) {

    const exists =
        game.selectedSchool.some(
            selected =>
                selected.id === item.id
        );


    if (exists) {

        game.selectedSchool =
            game.selectedSchool.filter(
                selected =>
                    selected.id !== item.id
            );

        button.classList.remove(
            "selected"
        );

    } else {

        game.selectedSchool.push(
            item
        );

        button.classList.add(
            "selected"
        );

    }


    renderSchoolElements();

}


function renderSchoolElements() {

    if (
        game.selectedSchool.length === 0
    ) {

        schoolElements.innerHTML =
            "<span>Selecciona elementos...</span>";

        return;

    }


    schoolElements.innerHTML =
        game.selectedSchool
            .map(
                item =>
                    `<span>${item.title}</span>`
            )
            .join("");

}


finishSchool.addEventListener(
    "click",
    () => {

        evaluateSchool();

    }
);


/* =========================================================
   EVALUAR ESCUELA
========================================================= */

function evaluateSchool() {

    const correctElements =
        game.selectedSchool.filter(
            item => item.correct
        ).length;

    const wrongElements =
        game.selectedSchool.filter(
            item => !item.correct
        ).length;


    const totalCorrect =
        schoolData.filter(
            item => item.correct
        ).length;


    let schoolScore =
        correctElements * 15;

    schoolScore -=
        wrongElements * 10;


    if (schoolScore < 0) {
        schoolScore = 0;
    }


    game.score += schoolScore;

    updateHUD();


    if (
        correctElements === totalCorrect &&
        wrongElements === 0
    ) {

        game.streak++;

        if (
            game.streak >
            game.maxStreak
        ) {
            game.maxStreak =
                game.streak;
        }

        game.score += 25;

        showToast(
            "¡Escuela perfecta! +25 bonus"
        );

        playSound("win");

    } else {

        playSound(
            correctElements >= 4
                ? "correct"
                : "wrong"
        );

    }


    setTimeout(
        () => {

            showFinal();

        },
        1000
    );

}


/* =========================================================
   FINAL
========================================================= */

function showFinal() {

    game.challenge = 5;

    updateHUD();

    gameScreen.classList.remove(
        "active"
    );

    finalScreen.classList.add(
        "active"
    );


    document.getElementById(
        "finalScore"
    ).textContent =
        String(game.score).padStart(
            4,
            "0"
        );


    document.getElementById(
        "finalCorrect"
    ).textContent =
        game.correct;


    document.getElementById(
        "finalStreak"
    ).textContent =
        game.maxStreak;


    let rank =
        "";

    let message =
        "";


    if (game.score >= 430) {

        rank =
            "🌟 MAESTRO DE LA DESCOLONIZACIÓN";

        message =
            "Excelente recorrido. Demostraste un gran dominio de los conceptos y principios de la educación descolonizadora.";

    }

    else if (game.score >= 340) {

        rank =
            "🏆 GUARDIÁN DEL SABER";

        message =
            "Muy buen trabajo. Comprendes cómo la educación puede valorar los saberes, culturas y realidades de la comunidad.";

    }

    else if (game.score >= 240) {

        rank =
            "📚 EXPLORADOR DEL CONOCIMIENTO";

        message =
            "Buen recorrido. Ya reconoces varios elementos importantes de la descolonización educativa.";

    }

    else {

        rank =
            "🌱 INICIANTE DEL SABER";

        message =
            "Has dado el primer paso. Sigue explorando y aprendiendo sobre la descolonización y su aplicación en la educación.";

    }


    document.getElementById(
        "finalRank"
    ).textContent =
        rank;


    document.getElementById(
        "finalMessage"
    ).textContent =
        message;


    playSound("win");

    createCelebration();

}


/* =========================================================
   REINICIAR
========================================================= */

document
    .getElementById("restartButton")
    .addEventListener(
        "click",
        () => {

            resetGame();

        }
    );


function resetGame() {

    game.score = 0;

    game.streak = 0;

    game.maxStreak = 0;

    game.lives = 3;

    game.challenge = 0;

    game.correct = 0;

    game.tfIndex = 0;

    game.matchingDone = 0;

    game.selectedSchool = [];

    game.rouletteSpun = false;

    rouletteRotation = 0;

    roulette.style.transform =
        "rotate(0deg)";

    spinButton.disabled = false;

    spinButton.style.opacity = "1";

    rouletteQuestion.classList.add(
        "hidden"
    );

    rouletteResult.textContent =
        "Gira la ruleta para comenzar";

    rouletteAnswers.innerHTML = "";

    startScreen.classList.remove(
        "active"
    );

    finalScreen.classList.remove(
        "active"
    );

    gameScreen.classList.add(
        "active"
    );

    updateHUD();

    showChallenge(1);

}


/* =========================================================
   INICIAR
========================================================= */

document
    .getElementById("startButton")
    .addEventListener(
        "click",
        () => {

            initAudio();

            startScreen.classList.remove(
                "active"
            );

            gameScreen.classList.add(
                "active"
            );

            game.challenge = 1;

            updateHUD();

            showChallenge(1);

        }
    );


/* =========================================================
   SONIDO
========================================================= */

document
    .getElementById("soundToggle")
    .addEventListener(
        "click",
        () => {

            game.sound =
                !game.sound;

            const button =
                document.getElementById(
                    "soundToggle"
                );

            const icon =
                button.querySelector("i");


            if (game.sound) {

                icon.className =
                    "fa-solid fa-volume-high";

                button.classList.remove(
                    "off"
                );

                initAudio();

                playSound("correct");

            } else {

                icon.className =
                    "fa-solid fa-volume-xmark";

                button.classList.add(
                    "off"
                );

            }

        }
    );


/* =========================================================
   PARTICULAS
========================================================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 14}s`;

        particle.style.animationDelay =
            `${Math.random() * -15}s`;

        particle.style.opacity =
            `${.15 + Math.random() * .4}`;

        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   CELEBRACIÓN FINAL
========================================================= */

function createCelebration() {

    const symbols = [
        "✦",
        "✧",
        "★",
        "✦",
        "◆",
        "✧"
    ];


    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const element =
            document.createElement(
                "div"
            );

        element.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        element.style.position =
            "fixed";

        element.style.left =
            `${Math.random() * 100}%`;

        element.style.top =
            `${20 + Math.random() * 30}%`;

        element.style.zIndex =
            "100";

        element.style.pointerEvents =
            "none";

        element.style.fontSize =
            `${12 + Math.random() * 20}px`;

        element.style.color =
            Math.random() > .5
                ? "#ff4057"
                : "#ffc857";

        element.style.animation =
            "celebrate 1.4s ease-out forwards";

        document.body.appendChild(
            element
        );


        setTimeout(
            () => {

                element.remove();

            },
            1500
        );

    }

}


const celebrationStyle =
    document.createElement("style");

celebrationStyle.textContent = `

@keyframes celebrate {

    0% {
        opacity: 0;
        transform:
            translateY(20px)
            scale(.5)
            rotate(0deg);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translateY(250px)
            scale(1.4)
            rotate(180deg);
    }

}

`;

document.head.appendChild(
    celebrationStyle
);


/* =========================================================
   INICIALIZACIÓN
========================================================= */

createParticles();

updateHUD();
