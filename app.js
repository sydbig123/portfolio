let paragraphs = document.querySelectorAll("p");

paragraphs.forEach((para) => {
    if (!para.classList.contains("noIn")) {
        para.classList.add("in")
    }
});


