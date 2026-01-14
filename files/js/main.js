/*
                                                                 ___                            ___                      
                                          .-.              .-.  (   )                          (   )                     
  .--.    ___  ___    .--.    ___ .-.    ( __)  ___ .-.   ( __)  | |_      ___  ___          .-.| |    .--.    ___  ___  
 /    \  (   )(   )  /    \  (   )   \   (''") (   )   \  (''") (   __)   (   )(   )        /   \ |   /    \  (   )(   ) 
|  .-. ;  | |  | |  |  .-. ;  | ' .-. ;   | |   |  .-. .   | |   | |       | |  | |        |  .-. |  |  .-. ;  | |  | |  
|  | | |   \ `' /   |  | | |  |  / (___)  | |   | |  | |   | |   | | ___   | |  | |        | |  | |  |  | | |  | |  | |  
|  |/  |   / ,. \   |  |/  |  | |         | |   | |  | |   | |   | |(   )  | '  | |        | |  | |  |  |/  |  | |  | |  
|  ' _.'  ' .  ; .  |  ' _.'  | |         | |   | |  | |   | |   | | | |   '  `-' |        | |  | |  |  ' _.'  | |  | |  
|  .'.-.  | |  | |  |  .'.-.  | |         | |   | |  | |   | |   | ' | |    `.__. |   .-.  | '  | |  |  .'.-.  ' '  ; '  
'  `-' /  | |  | |  '  `-' /  | |         | |   | |  | |   | |   ' `-' ;    ___ | |  (   ) ' `-'  /  '  `-' /   \ `' /   
 `.__.'  (___)(___)  `.__.'  (___)       (___) (___)(___) (___)   `.__.    (   )' |   `-'   `.__,'    `.__.'     '_.'    
                                                                            ; `-' '                                      
                                                                             .__.'                                       

The code here is pretty bad... good luck understanding it lol
*/

function twittermoji() {
    twemoji.parse(document, {
        base: 'https://twemoji.exerinity.dev/',
        size: '72x72',
        ext: '.png'
    });
}

twittermoji();

function welcome() {

    let welcomes = [
        { text: "welcome to exerinity.dev", lang: "English" },
        { text: "willkommen auf exerinity.dev", lang: "German" },
        { text: "ciao! benvenuto su exerinity.dev", lang: "Italian" },
        { text: "ようこそ、exerinity.dev へ", lang: "Japanese" },
        { text: "bienvenido a exerinity.dev", lang: "Spanish" },
        { text: "välkommen till exerinity.dev", lang: "Swedish" },
        { text: "g'day! welcome to exerinity.dev", lang: "Aussie" },
        { text: "haii!!! :33 haiii ^_^ hewwo!!1!1! >////<", lang: "terminally online" },
        { text: "console.log('Hello World!');", lang: "JavaScript"}
    ];

    let chosen = welcomes[Math.floor(Math.random() * welcomes.length)];
    let el = document.getElementById("welcome");

    el.innerText = chosen.text.toLocaleLowerCase() + " 👋";
    twittermoji(); // because twemoji is the best emoji library EVAR
}

welcome();
document.getElementById("welcome").addEventListener("click", welcome);

let clickz = 0;
let timer;

document.getElementById("exedev").addEventListener("click", () => {
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
    document.getElementById("exedev").innerHTML =
        `exerinity.dev <a href="https://exerinity.com">(back to exerinity.com)</a>`;
}