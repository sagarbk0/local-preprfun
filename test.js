const mongoose = require('mongoose')
const Promotion = require('./models/Promotion')
mongoose.connect('mongodb+srv://jfkdkslj:yFXbi4y8nKB3bkPB@cluster0.2fj2k.gcp.mongodb.net/my_database?retryWrites=true&w=majority', {useNewUrlParser: true});

// Promotion.create({
// title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
// body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:',
// business: 'XYZ Digital'
// }, (error, promotion) =>{
// console.log(error,promotion)
// })

// console.log(Promotion.find({
//   title: 'The Mythbuster’s Guide to Saving Money on Energy Bills'
// }, (error, promotion) =>
//   {
//     console.log(error,promotion)
//   }
// ))
var id = '5f88dda8c0d7bb0459bb1480';

Promotion.find({
}, (error, blogspot) =>{
console.log(error,blogspot)
})
