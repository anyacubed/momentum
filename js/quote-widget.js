const quote = document.querySelector(".quote");
const authors = document.querySelector(".author");
const changeQuoteButton = document.querySelector(".change-quote");

async function getQuotes() {  
  const quotes = 'https://www.breakingbadapi.com/api/quotes';
  const res = await fetch(quotes);
  const data = await res.json(); 

  let min = Math.ceil(1);
  let max = Math.floor(data.length);
  let index = Math.floor(Math.random() * (max - min + 1)) + min;

  quote.textContent = data[index].quote;
  authors.textContent = data[index].author;
}
 
getQuotes();
changeQuoteButton.addEventListener('click', getQuotes);
