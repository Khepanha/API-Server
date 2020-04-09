import model from '../models';

const { Book } = model;

class Books {
    static create(req, res) {
    const { title, author, description, quantity } = req.body
    const { userId } = req.params
    return Book
        .create({
        title,
        author,
        description,
        quantity,
        userId
        })
        .then(book => res.status(201).send({
        message: `Your book with the title ${title} has been created successfully `,
        book
        }))
    }
}

export default Books