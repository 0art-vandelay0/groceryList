function handleForm(event) {
    event.preventDefault();

    const userGroceries = document.querySelectorAll("input[name='groceries']");
    const userGroceriesArray = Array.from(userGroceries);

    const resulth2 = document.createElement("h2");
    resulth2.append("Your Groceries List");
    document.body.append(resulth2);

    userGroceriesArray.forEach(function(grocery) {
        newUl = document.createElement("ul");
        newLi = document.createElement("li");
        newLi.append(grocery.value);
        newUl.append(newLi);
        document.body.append(newUl);
    });

}

function hideForm() {
    document.getElementById("groceriesList").setAttribute("class", "hidden");
}

window.addEventListener('load', function() {
    document.getElementById("groceriesList").addEventListener("submit", handleForm);
    document.getElementById("groceriesList").addEventListener("submit", hideForm);
});