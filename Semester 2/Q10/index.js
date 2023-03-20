const cel_btn = document.querySelector('.cel-btn');
const far_btn = document.querySelector('.far-btn');

cel_btn.addEventListener("click", () => {
    const cel = parseFloat(document.querySelector('.cel').value);
    const far = document.querySelector('.far');

    far.value = cel*(9/5) + 32;

});

far_btn.addEventListener("click", () => {
        const far = parseFloat(document.querySelector(".far").value);
        const cel = document.querySelector(".cel");

        cel.value = (far - 32)*(5/9);
});