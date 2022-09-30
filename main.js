import './style.css'
import 'tw-elements';

// * changing the themes
const mainBg = document.querySelector(".main");
const btn1 = document.querySelector(".theme-1");
const btn2 = document.querySelector(".theme-2");
const btn3 = document.querySelector(".theme-3");
const KeyPad = document.querySelector(".buttons");
const inputBg = document.querySelector("input");
const delKey = document.querySelector(".delkey");

const calc = document.querySelector(".calc");
const theme = document.querySelector(".theme");

btn1.addEventListener("click",()=>{
    Theme1();
});

btn2.addEventListener("click",()=>{
    Theme2();
});

btn3.addEventListener("click",()=>{
    Theme3();
});

function Theme1(){
    buttons.forEach(btn=>{
        btn.classList.add("theme1");
        btn.classList.remove("theme2");
        btn.classList.remove("theme3");
    });
    KeyPad.classList.add("bg-theme1-KeyPad");
    KeyPad.classList.remove("bg-theme2-KeyPad");
    KeyPad.classList.remove("bg-theme3-KeyPad");
    inputBg.classList.add("bg-theme1-InputBg");
    inputBg.classList.remove("bg-theme2-InputBg");
    inputBg.classList.remove("bg-theme3-InputBg");
    inputBg.classList.add("text-theme1-textClr");
    inputBg.classList.remove("text-theme2-textClr");
    inputBg.classList.remove("text-theme3-textClr");
    mainBg.classList.add("bg-theme1-MainBg");
    mainBg.classList.remove("bg-theme2-MainBg");
    mainBg.classList.remove("bg-theme3-MainBg");
    delKey.classList.add("bg-theme1-DelKey");
    delKey.classList.remove("bg-theme2-DelKey");
    delKey.classList.remove("bg-theme3-DelKey");
    delKey.classList.add("bg-theme1-DelKeyShadow");
    delKey.classList.remove("bg-theme2-DelKeyShadow");
    delKey.classList.remove("bg-theme3-DelKeyShadow");

    calc.classList.remove("text-black");
    theme.classList.remove("text-black");
}

function Theme2(){
    buttons.forEach(btn=>{
        btn.classList.add("theme2");
        btn.classList.remove("theme1");
        btn.classList.remove("theme3");
    });
    KeyPad.classList.add("bg-theme2-KeyPad");
    KeyPad.classList.remove("bg-theme1-KeyPad");
    KeyPad.classList.remove("bg-theme3-KeyPad");
    inputBg.classList.add("bg-theme2-InputBg");
    inputBg.classList.remove("bg-theme1-InputBg");
    inputBg.classList.remove("bg-theme3-InputBg");
    inputBg.classList.add("text-theme2-textClr");
    inputBg.classList.remove("text-theme1-textClr");
    inputBg.classList.remove("text-theme3-textClr");
    mainBg.classList.add("bg-theme2-MainBg");
    mainBg.classList.remove("bg-theme1-MainBg");
    mainBg.classList.remove("bg-theme3-MainBg");
    delKey.classList.add("bg-theme2-DelKey");
    delKey.classList.remove("bg-theme1-DelKey");
    delKey.classList.remove("bg-theme3-DelKey");
    delKey.classList.add("bg-theme2-DelKeyShadow");
    delKey.classList.remove("bg-theme1-DelKeyShadow");
    delKey.classList.remove("bg-theme3-DelKeyShadow");

    calc.classList.add("text-black");
    theme.classList.add("text-black");
}

function Theme3(){
    buttons.forEach(btn=>{
        btn.classList.add("theme3");
        btn.classList.remove("theme1");
        btn.classList.remove("theme2");
    });
    KeyPad.classList.add("bg-theme3-KeyPad");
    KeyPad.classList.remove("bg-theme1-KeyPad");
    KeyPad.classList.remove("bg-theme2-KeyPad");
    inputBg.classList.add("bg-theme3-InputBg");
    inputBg.classList.remove("bg-theme1-InputBg");
    inputBg.classList.remove("bg-theme2-InputBg");
    inputBg.classList.add("text-theme3-textClr");
    inputBg.classList.remove("text-theme1-textClr");
    inputBg.classList.remove("text-theme2-textClr");
    mainBg.classList.add("bg-theme3-MainBg");
    mainBg.classList.remove("bg-theme1-MainBg");
    mainBg.classList.remove("bg-theme2-MainBg");
    delKey.classList.add("bg-theme3-DelKey");
    delKey.classList.remove("bg-theme1-DelKey");
    delKey.classList.remove("bg-theme2-DelKey");
    delKey.classList.add("bg-theme3-DelKeyShadow");
    delKey.classList.remove("bg-theme1-DelKeyShadow");
    delKey.classList.remove("bg-theme2-DelKeyShadow");

    calc.classList.remove("text-black");
    theme.classList.remove("text-black");
}


// * working of the calculator
const display = document.getElementById("display");

// ? this gives a HTML Collection at first but to use map method we needed to convert this into Array
const buttons = Array.from(document.getElementsByClassName("btn"));

// ? Great and rly easy method to make a calculator work
buttons.map(btn => {
    btn.addEventListener("click",(e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.value = '';
                break;
            case '←':
                // just to say if it has somethng in it only then do this else leave it
                if(display.value){
                    display.value = display.value.slice(0 , -1);
                }
                break;
            case '=':
                if(display.value === ''){
                    display.value = 'ERROR !';
                }
                try{
                    display.value = eval(display.value); // eval method evaluates everything like JS and gives us a result after calcuating everything
                }catch{
                    display.value = 'ERROR !';
                }
                break;
            default: 
            display.value += e.target.innerText;
        }
    });
});