const title = process.env.npm_package_description + ' - About';

/* GET about view */
const about = (req, res) => {
    res.render('about', { title: title, selected: {about: true} });
};
   
module.exports = {
    about
};