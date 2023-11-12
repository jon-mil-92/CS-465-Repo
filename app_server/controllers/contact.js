const title = 'Travlr Getaways - Contact';

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', { title: title, selected: {contact: true} });
};
   
module.exports = {
    contact
};