const box = document.getElementById("box");
const lid = document.getElementById("lid");
const base = document.getElementById("base");
const clickMe = document.getElementById("click-me");
const white = document.getElementById("white");
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const colors = [white, red, orange, yellow, green, blue, purple];
const whiteP = document.querySelector("#white p");
const redP = document.querySelector("#red p");
const orangeP = document.querySelector("#orange p");
const yellowP = document.querySelector("#yellow p");
const greenP = document.querySelector("#green p");
const blueP = document.querySelector("#blue p");
const purpleP = document.querySelector("#purple p");
const colorP = [whiteP, redP, orangeP, yellowP, greenP, blueP, purpleP];
const text = [...document.getElementsByClassName("text")];

clickMe.addEventListener("click", () => {
    clickMe.style.opacity = "0";
    clickMe.style.cursor = "initial";
    box.classList.remove("shake-box");
    lid.classList.remove("shake-lid");
    box.classList.add("open-box");
    lid.classList.add("open-lid");
    base.classList.add("open-base");
    
    setTimeout(() =>{
        text.forEach((el) => {
            el.style.translate = "0 calc(-80vh + clamp(75px, 37.5vw, 225px))";
            colors.forEach((color) => {
                color.style.opacity = "1";
                color.style.scale ="1";
            })
            setTimeout(() => {
                white.style.animation = "glow 0.6s ease-in-out infinite alternate"
            }, 700)
            setTimeout(() => {
                colors.forEach((color) => {
                    color.style.animation = "text-anim-horz 0.5s ease-in-out infinite alternate";
                    color.style.scale ="1";
                    white.style.animationDelay = "-0.25s";
                    red.style.animationDelay = "-0.2s";
                    orange.style.animationDelay = "-0.15s";
                    yellow.style.animationDelay = "-0.1s";
                    green.style.animationDelay = "-0.05s";
                    purple.style.animationDelay = "0.05s";
                    colorP.forEach((p) => {
                        p.style.animation = "text-anim-vert 0.5s ease-in-out infinite alternate";
                        redP.style.animationDelay = "0.05s";
                        orangeP.style.animationDelay = "0.1s";
                        yellowP.style.animationDelay = "0.15s";
                        greenP.style.animationDelay = "0.2s";
                        blueP.style.animationDelay = "0.25s";
                        purpleP.style.animationDelay = "0.3s";
                    })
                    setTimeout(() => {
                        const cakeMove = document.getElementById("cake-move");
                        const cake = document.getElementById("cake");
                        cakeMove.classList.add("move-in");
                        cake.classList.add("bounce");
                        setTimeout(() => {
                            const candle = document.getElementById("candle");
                            const message = document.getElementById("message");
                            candle.classList.add("candle-drop");
                            message.classList.add("candle-drop");
                            setTimeout(() => {
                                const flame = document.getElementById("flame");
                                flame.style.scale = "1";
                                flame.classList.add("ignite");
                            }, 500)
                        }, 4000)
                    }, 2000)
                });
            }, 3700)
        });
    }, 4700);
});