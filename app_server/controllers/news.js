const fs = require('fs');
const latestNews = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
const vacationTips = JSON.parse(fs.readFileSync('./data/vacation_tips.json', 'utf8'));
const title = 'Travlr Getaways - News';

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: title, latestNews, vacationTips, selected: {news: true} });
};
   
module.exports = {
    news
};