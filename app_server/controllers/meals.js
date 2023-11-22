const fs = require('fs');
const mealTypes = JSON.parse(fs.readFileSync('./data/meal_types.json', 'utf8'));
const title = process.env.npm_package_description + ' - Meals';

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: title, mealTypes, selected: {meals: true} });
};
   
module.exports = {
    meals
};