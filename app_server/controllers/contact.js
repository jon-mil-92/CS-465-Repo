const title = process.env.npm_package_description + ' - Contact';

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', { title: title, selected: {contact: true} });
};
   
module.exports = {
    contact
};