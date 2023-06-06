function handleForm(event) {
    event.preventDefault();

    
}

window.addEventListener('load', function() {
    document.getElementById("form#groceries").addEventListener("submit", handleForm);
});