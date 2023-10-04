let quotesList = [
  {
    quote: "Do what you can, with what you’ve got, where you are.",
    author: "Teddy Roosevelt",
  },
  {
    quote:
      "Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.",
    author: " Dwayne Johnson",
  },
  {
    quote: "Nothing is impossible, the word itself says ‘I’m possible’!.",
    author: "Audrey Hepburn",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: " Nelson Mandela",
  },
  {
    quote: "People begin to become successful the minute they decide to be.",
    author: "Harvey MacKay",
  },
  {
    quote:
      "However difficult life may seem, there is always something you can do and succeed a.",
    author: "Stephen Hawking",
  },
  {
    quote:
      "All our dreams can come true; if we have the courage to pursue them.",
    author: " Walt Disney",
  },
];
let quoteEl = document.getElementById("quote");
let authorEl = document.getElementById("author");

function getLocalQuotes() {
  let i = Math.floor(Math.random() * quotesList.length);
  quoteEl.innerText = quotesList[i].quote;
  authorEl.innerText = "--" + "" + quotesList[i].author;
}
// document.getElementById("button").onclick = getLocalQuotes;

async function quoteAPI() {
  let response = await fetch("http://api.quotable.io/random");
  console.log(response);
  let quote = await response.json();
  quoteEl.innerText = quote.content;
  authorEl.innerText = "--" + "" + quote.author;
}
document.getElementById("button").onclick = quoteAPI;
