import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:5555',
//     methods:['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// )

app.get('/', (request, response) => {
  console.log(request)
  return response.status(200).send('Welcome to BookStore App')
});

app.use('/books', booksRoute)

// // Route for saving new Book
// app.post('/books', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: title, author, publishYear',
//       });
//     }
//     const newBook = {
//       title: request.body.title,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//     }

//     const book = await Book.create(newBook);

//     return response.status(201).send(book);
//   }
//   catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message })
//   }
// });

// // Route for GET All Books from database
// app.get('/books', async (request, response) => {
//   try {
//     const books = await Book.find({});
//     return response.status(200).json({
//       count: books.length,
//       data: books
//     });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message })
//   }
// });

// // Route for get book by id
// app.get('/books/:id', async (request, response) => {
//   try {

//     const { id } = request.params; 
//     const book = await Book.findById(id);
//     return response.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message })
//   }
// });

// // Route for updating book
// app.put('/books/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     // Extract the fields you want to update from the request body
//     const { title, author, publishYear } = request.body;

//     // Check if all required fields are present in the request body
//     if (!title || !author || !publishYear) {
//       return response.status(400).send({
//         message: 'Send all required fields: title, author, publishYear',
//       });
//     }

//     // Create an object containing the fields to update
//     const updateFields = { title, author, publishYear };

//     // Find and update the book by ID
//     const result = await Book.findByIdAndUpdate(id, updateFields);

//     // If no book was found with the given ID, return a 404 error
//     if (!result) {
//       return response.status(404).json({ message: 'Book Not Found' });
//     }

//     // If the book was successfully updated, return a success message
//     return response.status(200).send({ message: 'Book updated successfully!' });
    
//   } catch (error) {
//     console.error('Error:', error);
//     response.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// // Route to Delete a book by id
// app.delete('/books/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).send({ message: error.message })
//     }

//     return response.status(200).send({ message: "Book Deleted Successfully!" })

//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message })
//   }
// });


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App Connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })
