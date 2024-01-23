function checkClass(){
    const buttonCheck = document.querySelector(".js-button");

    console.log(buttonCheck.classList.contains("js-button"));
}

function switchButton(){
    const buttonKey = document.querySelector(".js-button-two");

    if (!buttonKey.classList.contains("is-toggled")) {
        buttonKey.classList.add("is-toggled");
    } else {
        buttonKey.classList.remove("is-toggled");
    }
}

function threeButton(selector){
    const buttonOne = document.querySelector(selector);

    if (!buttonOne.classList.contains("is-toggled")) {
        buttonOne.classList.add("is-toggled");
    } else {
        buttonOne.classList.remove("is-toggled");
    }
}

function buttonCheck(selector){
    const button = document.querySelector(selector);
    if(!button.classList.contains('is-toggled-two')){
        previousCheck();
        button.classList.add('is-toggled-two');
    } else {
        button.classList.remove('is-toggled-two');
    }


}

function previousCheck(){
    const previousButton = document.querySelector('.is-toggled-two');

    if(previousButton){
        previousButton.classList.remove('is-toggled-two');
    }
}