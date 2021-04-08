const { createUser, loginUser,  } = require('../services/userService.js')

function renderSignupForm(req, res) {
    res.render('signup', {
        layouts: 'alternative',
    });
}

async function processSignupSubmission(req, res, next) {
  let token; 
  try {
    token = await createUser({ ...req.body, category: "customer"});
  } catch (error) {
    next(error);
  }
 
  if ( token === 'DUPLICATE_USERNAME') {
    message = 'Sorry, username is already taken';
  } else if (token) {
    res.cookie('jwt', token, { httpOnly: true });
    message = 'You just created an account !';
  } else {
    message = 'An error has occured, please try again!'
  }
  res.render('signup', {
    layouts: 'alternative',
    message,
  });
}


function renderLoginForm(req, res) {
    res.render("login", {
      layouts: "alternative",
    });
  }


async function processLoginSubmission(req, res, next) {
  let token;
  try {
    token = await loginUser(req.body.name, req.body.password);
  } catch (error) {
    next(error);
  }

  if (token) {
    res.cookie('jwt', token, { httpOnly:true });
    message = 'You have successfully logged in',
    res.redirect('/');
  } else {
    message = ' Invalid name or password';
    res.render('login', {
      layouts: 'alternative',
      message,
    });
  }
}

function renderOut(req, res) {
  res.clearCookie('jwt');
  res.render('logout');
}


module.exports = { 
    renderSignupForm,
    renderLoginForm,
    processSignupSubmission,
    processLoginSubmission,
    renderOut
 }