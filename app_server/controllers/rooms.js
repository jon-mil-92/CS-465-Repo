const fs = require('fs');
const roomTypes = JSON.parse(fs.readFileSync('./data/room_types.json', 'utf8'));
const title = 'Travlr Getaways - Rooms';

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: title, roomTypes, selected: {rooms: true} });
};
   
module.exports = {
    rooms
};