const guideToggle = document.querySelector(".shopify-setup-icon");
const setupStep = document.querySelector(".shopify-setup-step");

guideToggle.addEventListener("click", () => {
    if(setupStep.classList.contains("active")) {
        setupStep.classList.remove("active");
        guideToggle.style.transform = "rotate(0deg)";
    } else{
        setupStep.classList.add("active");
        guideToggle.style.transform = "rotate(180deg)";
    }
})