// This whole code is far from functional even with the I/O taken into account
// Should be refactored before trying to add more features to prevent unexpected behavior

const rmLeft = document.querySelector('.rm__left');
const rmRight = document.querySelector('.rm__right');
const rmImg = document.querySelector('.rm__img');
const rmTitle = document.querySelector('.rm__title');
const rmServings = document.querySelector('.rm__servings');
const rmTime = document.querySelector('.rm__time');
const rmIngredients = document.querySelector('.rm__ingredients');
const rmRemaining = document.querySelector('.rm__remaining');

// Used as a way to know how many recipes are left to swipe for the day
let rmIndex = localStorage.getItem('rmIndex') == null ? 0 : Number(localStorage.getItem('rmIndex'));
let recipe = {};

console.log({rmIndex});

// Returns list of recipes to swipe, calls the API only if it has been 24hrs since the last call
async function getRandomRecipes() {
    canCallAPI = localStorage.getItem('lastAPIcall') == null 
        || Date.now() < new Date(localStorage.getItem('lastAPIcall')).valueOf() + 86400000; // This is the number of ms in a day
    if (canCallAPI) {
        const resp = await fetch('https://api.spoonacular.com/recipes/random?apiKey=f973f930658342eab4c4a9cac8eaebe4&number=50');
        console.log('called API');
        localStorage.setItem('lastAPIcall', Date.now());
        const respData = await resp.json();
        localStorage.setItem('rmRecipes', JSON.stringify(respData));
        rmIndex = 0;
        localStorage.setItem('rmIndex', rmIndex);
        return respData;    
    }
    return JSON.parse(localStorage.getItem('rmRecipes'));
}

async function loadRecipeCard(offset=0) {
    const recipes = (await getRandomRecipes())['recipes'];
    rmIndex += offset;
    if (rmIndex >= recipes.length) {
        rmImg.classList.add('hidden');
        document.querySelector('.rm__text-c').classList.add('hidden');
        document.querySelector('.rm__norecipe').classList.remove('hidden');
        return;
    }
    recipe = recipes[rmIndex];
    rmIndex++;
    localStorage.setItem('rmIndex', rmIndex);
    console.log(recipe);
    rmImg.setAttribute('src', recipe['image']);
    rmImg.setAttribute('alt', recipe['title']);
    rmTitle.textContent = recipe['title'];
    rmServings.textContent = `${recipe['servings']} servings`;
    rmTime.textContent = `${recipe['readyInMinutes']} minutes`;
    rmIngredients.textContent = recipe['extendedIngredients'].reduce((str, item) => {
        if (item['nameClean'] != null) {
            str += item['nameClean'] + ', ';
        } else {
            str += item['name'] + ', ';
        }
        return str;
    },'');
    rmRemaining.textContent = recipes.length - rmIndex;
}

function clearRecipesLS() {
    localStorage.removeItem('recipes');
}

function addRecipeLS() {
    let recipes = JSON.parse(localStorage.getItem('recipes'));
    if (recipes == null) {
        recipes = [];
    }
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

rmLeft.addEventListener("click", () => {
    loadRecipeCard();
});
rmRight.addEventListener("click", () => {
    addRecipeLS();
    loadRecipeCard();
});

loadRecipeCard(-1);
