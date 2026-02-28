/*
The code here is pretty bad... good luck understanding it lol
*/

function twittermoji() {
    twemoji.parse(document, {
        base: 'https://twemoji.exerinity.com/',
        size: '72x72',
        ext: '.png'
    });
}

twittermoji();

function welcome() {

    let welcomes = [
        { text: "welcome to exerinity.gay", lang: "English" },
        { text: "willkommen auf exerinity.gay", lang: "German" },
        { text: "ciao! benvenuto su exerinity.gay", lang: "Italian" },
        { text: "ようこそ、exerinity.gay へ", lang: "Japanese" },
        { text: "bienvenido a exerinity.gay", lang: "Spanish" },
        { text: "välkommen till exerinity.gay", lang: "Swedish" },
        { text: "g'day! welcome to exerinity.gay", lang: "Aussie" },
        { text: "haii!!! :33 haiii ^_^ hewwo!!1!1! >////<", lang: "terminally online" },
        { text: "console.log('Hello World!');", lang: "JavaScript"}
    ];

    let chosen = welcomes[Math.floor(Math.random() * welcomes.length)];
    let el = document.getElementById("welcome");

    el.innerText = chosen.text.toLocaleLowerCase() + " 👋";
    twittermoji(); 
    el.title = chosen.lang;// because twemoji is the best emoji library EVAR
}

welcome();
document.getElementById("welcome").addEventListener("click", welcome);

let clickz = 0;
let timer;

document.getElementById("exe").addEventListener("click", () => {
    clickz++;
    clearTimeout(timer);
    timer = setTimeout(() => {
        clickz = 0;
    }, 500);

    if (clickz >= 3) {
        clickz = 0;
        shoot(20);

        document.body.classList.add("shake");
        setTimeout(() => {
            document.body.classList.remove("shake");
        }, 500);
    }
});

if (location.search.includes("com")) {
    document.getElementById("exe").innerHTML =
        `exerinity.gay <a href="https://exerinity.com">(back to exerinity.com)</a>`;
}