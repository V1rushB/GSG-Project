let quotesArray = [];

const displayQuotes = (quotes) => {
  let quoteList = document.getElementById('quoteList');
  quoteList.innerHTML = '';
  if (!quotes.length) {
    quoteList.innerHTML = 'No quotes found matching your search.';
    return;
  }
  quotes.forEach(quote => {
    let li = document.createElement('li');
    li.innerText = quote.quote;
    quoteList.appendChild(li);
  });
};

const filterQuotes = () => {
  let search = document.getElementById('searchInput').value.toUpperCase();
  let filteredQuotes = quotesArray.filter(quote => quote.quote.toUpperCase().includes(search));
  displayQuotes(filteredQuotes);
};


fetch('https://dummyjson.com/quotes')
  .then(response => response.json())
  .then(data => {
    quotesArray = data.quotes;
    displayQuotes(data.quotes);
  })
  .catch((err) => {
    document.getElementById('quoteList').innerHTML = "Failed to fetch.";
  });