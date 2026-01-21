const switcher = document.getElementById("languageSwitcher");

if(switcher){
switcher.addEventListener("change", async () => {
    const lang = switcher.value;
    const response = await fetch(`lang/${lang}.json`);
    const data = await response.json();

    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = data[el.getAttribute("data-lang")];
    });
});
}
