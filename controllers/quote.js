const Quote = require('../models/Quote');

module.exports = {
  getQuotes: async (req, res) => {
    try {
      const quotes = await Quote.find();
      res.render('quotes.ejs', { quotes });
    } catch (err) {
      console.error(err);
    }
  },
  addQuote: async (req, res) => {
    res.render('addQuote.ejs');
  },
  createQuote: async (req, res) => {
    try {
      const { quote, author } = await req.body;
      Quote.create({ quote, author });
      // console.log(`quote ${quote}, author ${author}`);
      // res.render("quotes.ejs");
      res.redirect(`/quotes`);
    } catch (err) {
      console.log(err);
    }
  },
};
