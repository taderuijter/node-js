// Exports a function that shows the page not found error
exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
};
