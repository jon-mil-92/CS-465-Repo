const title = 'Travlr Getaways - About';

/* GET about view */
const about = (req, res) => {
    res.render('about', { title: title, selected: {about: true} });
};
   
module.exports = {
    about
};