/* =========================================
   CONCURSO 1 VS 1
   MUSEO DIGITAL
   VERSIÓN 2
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTOS
    ========================================= */

    const setupScreen = document.getElementById("setupScreen");
    const gameScreen = document.getElementById("gameScreen");
    const resultScreen = document.getElementById("resultScreen");

    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");

    const startButton = document.getElementById("startContest");
    const restartButton = document.getElementById("restartContest");

    const questionArea = document.getElementById("questionArea");
    const feedback = document.getElementById("feedback");

    const musicButton = document.getElementById("musicButton");
    const music = document.getElementById("backgroundMusic");

    const score1Element = document.getElementById("score1");
    const score2Element = document.getElementById("score2");

    const scoreName1 = document.getElementById("scoreName1");
    const scoreName2 = document.getElementById("scoreName2");

    const currentPlayerName =
        document.getElementById("currentPlayerName");

    const questionCounter =
        document.getElementById("questionCounter");

    const roundNumber =
        document.getElementById("roundNumber");

    const roundTitle =
        document.getElementById("roundTitle");

    const roundDescription =
        document.getElementById("roundDescription");

    const setupError =
        document.getElementById("setupError");


    /* =========================================
       JUGADORES
    ========================================= */

    let players = [
        {
            name: "",
            score: 0,
            correct: 0,
            answered: 0
        },
        {
            name: "",
            score: 0,
            correct: 0,
            answered: 0
        }
    ];


    /* =========================================
       ESTADO DEL CONCURSO
    ========================================= */

    let currentPlayer = 0;

    /*
        questionIndex va de 0 a 19.

        Cada ronda tiene 4 preguntas:

        0 - 3   = Ronda 1
        4 - 7   = Ronda 2
        8 - 11  = Ronda 3
        12 - 15 = Ronda 4
        16 - 19 = Ronda 5
    */

    let questionIndex = 0;

    let contestQuestions = [];

    let answerLocked = false;


    /* =========================================
       CONFIGURACIÓN DE RONDAS
    ========================================= */

    const rounds = [

        {
            id: "multiple",
            title: "DEMUESTRA LO QUE SABES",
            description: "Selecciona la respuesta correcta.",
            number: "RONDA 1"
        },

        {
            id: "truefalse",
            title: "¿VERDAD O MITO?",
            description: "Analiza la afirmación y decide.",
            number: "RONDA 2"
        },

        {
            id: "matching",
            title: "CONECTA EL CONOCIMIENTO",
            description: "Encuentra la conexión correcta.",
            number: "RONDA 3"
        },

        {
            id: "open",
            title: "¿QUÉ HARÍAS TÚ?",
            description: "Responde oralmente y el docente evalúa.",
            number: "RONDA 4"
        },

        {
            id: "final",
            title: "EL DESAFÍO FINAL",
            description: "La última prueba. Demuestra lo aprendido.",
            number: "RONDA 5"
        }

    ];


    /* =========================================
       BANCO DE PREGUNTAS
    ========================================= */

    const questionBank = {

        /* =====================================
           RONDA 1
           MULTIPLE CHOICE
        ===================================== */

        multiple: [

            {
                question:
                    "¿Qué busca principalmente la descolonización de la educación?",

                options: [
                    "Eliminar todos los conocimientos científicos",
                    "Valorar únicamente los conocimientos extranjeros",
                    "Transformar prácticas educativas que reproducen relaciones de dominación",
                    "Evitar que los estudiantes aprendan otras culturas"
                ],

                answer: 2
            },

            {
                question:
                    "¿Cuál fue una experiencia educativa importante vinculada con la descolonización en Bolivia?",

                options: [
                    "La Escuela Ayllu de Warisata",
                    "La Universidad de Salamanca",
                    "La Escuela Industrial Europea",
                    "La Academia Colonial"
                ],

                answer: 0
            },

            {
                question:
                    "¿Qué significa reconocer los saberes de una comunidad?",

                options: [
                    "Considerarlos inferiores",
                    "Valorarlos como parte de la construcción del conocimiento",
                    "Reemplazar la ciencia por tradiciones",
                    "Evitar analizarlos críticamente"
                ],

                answer: 1
            },

            {
                question:
                    "¿Qué característica corresponde a una educación intracultural?",

                options: [
                    "Desconocer la cultura propia",
                    "Fortalecer conocimientos, valores y prácticas de la propia cultura",
                    "Imponer una cultura sobre otra",
                    "Eliminar las lenguas originarias"
                ],

                answer: 1
            },

            {
                question:
                    "¿Qué busca la educación intercultural?",

                options: [
                    "Separar completamente las culturas",
                    "Promover el diálogo y respeto entre culturas",
                    "Eliminar las diferencias culturales",
                    "Establecer una cultura superior"
                ],

                answer: 1
            },

            {
                question:
                    "¿Cuál es una característica de la educación plurilingüe?",

                options: [
                    "Trabajar solamente en castellano",
                    "Excluir las lenguas originarias",
                    "Reconocer y utilizar diferentes lenguas",
                    "Evitar la comunicación intercultural"
                ],

                answer: 2
            },

            {
                question:
                    "¿Qué relación existe entre colonialismo y colonialidad?",

                options: [
                    "Son exactamente lo mismo",
                    "La colonialidad puede permanecer incluso después del colonialismo formal",
                    "La colonialidad solamente existió antes de 1492",
                    "No tienen ninguna relación"
                ],

                answer: 1
            },

            {
                question:
                    "¿Quiénes impulsaron la experiencia de Warisata?",

                options: [
                    "Elizardo Pérez y Avelino Siñani",
                    "Simón Bolívar y Andrés de Santa Cruz",
                    "Franz Tamayo y Alcides Arguedas",
                    "Adela Zamudio y Franz Tamayo"
                ],

                answer: 0
            },

            {
                question:
                    "Una educación descolonizadora debe:",

                options: [
                    "Aceptar una única forma de conocimiento",
                    "Promover pensamiento crítico y valorar diferentes saberes",
                    "Rechazar todo conocimiento universal",
                    "Evitar la participación comunitaria"
                ],

                answer: 1
            },

            {
                question:
                    "¿Qué elemento es importante para una educación comunitaria?",

                options: [
                    "El aislamiento de la escuela",
                    "La participación de la comunidad",
                    "La competencia entre culturas",
                    "La eliminación de saberes locales"
                ],

                answer: 1
            }

        ],


        /* =====================================
           RONDA 2
           VERDADERO / FALSO
        ===================================== */

        truefalse: [

            {
                question:
                    "La descolonización solamente consiste en lograr la independencia política de un país.",

                answer: false
            },

            {
                question:
                    "Los conocimientos de los pueblos originarios pueden formar parte del proceso educativo.",

                answer: true
            },

            {
                question:
                    "La educación descolonizadora rechaza necesariamente la ciencia y la tecnología.",

                answer: false
            },

            {
                question:
                    "La interculturalidad promueve el diálogo entre diferentes culturas.",

                answer: true
            },

            {
                question:
                    "La colonialidad puede mantenerse después del fin de una dominación colonial formal.",

                answer: true
            },

            {
                question:
                    "Una educación descolonizadora debe eliminar todas las diferencias culturales.",

                answer: false
            },

            {
                question:
                    "La participación comunitaria puede fortalecer los procesos educativos.",

                answer: true
            },

            {
                question:
                    "Las lenguas originarias no tienen importancia dentro de una educación plurilingüe.",

                answer: false
            },

            {
                question:
                    "Warisata es una experiencia histórica relacionada con la educación indígena en Bolivia.",

                answer: true
            },

            {
                question:
                    "Valorar saberes comunitarios significa aceptar cualquier conocimiento sin analizarlo.",

                answer: false
            }

        ],


        /* =====================================
           RONDA 3
           CONECTA EL CONOCIMIENTO
        ===================================== */

        matching: [

            {
                question: "DESCOLONIZACIÓN",

                options: [
                    "Proceso de transformación de relaciones y prácticas de dominación",
                    "Uso exclusivo de una lengua en la educación",
                    "Separación completa entre escuela y comunidad"
                ],

                answer: 0
            },

            {
                question: "INTRACULTURALIDAD",

                options: [
                    "Eliminación de la identidad cultural",
                    "Fortalecimiento de la propia cultura",
                    "Imposición de una cultura sobre otra"
                ],

                answer: 1
            },

            {
                question: "INTERCULTURALIDAD",

                options: [
                    "Diálogo respetuoso entre culturas",
                    "Separación absoluta de culturas",
                    "Rechazo de otras culturas"
                ],

                answer: 0
            },

            {
                question: "PLURILINGÜISMO",

                options: [
                    "Reconocimiento y uso de varias lenguas",
                    "Uso obligatorio de una sola lengua",
                    "Eliminación de las lenguas originarias"
                ],

                answer: 0
            },

            {
                question: "WARISATA",

                options: [
                    "Una experiencia de Escuela Ayllu",
                    "Una institución colonial",
                    "Una ley educativa europea"
                ],

                answer: 0
            },

            {
                question: "EDUCACIÓN COMUNITARIA",

                options: [
                    "Participación de la comunidad en el proceso educativo",
                    "Aislamiento de la escuela",
                    "Exclusión de las familias"
                ],

                answer: 0
            },

            {
                question: "COLONIALIDAD",

                options: [
                    "Persistencia de relaciones coloniales de poder",
                    "Desaparición de todas las diferencias sociales",
                    "Únicamente la independencia política"
                ],

                answer: 0
            },

            {
                question: "SABERES LOCALES",

                options: [
                    "Conocimientos construidos dentro de una comunidad",
                    "Conocimientos que solamente aparecen en libros",
                    "Conocimientos considerados universales exclusivamente"
                ],

                answer: 0
            },

            {
                question: "PENSAMIENTO CRÍTICO",

                options: [
                    "Memorizar sin cuestionar",
                    "Capacidad de analizar y cuestionar ideas",
                    "Aceptar una única perspectiva"
                ],

                answer: 1
            },

            {
                question: "EDUCACIÓN LIBERADORA",

                options: [
                    "Educación orientada a desarrollar conciencia y transformación",
                    "Educación basada únicamente en obediencia",
                    "Educación sin participación"
                ],

                answer: 0
            }

        ],


        /* =====================================
           RONDA 4
           SITUACIONES ORALES
        ===================================== */

        open: [

            {
                question:
                    "En tu aula, algunos estudiantes se burlan de un compañero porque habla una lengua originaria. ¿Qué harías desde una perspectiva descolonizadora?"
            },

            {
                question:
                    "Una comunidad tiene conocimientos tradicionales sobre plantas medicinales. ¿Cómo podrías incorporarlos en una actividad educativa?"
            },

            {
                question:
                    "Un libro presenta la historia solamente desde la perspectiva de los conquistadores. ¿Qué preguntas harías para realizar una mirada descolonizadora?"
            },

            {
                question:
                    "Un estudiante afirma que los conocimientos de su comunidad no sirven porque no aparecen en los libros. ¿Cómo responderías?"
            },

            {
                question:
                    "¿Cómo podrías trabajar la cultura de tu comunidad sin convertirla en una simple actividad decorativa?"
            },

            {
                question:
                    "¿Qué harías si solamente se utiliza el castellano en una comunidad donde también se habla una lengua originaria?"
            },

            {
                question:
                    "¿Cómo promoverías la participación de las familias en una actividad escolar?"
            },

            {
                question:
                    "Si encuentras dos formas diferentes de explicar un mismo fenómeno, una científica y otra comunitaria, ¿cómo trabajarías ambas?"
            },

            {
                question:
                    "¿Qué cambiarías en una clase donde solamente el docente habla y los estudiantes escuchan?"
            },

            {
                question:
                    "¿Cómo ayudarías a que los estudiantes valoren su identidad cultural dentro del aula?"
            }

        ],


        /* =====================================
           RONDA 5
           FINAL
        ===================================== */

        final: [

            {
                question:
                    "¿Cuál de las siguientes opciones representa mejor una educación descolonizadora?",

                options: [
                    "Reemplazar un conocimiento dominante por otro dominante",
                    "Memorizar únicamente contenidos oficiales",
                    "Generar diálogo crítico entre conocimientos y valorar la diversidad",
                    "Eliminar todos los conocimientos externos"
                ],

                answer: 2
            },

            {
                question:
                    "¿Qué pregunta permite analizar una historia desde una mirada descolonizadora?",

                options: [
                    "¿Cuántas páginas tiene?",
                    "¿Quién contó esta historia y qué voces están ausentes?",
                    "¿Quién escribió más rápido?",
                    "¿Qué personaje tiene más poder?"
                ],

                answer: 1
            },

            {
                question:
                    "¿Por qué es importante recuperar conocimientos de los pueblos y comunidades?",

                options: [
                    "Porque permiten fortalecer identidad y diversidad de saberes",
                    "Porque deben reemplazar toda ciencia",
                    "Porque solamente sirven para actividades culturales",
                    "Porque no necesitan ser analizados"
                ],

                answer: 0
            },

            {
                question:
                    "¿Qué relación existe entre educación y descolonización?",

                options: [
                    "Ninguna",
                    "La educación puede reproducir o transformar relaciones de dominación",
                    "La educación solamente transmite información",
                    "La educación debe evitar la cultura"
                ],

                answer: 1
            },

            {
                question:
                    "¿Cuál es una característica de una práctica educativa comunitaria?",

                options: [
                    "Separar escuela y comunidad",
                    "Trabajar solamente con el libro",
                    "Relacionar aprendizaje, comunidad y realidad",
                    "Evitar la participación familiar"
                ],

                answer: 2
            },

            {
                question:
                    "¿Qué significa cuestionar una mirada colonial en la educación?",

                options: [
                    "Dejar de estudiar historia",
                    "Analizar críticamente relaciones de poder y perspectivas",
                    "Rechazar todos los libros",
                    "Evitar conocer otras culturas"
                ],

                answer: 1
            },

            {
                question:
                    "¿Cuál es una finalidad de fortalecer la intraculturalidad?",

                options: [
                    "Aislar una cultura",
                    "Fortalecer la identidad y los saberes propios",
                    "Eliminar otras culturas",
                    "Impedir el diálogo"
                ],

                answer: 1
            },

            {
                question:
                    "¿Qué debe buscar una educación intercultural crítica?",

                options: [
                    "Una cultura superior",
                    "La separación cultural",
                    "Relaciones de respeto, diálogo y análisis crítico",
                    "La desaparición de las identidades"
                ],

                answer: 2
            },

            {
                question:
                    "¿Qué papel puede cumplir el docente en una educación descolonizadora?",

                options: [
                    "Ser la única fuente de conocimiento",
                    "Facilitar diálogo, participación y pensamiento crítico",
                    "Evitar los conocimientos comunitarios",
                    "Imponer una única perspectiva"
                ],

                answer: 1
            },

            {
                question:
                    "¿Cuál resume mejor el propósito de la descolonización educativa?",

                options: [
                    "Cambiar un modelo dominante por otro",
                    "Eliminar la escuela",
                    "Transformar la educación para reconocer diversidad, participación y pensamiento crítico",
                    "Eliminar los conocimientos científicos"
                ],

                answer: 2
            }

        ]

    };


    /* =========================================
       UTILIDAD RANDOM
    ========================================= */

    function shuffle(array) {

        return [...array].sort(
            () => Math.random() - 0.5
        );

    }


    /* =========================================
       CREAR LAS 20 PREGUNTAS
       
       IMPORTANTE:
       AQUÍ YA NO MEZCLAMOS LAS RONDAS.
    ========================================= */

    function prepareContest() {

        contestQuestions = [];

        rounds.forEach(round => {

            const bank =
                questionBank[round.id];

            /*
                Elegimos exactamente 4 preguntas
                para la ronda.

                2 para jugador 1
                2 para jugador 2
            */

            const selected =
                shuffle(bank).slice(0, 4);

            selected.forEach(question => {

                contestQuestions.push({
                    ...question,
                    type: round.id
                });

            });

        });

    }


    /* =========================================
       INICIO
    ========================================= */

    startButton.addEventListener(
        "click",
        startContest
    );


    function startContest() {

        const name1 =
            player1Input.value.trim();

        const name2 =
            player2Input.value.trim();


        if (!name1 || !name2) {

            setupError.textContent =
                "Los dos jugadores deben escribir su nombre.";

            return;

        }


        if (
            name1.toLowerCase() ===
            name2.toLowerCase()
        ) {

            setupError.textContent =
                "Los jugadores deben tener nombres diferentes.";

            return;

        }


        players = [

            {
                name: name1,
                score: 0,
                correct: 0,
                answered: 0
            },

            {
                name: name2,
                score: 0,
                correct: 0,
                answered: 0
            }

        ];


        /*
            Reiniciamos todo.
        */

        currentPlayer = 0;
        questionIndex = 0;
        answerLocked = false;


        /*
            Generamos las preguntas
            POR RONDAS.
        */

        prepareContest();


        scoreName1.textContent =
            players[0].name;

        scoreName2.textContent =
            players[1].name;


        updateScores();


        setupScreen.classList.remove("active");

        resultScreen.classList.remove("active");

        gameScreen.classList.add("active");


        playMusic();


        showQuestion();

    }


    /* =========================================
       MOSTRAR PREGUNTA
    ========================================= */

    function showQuestion() {

        answerLocked = false;

        feedback.textContent = "";

        feedback.className = "feedback";


        /*
            Si ya terminamos las 20 preguntas.
        */

        if (
            questionIndex >=
            contestQuestions.length
        ) {

            finishContest();

            return;

        }


        const question =
            contestQuestions[questionIndex];


        /*
            IMPORTANTE:

            4 preguntas = 1 ronda.

            0-3   Ronda 1
            4-7   Ronda 2
            8-11  Ronda 3
            12-15 Ronda 4
            16-19 Ronda 5
        */

        const roundIndex =
            Math.floor(questionIndex / 4);


        const round =
            rounds[roundIndex];


        roundNumber.textContent =
            round.number;

        roundTitle.textContent =
            round.title;

        roundDescription.textContent =
            round.description;


        currentPlayerName.textContent =
            players[currentPlayer].name;


        questionCounter.textContent =
            `${questionIndex + 1} / 20`;


        updateTurnColor();


        questionArea.innerHTML = "";


        switch (question.type) {

            case "multiple":

                renderMultiple(question);

                break;


            case "truefalse":

                renderTrueFalse(question);

                break;


            case "matching":

                renderMatching(question);

                break;


            case "open":

                renderOpen(question);

                break;


            case "final":

                renderFinal(question);

                break;

        }

    }


    /* =========================================
       CREAR TARJETA
    ========================================= */

    function createQuestionCard(question) {

        const card =
            document.createElement("div");

        card.className =
            "question-card";


        const number =
            document.createElement("div");

        number.className =
            "question-number";


        number.innerHTML = `

            <span>
                PREGUNTA ${questionIndex + 1} / 20
            </span>

            <span>
                TURNO: ${players[currentPlayer].name}
            </span>

        `;


        card.appendChild(number);


        const text =
            document.createElement("h3");

        text.className =
            "question-text";

        text.textContent =
            question.question;


        card.appendChild(text);


        questionArea.appendChild(card);


        return card;

    }


    /* =========================================
       RONDA 1
    ========================================= */

    function renderMultiple(question) {

        const card =
            createQuestionCard(question);


        const grid =
            document.createElement("div");

        grid.className =
            "options-grid";


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "option-button";


                button.innerHTML = `

                    <span class="option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span>
                        ${option}
                    </span>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        answerMultiple(
                            button,
                            index,
                            question.answer
                        );

                    }
                );


                grid.appendChild(button);

            }
        );


        card.appendChild(grid);

    }


    function answerMultiple(
        button,
        selected,
        correct
    ) {

        if (answerLocked) return;

        answerLocked = true;


        const buttons =
            document.querySelectorAll(
                ".option-button"
            );


        buttons.forEach(
            btn => btn.disabled = true
        );


        if (selected === correct) {

            button.classList.add("correct");

            givePoints(10);

            feedback.textContent =
                "+10 PUNTOS — ¡CORRECTO!";

            feedback.className =
                "feedback correct";

        } else {

            button.classList.add("wrong");

            buttons[correct]
                .classList.add("correct");

            givePoints(0);

            feedback.textContent =
                "0 PUNTOS — Respuesta incorrecta";

            feedback.className =
                "feedback wrong";

        }


        continueContest();

    }


    /* =========================================
       RONDA 2
    ========================================= */

    function renderTrueFalse(question) {

        const card =
            createQuestionCard(question);


        const grid =
            document.createElement("div");

        grid.className =
            "tf-grid";


        const trueButton =
            document.createElement("button");

        trueButton.className =
            "tf-button";

        trueButton.dataset.value =
            "true";

        trueButton.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            VERDADERO
        `;


        const falseButton =
            document.createElement("button");

        falseButton.className =
            "tf-button";

        falseButton.dataset.value =
            "false";

        falseButton.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            FALSO
        `;


        trueButton.addEventListener(
            "click",
            () => answerTrueFalse(
                true,
                question.answer,
                trueButton,
                falseButton
            )
        );


        falseButton.addEventListener(
            "click",
            () => answerTrueFalse(
                false,
                question.answer,
                falseButton,
                trueButton
            )
        );


        grid.appendChild(trueButton);
        grid.appendChild(falseButton);


        card.appendChild(grid);

    }


    function answerTrueFalse(
        selected,
        correct,
        selectedButton,
        otherButton
    ) {

        if (answerLocked) return;

        answerLocked = true;


        selectedButton.disabled = true;
        otherButton.disabled = true;


        if (selected === correct) {

            selectedButton.classList.add(
                "correct"
            );

            givePoints(10);

            feedback.textContent =
                "+10 PUNTOS — ¡CORRECTO!";

            feedback.className =
                "feedback correct";

        } else {

            selectedButton.classList.add(
                "wrong"
            );

            givePoints(0);

            feedback.textContent =
                "0 PUNTOS — Respuesta incorrecta";

            feedback.className =
                "feedback wrong";

        }


        continueContest();

    }


    /* =========================================
       RONDA 3
       CONECTA EL CONOCIMIENTO
    ========================================= */

    function renderMatching(question) {

        const card =
            createQuestionCard(question);


        /*
            Ahora solamente mostramos
            UNA IDEA.
        */

        const ideaBox =
            document.createElement("div");

        ideaBox.className =
            "matching-idea";


        ideaBox.innerHTML = `

            <span>
                IDEA
            </span>

            <strong>
                ${question.question}
            </strong>

        `;


        card.appendChild(ideaBox);


        /*
            Y debajo las tres posibles
            conexiones.
        */

        const grid =
            document.createElement("div");

        grid.className =
            "options-grid matching-options";


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "option-button";


                button.innerHTML = `

                    <span class="option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span>
                        ${option}
                    </span>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        answerMatching(
                            button,
                            index,
                            question.answer
                        );

                    }
                );


                grid.appendChild(button);

            }
        );


        card.appendChild(grid);

    }


    function answerMatching(
        button,
        selected,
        correct
    ) {

        if (answerLocked) return;

        answerLocked = true;


        const buttons =
            document.querySelectorAll(
                ".matching-options .option-button"
            );


        buttons.forEach(
            btn => btn.disabled = true
        );


        if (selected === correct) {

            button.classList.add("correct");

            givePoints(10);

            feedback.textContent =
                "+10 PUNTOS — ¡CONEXIÓN CORRECTA!";

            feedback.className =
                "feedback correct";

        } else {

            button.classList.add("wrong");

            buttons[correct]
                .classList.add("correct");

            givePoints(0);

            feedback.textContent =
                "0 PUNTOS — Esa no era la conexión.";

            feedback.className =
                "feedback wrong";

        }


        continueContest();

    }


    /* =========================================
       RONDA 4
       RESPUESTA ORAL
    ========================================= */

    function renderOpen(question) {

        const card =
            createQuestionCard(question);


        const oralBox =
            document.createElement("div");

        oralBox.className =
            "oral-answer-box";


        oralBox.innerHTML = `

            <div class="oral-icon">
                <i class="fa-solid fa-microphone"></i>
            </div>

            <h3>
                Responde oralmente
            </h3>

            <p>
                Explica tu respuesta al docente.
                Cuando termines, el docente
                seleccionará la valoración.
            </p>

        `;


        card.appendChild(oralBox);


        /*
            BOTONES DEL DOCENTE
        */

        const evaluation =
            document.createElement("div");

        evaluation.className =
            "teacher-evaluation";


        evaluation.innerHTML = `

            <span class="evaluation-title">
                EVALUACIÓN DEL DOCENTE
            </span>

            <div class="evaluation-buttons">

                <button
                    class="evaluation-button evaluation-good"
                    data-points="10"
                >
                    <i class="fa-solid fa-circle-check"></i>

                    <strong>BIEN</strong>

                    <small>+10</small>
                </button>


                <button
                    class="evaluation-button evaluation-medium"
                    data-points="5"
                >
                    <i class="fa-solid fa-minus"></i>

                    <strong>MEDIO</strong>

                    <small>+5</small>
                </button>


                <button
                    class="evaluation-button evaluation-bad"
                    data-points="0"
                >
                    <i class="fa-solid fa-circle-xmark"></i>

                    <strong>MAL</strong>

                    <small>0</small>
                </button>

            </div>

        `;


        card.appendChild(evaluation);


        const buttons =
            evaluation.querySelectorAll(
                ".evaluation-button"
            );


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (answerLocked) return;

                    answerLocked = true;


                    const points =
                        Number(
                            button.dataset.points
                        );


                    givePoints(points);


                    if (points === 10) {

                        feedback.textContent =
                            "+10 PUNTOS — ¡MUY BIEN!";

                        feedback.className =
                            "feedback correct";

                    } else if (points === 5) {

                        feedback.textContent =
                            "+5 PUNTOS — RESPUESTA PARCIAL";

                        feedback.className =
                            "feedback";

                    } else {

                        feedback.textContent =
                            "0 PUNTOS — RESPUESTA INCORRECTA";

                        feedback.className =
                            "feedback wrong";

                    }


                    buttons.forEach(
                        btn => btn.disabled = true
                    );


                    continueContest();

                }
            );

        });

    }


    /* =========================================
       RONDA 5
    ========================================= */

    function renderFinal(question) {

        const card =
            createQuestionCard(question);


        const grid =
            document.createElement("div");

        grid.className =
            "options-grid";


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "option-button";


                button.innerHTML = `

                    <span class="option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span>
                        ${option}
                    </span>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        answerFinal(
                            button,
                            index,
                            question.answer
                        );

                    }
                );


                grid.appendChild(button);

            }
        );


        card.appendChild(grid);

    }


    function answerFinal(
        button,
        selected,
        correct
    ) {

        if (answerLocked) return;

        answerLocked = true;


        const buttons =
            document.querySelectorAll(
                ".option-button"
            );


        buttons.forEach(
            btn => btn.disabled = true
        );


        if (selected === correct) {

            button.classList.add("correct");

            givePoints(10);

            feedback.textContent =
                "+10 PUNTOS — ¡DESAFÍO SUPERADO!";

            feedback.className =
                "feedback correct";

        } else {

            button.classList.add("wrong");

            buttons[correct]
                .classList.add("correct");

            givePoints(0);

            feedback.textContent =
                "0 PUNTOS — Respuesta incorrecta";

            feedback.className =
                "feedback wrong";

        }


        continueContest();

    }


    /* =========================================
       PUNTOS
    ========================================= */

    function givePoints(points) {

        players[currentPlayer].score += points;


        players[currentPlayer].answered++;


        if (points === 10) {

            players[currentPlayer].correct++;

        }


        updateScores();

    }


    function updateScores() {

        score1Element.textContent =
            players[0].score;

        score2Element.textContent =
            players[1].score;

    }


    /* =========================================
       CONTINUAR
    ========================================= */

    function continueContest() {

        setTimeout(() => {

            questionIndex++;


            /*
                CAMBIO DE JUGADOR
            */

            currentPlayer =
                currentPlayer === 0
                    ? 1
                    : 0;


            showQuestion();

        }, 1000);

    }


    /* =========================================
       COLOR DEL TURNO
    ========================================= */

    function updateTurnColor() {

        const dot =
            document.querySelector(".turn-dot");


        if (currentPlayer === 0) {

            dot.style.background =
                "var(--player-one)";

            currentPlayerName.style.color =
                "var(--player-one)";

        } else {

            dot.style.background =
                "var(--player-two)";

            currentPlayerName.style.color =
                "var(--player-two)";

        }

    }


    /* =========================================
       RESULTADOS
    ========================================= */

    function finishContest() {

        gameScreen.classList.remove(
            "active"
        );

        resultScreen.classList.add(
            "active"
        );


        document.getElementById(
            "finalName1"
        ).textContent =
            players[0].name;


        document.getElementById(
            "finalName2"
        ).textContent =
            players[1].name;


        document.getElementById(
            "finalScore1"
        ).textContent =
            players[0].score;


        document.getElementById(
            "finalScore2"
        ).textContent =
            players[1].score;


        document.getElementById(
            "correct1"
        ).textContent =
            players[0].correct;


        document.getElementById(
            "correct2"
        ).textContent =
            players[1].correct;


        document.getElementById(
            "statName1"
        ).textContent =
            players[0].name;


        document.getElementById(
            "statName2"
        ).textContent =
            players[1].name;


        const winnerMessage =
            document.getElementById(
                "winnerMessage"
            );


        if (
            players[0].score >
            players[1].score
        ) {

            winnerMessage.textContent =
                `🏆 ${players[0].name} obtuvo la mayor puntuación.`;

        }

        else if (
            players[1].score >
            players[0].score
        ) {

            winnerMessage.textContent =
                `🏆 ${players[1].name} obtuvo la mayor puntuación.`;

        }

        else {

            winnerMessage.textContent =
                "🤝 ¡Empate! Ambos demostraron sus conocimientos.";

        }


        if (music) {

            music.pause();

        }

    }


    /* =========================================
       REINICIAR
    ========================================= */

    restartButton.addEventListener(
        "click",
        () => {

            resultScreen.classList.remove(
                "active"
            );

            gameScreen.classList.remove(
                "active"
            );

            setupScreen.classList.add(
                "active"
            );


            player1Input.value = "";
            player2Input.value = "";

            setupError.textContent = "";

            questionArea.innerHTML = "";

            feedback.textContent = "";

            questionIndex = 0;

            currentPlayer = 0;

        }
    );


    /* =========================================
       MÚSICA
    ========================================= */

    let musicMuted = false;


    function playMusic() {

        if (
            !musicMuted &&
            music
        ) {

            music.volume = 0.18;

            music.play().catch(() => {});

        }

    }


    musicButton.addEventListener(
        "click",
        () => {

            musicMuted =
                !musicMuted;


            if (musicMuted) {

                music.pause();

                musicButton.innerHTML =
                    '<i class="fa-solid fa-volume-xmark"></i>';

            } else {

                musicButton.innerHTML =
                    '<i class="fa-solid fa-volume-high"></i>';

                playMusic();

            }

        }
    );


    /* =========================================
       ENTER
    ========================================= */

    [
        player1Input,
        player2Input
    ].forEach(input => {

        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    startContest();

                }

            }
        );

    });

});