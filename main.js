
var app = document.getElementById('app');
const donate = document.getElementById("donate");

var typewriter = new Typewriter(app, {
    loop: true
});
donate.onclick = () => {
    window.open("https://ko-fi.com/pentalex", "_blank");
};
typewriter.typeString("Hey! I'm Pentalex")
    .pauseFor(1500)
    .deleteAll()
    .typeString('I make music')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('Twitch extensions')
    .pauseFor(1500)
    .deleteChars(22)
    .typeString('love to <strong>create.</strong>')
    .pauseFor(2000)
    .start()
    .callFunction(transition(), thisArg);



    
