/* eslint-disable no-unused-vars */
import "./style.css";
import myArray from "./sounds.json";

const addSoundBtnToPage = (arrayOrObj) => {
    if (Array.isArray(arrayOrObj)) {
        arrayOrObj.forEach((obj) => {
            const domElements = createAppend();
            domElements[1].innerHTML = `${obj.title}`;
            domElements[2].setAttribute("src", `${obj.src}`);
            domElements[0].addEventListener("click", () => {
                domElements[2].play();
            });
        });
    } else {
        // in this case only one object gets passed to the function, coming from the input
        const domElements = createAppend();
        domElements[1].innerHTML = `${arrayOrObj.title}`;
        domElements[2].setAttribute("src", `${arrayOrObj.src}`);
        domElements[0].addEventListener("click", () => {
            domElements[2].play();
        });
    }
};

addSoundBtnToPage(myArray);

// Eventlistener of the 3 buttons and the input (header), tugged into this IIFE
const eventListeners = (() => {
    const rndSoundBtn = document.querySelector(".rnd-sound-btn").addEventListener("click", () => {
        const numberOfButtons = document.querySelectorAll(".wrapper button");
        const rndNum = Math.floor(Math.random() * numberOfButtons.length + 1);
        const rndSound = document.querySelector(`.wrapper button:nth-child(${rndNum})`).children[1];
        rndSound.play();
    });

    const rndBtn = document.querySelector(".rnd-btn").addEventListener("click", () => {
        delButtons();
        shuffle(myArray);
        addSoundBtnToPage(myArray);
    });

    const ascBtn = document.querySelector(".asc-btn").addEventListener("click", () => {
        delButtons();
        compare(myArray);
        addSoundBtnToPage(myArray);
    });

    const textInput = document.querySelector(".submitForm").addEventListener("click", () => {
        const input = document.querySelector(".hd-input");

        for (let i = 0; i < myArray.length; i += 1) {
            if (myArray[i].title === input.value) {
                delButtons();
                addSoundBtnToPage(myArray[i]);
                return;
            }
            delButtons();
            addSoundBtnToPage(myArray);
        }
    });
})();

const delButtons = () => {
    const wrapper = document.querySelector(".wrapper");

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
    }
};

const compare = (array) => {
    array.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
};

// Fisher-Yates-Algorithm
const shuffle = (array) => {
    const arraz = array;
    let l = arraz.length;
    let temp;
    let i;

    while (l) {
        i = Math.floor(Math.random() * l--);
        temp = arraz[l];
        arraz[l] = arraz[i];
        arraz[i] = temp;
    }
    return arraz;
};

function createAppend() {
    const wrapper = document.querySelector(".wrapper");
    const button = document.createElement("button");
    const player = document.createElement("audio");
    const title = document.createElement("h3");

    button.appendChild(title);
    button.appendChild(player);
    wrapper.appendChild(button);

    return [button, title, player];
}
