export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (books: {title: string, author:string} []): string[] => {
  let newArr = [];

  for (const book of books) {
    newArr.push(book.title)
  }

  return newArr
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
