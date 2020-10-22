const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
const ejs = require('ejs');

const Promotion = require('./models/Promotion.js');

mongoose.connect('mongodb+srv://jfkdkslj:yFXbi4y8nKB3bkPB@cluster0.2fj2k.gcp.mongodb.net/my_database?retryWrites=true&w=majority', {useNewUrlParser: true});

const app = new express();
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(4000, ()=>{
    console.log('App listening on port 4000 ...')    
})

app.get('/', (req, res) => {
  res.render('home_page')
})

app.get('/landing-page',(req,res)=>{
  res.render('landing_page');
})

app.get('/sign-up',(req,res)=>{
  res.render('sign_up');
})

app.get('/sign-in',(req,res)=>{
  res.render('sign_in');
})

app.get('/sign-up-2',(req,res)=>{
  res.render('sign_up_2');
})

app.get('/purchase',(req,res)=>{
  res.render('purchase');
})

app.get('/learn-more',(req,res)=>{
  res.render('learn_more');
})

app.get('/new-post',(req,res)=>{
res.render('create');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/posts/store', async (req,res)=>{
  await Promotion.create(req.body,(error,promotion) =>{
  res.redirect('/')
  })
})

app.get('/new-post',(req,res)=>{
res.render('create');
})

app.get('/search', async (req,res)=>{
  const promotions = await Promotion.find({})
  res.render('search', {
    promotions: promotions
  });
})

app.get('/contact-us',(req,res)=>{
  res.render('contact_us');
})

app.get('/help-faq',(req,res)=>{
  res.render('help_faq');
})

app.get('/who-we-are',(req,res)=>{
  res.render('who_we_are');
})

app.get('/how-does-it-work',(req,res)=>{
  res.render('how_does_it_work');
})