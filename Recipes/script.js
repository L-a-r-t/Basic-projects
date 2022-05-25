const rmImg = document.querySelector('.rm__r-img');
const rmTitle = document.querySelector('.rm__r-title');
const rmServings = document.querySelector('.rm__r-servings');
const rmTime = document.querySelector('.rm__r-time');

async function getRandomRecipes() {
    if (localStorage.getItem('recipes') != null) {
        console.log('recipes already in local storage');
        return JSON.parse(localStorage.getItem('recipes'));
    }
    const resp = await fetch('https://api.spoonacular.com/recipes/random?apiKey=f973f930658342eab4c4a9cac8eaebe4&number=5');
    const respData = await resp.json();
    return respData;
}

async function setRecipesLS() {
    const recipes = await getRandomRecipes();
    console.log(recipes);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

async function loadRecipeCard() {
    const recipe = (await getRandomRecipes())['recipes'][2];
    console.log(recipe);
    rmImg.setAttribute('src', recipe['image']);
    rmTitle.textContent = recipe['title'];
    rmServings.textContent = `${recipe['servings']} servings`;
    rmTime.textContent = `${recipe['readyInMinutes']} minutes`;
}

function clearRecipesLS() {
    localStorage.removeItem('recipes');
}

loadRecipeCard();