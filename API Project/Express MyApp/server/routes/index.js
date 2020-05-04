// import Users from '../controllers/user';
// import Books from '../controllers/book';
var Users = require('../controllers/user');
var Books = require('../controllers/book');

export default (app) => {
    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
    }));
    
    app.post('/api/users', Users.signUp); // API route for user to signup
    app.post('/api/users/:userId/books', Books.create); // API route for user to create a book
};