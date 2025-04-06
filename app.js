import { books } from './books.js';
const bookSummaries = books.map(book => book.getSummary());
console.log("Book Summaries:");
bookSummaries.forEach((summary, index) => {
    console.log(`${index + 1}. ${summary}`);
});
