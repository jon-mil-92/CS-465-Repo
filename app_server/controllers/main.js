const fs = require('fs');
const latestBlogs = JSON.parse(fs.readFileSync('./data/latest_blogs.json', 'utf8'));
const sidebarEntries = JSON.parse(fs.readFileSync('./data/sidebar_entries.json', 'utf8'));
const title = 'Travlr Getaways - Home';

/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: title, latestBlogs, sidebarEntries, selected: {home: true} });
};

module.exports = {
    index
};