const recipes = JSON.parse(localStorage.getItem('recipes'));

const recapImg = document.querySelector('.recap__img');
const recapTitle = document.querySelector('.recap__title');
const recapServings = document.querySelector('.recap__servings');
const recapTime = document.querySelector('.recap__time');
const recapCredit = document.querySelector('.recap__credit');
const recipeIngredients = document.querySelector('.recipe__ingredients');
const recipeSteps = document.querySelector('.recipe__steps');

function loadRecipe(recipeIndex) {
    const recipe = recipes[recipeIndex];
    console.log(recipe);
    console.log(recipe['instructions']);

    recapImg.setAttribute('src', recipe['image']);
    recapImg.setAttribute('alt', recipe['title']);
    recapTitle.textContent = recipe['title'];
    recapServings.textContent = `${recipe['servings']} servings`;
    recapTime.textContent = `${recipe['readyInMinutes']} minutes`;
    if (recipe['openLicense'] == -1 && recipe['sourceName'] != null){
        recapCredit.classList.remove('hidden');
        recapCredit.textContent = `credit: ${recipe['sourceName']}`;
    } else {
        recapCredit.classList.add('hidden');
    }

    recipeIngredients.innerHTML = recipe['extendedIngredients'].reduce((list, item) => {
        list += `<li>${item['original']}</li>`
        return list;
    }, '')
    recipeSteps.innerHTML = recipe['instructions'];
}

const modalButton = document.querySelector('.js-modal-load');
const modalQuit = document.querySelector('.modal__quit');
const modal = document.querySelector('.modal__overlay');
const modalList = document.querySelector('.modal__list');
modalButton.addEventListener("click", () => {
    modal.classList.remove('hidden');
    modalList.innerHTML = recipes.reduce((list, item, index) => {
        list += `<li class="modal__list-item ${index}">${item['title']}</li>`;
        return list;
    }, '');
    document.querySelectorAll('.modal__list-item').forEach((item) => {
        item.addEventListener("click", () => {
            modal.classList.add('hidden');
            loadRecipe(Number(item.classList.item(1)));
            localStorage.setItem('currentRecipe', item.classList.item(1));
        });
    });
});
modalQuit.addEventListener("click", () => {
    modal.classList.add('hidden');
});

let currentRecipeLS = localStorage.getItem('currentRecipe');
let currentRecipe = 0;
if (currentRecipeLS == null) {
    localStorage.setItem('currentRecipe', '0');
} else {
    currentRecipe = Number(currentRecipeLS);
}
loadRecipe(currentRecipe);
