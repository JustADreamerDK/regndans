var faqButton = document.querySelector(".faq__button");
var faqAnswer = document.querySelector(".faq__answer");
var faqButtonLuk = document.querySelector(".faq__button--luk");

if(faqButton){
faqButton.addEventListener("click", function(event){
    faqAnswer.style.display = "block";
    faqButtonLuk.style.display = "flex";
    faqButton.style.display = "none";
})};

if(faqButtonLuk){
faqButtonLuk.addEventListener("click", function(event){
    faqAnswer.style.display = "none";
    faqButtonLuk.style.display = "none";
    faqButton.style.display = "flex";
})};