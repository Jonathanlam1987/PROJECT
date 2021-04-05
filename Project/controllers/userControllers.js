






function renderSignupForm(req, res) {
    res.render('signup', {
        layouts: 'alternative',
    });
}

function renderLoginForm(req, res) {
    res.render("login", {
      layouts: "alternative",
    });
  }


module.exports = { 
    renderSignupForm,
    renderLoginForm
 }