function purchase(planname){
    alert("Congratulations !!! Now You Are Our Primium Member .");
}

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const answer = item.querySelector(".answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});

