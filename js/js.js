var faqButton1 = document.querySelector("#faq__button1");
var faqAnswer1 = document.querySelector("#faq__answer1");
var faqButtonLuk1 = document.querySelector("#faq__button--luk1");

if(faqButton1){
faqButton1.addEventListener("click", function(event){
    faqAnswer1.style.display = "block";
    faqButtonLuk1.style.display = "flex";
    faqButton1.style.display = "none";
})};

if(faqButtonLuk1){
faqButtonLuk1.addEventListener("click", function(event){
    faqAnswer1.style.display = "none";
    faqButtonLuk1.style.display = "none";
    faqButton1.style.display = "flex";
})};

var faqButton2 = document.querySelector("#faq__button2");
var faqAnswer2 = document.querySelector("#faq__answer2");
var faqButtonLuk2 = document.querySelector("#faq__button--luk2");

if(faqButton2){
faqButton2.addEventListener("click", function(event){
    faqAnswer2.style.display = "block";
    faqButtonLuk2.style.display = "flex";
    faqButton2.style.display = "none";
})};

if(faqButtonLuk2){
faqButtonLuk2.addEventListener("click", function(event){
    faqAnswer2.style.display = "none";
    faqButtonLuk2.style.display = "none";
    faqButton2.style.display = "flex";
})};

var faqButton3 = document.querySelector("#faq__button3");
var faqAnswer3 = document.querySelector("#faq__answer3");
var faqButtonLuk3 = document.querySelector("#faq__button--luk3");

if(faqButton3){
faqButton3.addEventListener("click", function(event){
    faqAnswer3.style.display = "block";
    faqButtonLuk3.style.display = "flex";
    faqButton3.style.display = "none";
})};

if(faqButtonLuk3){
faqButtonLuk3.addEventListener("click", function(event){
    faqAnswer3.style.display = "none";
    faqButtonLuk3.style.display = "none";
    faqButton3.style.display = "flex";
})};