// console.log('Hello World!');

const books = [
  {
    title: "Harry Potter i kamień filozoficzny",
    author: "J.K. Rowling",
    year: 1992,
    price: 49.99
  },
  {
    title: "Lord Of The Rings",
    author: 'Tolkien',
    year: 1980,
    price: 39.99
  },
  {
    title: 'God Father',
    author: "Puzo",
    year: 1960,
    price: 29.99
  }
]

console.log('Exercise 4');
books.forEach(book => {
    // console.log(book.author);
});

const authorsOfBooks = books.map((book) => {
    return book.author
})

// console.log(authorsOfBooks);

const authorsNamesLength = authorsOfBooks.map((author) => {
    return author.length
})

// console.log(authorsNamesLength);

console.log('Exercise 4');
const getBookByAuthorName = books.find((book) => {
    return book.author.includes("J.K. Rowling") 
})

console.log(getBookByAuthorName);


console.log('Exercise 5');
const getBook = books.filter((book) => {
    return book.author.length > 4;
})

getBook.forEach(book => {
    console.log(book.title);
});

console.log('Exercise 6');
const booksAfterSeventies = books.filter((book) => {
    return book.year > 1970
})

console.log(booksAfterSeventies);

let price = 0;
booksAfterSeventies.forEach(book => {
    price += book.price;
});

console.log(price);