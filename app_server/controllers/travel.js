const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const title = 'Travlr Getaways - Travel';

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: title, trips, selected: {travel: true} });
};
   
module.exports = {
    travel
};
